import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { BusinessType } from '../@types/Business';
import Api from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface BusinessContextData {
    businesses: BusinessType[];
    categories: CategoryType[];
    category: CategoryType | null;
    isLoading: boolean;
    getBusinesses: (text?: string) => Promise<void>;
    setCategory: (category: CategoryType) => void;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const BusinessesContext = createContext<BusinessContextData>(
    {} as BusinessContextData
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useBusinesses = (): BusinessContextData => {
    const context = useContext(BusinessesContext);

    if (!context) {
        throw new Error('useBusinesses must be within BusinessesProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const BusinessesProvider: React.FC = ({ children }) => {
    const [businesses, setBusinesses] = useState<BusinessType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setLoading] = useState(true);

    const getBusinesses = useCallback(
        async (searchText = ''): Promise<void> => {
            let url = '/comercios';

            setLoading(true);
            if (searchText.length > 0) {
                url += `/busca?busca=${searchText}`;
            }

            Api.get(url, { params: { fileds: 'is_delivery' } })
                .then(response => {
                    setBusinesses(response?.data?.collection);
                    if (response?.data?.categorias) {
                        setCategories(response?.data?.categorias);
                    }
                })
                .catch(() => {
                    setBusinesses([]);
                    setCategories([]);
                })
                .finally(() => setLoading(false));
        },
        []
    );

    // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
    const providerValue = useMemo(
        () => ({
            businesses,
            categories,
            category,
            isLoading,
            getBusinesses,
            setCategory,
        }),
        [
            businesses,
            categories,
            category,
            isLoading,
            getBusinesses,
            setCategory,
        ]
    );

    return (
        <BusinessesContext.Provider value={providerValue}>
            {children}
        </BusinessesContext.Provider>
    );
};
