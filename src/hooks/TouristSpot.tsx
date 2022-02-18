import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { SpotType } from '../@types/Spot';
import Api from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface SpotContextData {
    spot: SpotType | null;
    spots: SpotType[];
    category: CategoryType | null;
    categories: CategoryType[];
    isLoading: boolean;
    setCategory: (category: CategoryType) => void;
    getSpots: (text?: string) => Promise<void>;
    getSpot: (id: number) => Promise<void>;
    getSpotsByCategory: (id: number) => Promise<void>;
    getCategories: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const SpotsContext = createContext<SpotContextData>(
    {} as SpotContextData
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useSpots = (): SpotContextData => {
    const context = useContext(SpotsContext);

    if (!context) {
        throw new Error('useSpots must be within SpotsProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const SpotsProvider: React.FC = ({ children }) => {
    const [spots, setSpots] = useState<SpotType[]>([]);
    const [spot, setSpot] = useState<SpotType | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setLoading] = useState(true);

    const getSpots = useCallback(async (searchText = ''): Promise<void> => {
        let url = '/pontos';

        setLoading(true);

        if (searchText.length > 0) {
            url += `/busca?busca=${searchText}`;
        }

        Api.get(url)
            .then(response => {
                setSpots(response.data.collection);
                if (response.data.categorias) {
                    setCategories(response.data.categorias);
                }
            })
            .catch(() => {
                setSpots([]);
                setCategories([]);
            })
            .finally(() => setLoading(false));
    }, []);

    const getSpotsByCategory = useCallback(async (id): Promise<void> => {
        setLoading(true);

        Api.get(`pontos/categorias/${id}`)
            .then(response => {
                setSpots(response.data.collection);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getSpot = useCallback(async (id: number): Promise<void> => {
        setSpot(null);
        setLoading(true);

        Api.get(`/pontos/${id}`)
            .then(response => {
                setSpot(response.data.item ?? null);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getCategories = useCallback(async (id): Promise<void> => {
        Api.get(`/pontos/categorias`)
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
            spot,
            spots,
            category,
            categories,
            isLoading,
            setCategory,
            getSpots,
            getSpot,
            getSpotsByCategory,
            getCategories,
        }),
        [
            spots,
            category,
            categories,
            isLoading,
            spot,
            setCategory,
            getSpots,
            getSpot,
            getSpotsByCategory,
            getCategories,
        ]
    );

    return (
        <SpotsContext.Provider value={providerValue}>
            {children}
        </SpotsContext.Provider>
    );
};
