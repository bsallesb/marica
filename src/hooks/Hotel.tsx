import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { HotelType } from '../@types/Hotel';
import Api from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface HotelContextData {
    hotel: HotelType | null;
    hotels: HotelType[];
    category: CategoryType | null;
    categories: CategoryType[];
    isLoading: boolean;
    setCategory: (category: CategoryType) => void;
    getHotels: (text?: string) => Promise<void>;
    getHotel: (id: number) => Promise<void>;
    getHotelsByCategory: (id: number) => Promise<void>;
    getCategories: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const HotelsContext = createContext<HotelContextData>(
    {} as HotelContextData
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useHotels = (): HotelContextData => {
    const context = useContext(HotelsContext);

    if (!context) {
        throw new Error('useSpots must be within HotelsProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const HotelsProvider: React.FC = ({ children }) => {
    const [hotels, setHotels] = useState<HotelType[]>([]);
    const [hotel, setHotel] = useState<HotelType | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setLoading] = useState(true);

    const getHotels = useCallback(async (searchText = ''): Promise<void> => {
        let url = '/hoteis-e-pousadas';

        setLoading(true);

        if (searchText.length > 0) {
            url += `/busca?busca=${searchText}`;
        }

        Api.get(url)
            .then(response => {
                setHotels(response.data.collection);
                if (response.data.categorias) {
                    setCategories(response.data.categorias);
                }
            })
            .catch(() => {
                setHotels([]);
                setCategories([]);
            })
            .finally(() => setLoading(false));
    }, []);

    const getHotelsByCategory = useCallback(async (id): Promise<void> => {
        setLoading(true);

        Api.get(`hoteis-e-pousadas/categorias/${id}`)
            .then(response => {
                setHotels(response.data.collection);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getHotel = useCallback(async (id: number): Promise<void> => {
        setHotel(null);
        setLoading(true);

        Api.get(`/hoteis-e-pousadas/${id}`)
            .then(response => {
                setHotel(response.data.item ?? null);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getCategories = useCallback(async (id): Promise<void> => {
        Api.get(`/hoteis-e-pousadas/categorias`)
            .then(response => {
                const categoriesResponse =
                    (response.data?.categorias as CategoryType[]) ??
                    ([] as CategoryType[]);
                setCategories(categoriesResponse);
                const categoryById = categoriesResponse.find(
                    _category => _category.id === id
                );
                if (categoryById) {
                    setCategory(categoryById);
                }
            })
            .catch()
            .finally();
    }, []);

    // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
    const providerValue = useMemo(
        () => ({
            hotel,
            hotels,
            category,
            categories,
            isLoading,
            setCategory,
            getHotels,
            getHotel,
            getHotelsByCategory,
            getCategories,
        }),
        [
            hotels,
            category,
            categories,
            isLoading,
            hotel,
            setCategory,
            getHotels,
            getHotel,
            getHotelsByCategory,
            getCategories,
        ]
    );

    return (
        <HotelsContext.Provider value={providerValue}>
            {children}
        </HotelsContext.Provider>
    );
};
