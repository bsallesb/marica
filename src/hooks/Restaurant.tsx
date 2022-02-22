import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { RestaurantType } from '../@types/Restaurant';
import Api from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface RestaurantContextData {
    restaurant: RestaurantType | null;
    restaurants: RestaurantType[];
    category: CategoryType | null;
    categories: CategoryType[];
    isLoading: boolean;
    setCategory: (category: CategoryType) => void;
    getRestaurants: (text?: string) => Promise<void>;
    getRestaurant: (id: number) => Promise<void>;
    getRestaurantsByCategory: (id: number) => Promise<void>;
    getCategories: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const RestaurantsContext = createContext<RestaurantContextData>(
    {} as RestaurantContextData
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useRestaurants = (): RestaurantContextData => {
    const context = useContext(RestaurantsContext);

    if (!context) {
        throw new Error('useRestaurants must be within RestaurantsProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const RestaurantsProvider: React.FC = ({ children }) => {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
    const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setLoading] = useState(true);

    const getRestaurants = useCallback(
        async (searchText = ''): Promise<void> => {
            let url = '/restaurantes?fields=is_delivery';

            setLoading(true);

            if (searchText.length > 0) {
                url += `/busca?busca=${searchText}`;
            }

            Api.get(url)
                .then(response => {
                    setRestaurants(response.data.collection);
                    if (response.data.categorias) {
                        setCategories(response.data.categorias);
                    }
                })
                .catch(() => {
                    setRestaurants([]);
                    setCategories([]);
                })
                .finally(() => setLoading(false));
        },
        []
    );

    const getRestaurantsByCategory = useCallback(async (id): Promise<void> => {
        setLoading(true);

        Api.get(`hoteis-e-pousadas/categorias/${id}`)
            .then(response => {
                setRestaurants(response.data.collection);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getRestaurant = useCallback(async (id: number): Promise<void> => {
        setRestaurant(null);
        setLoading(true);

        Api.get(`/restaurantes/${id}`)
            .then(response => {
                setRestaurant(response.data.item ?? null);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getCategories = useCallback(async (id): Promise<void> => {
        Api.get(`/bares-e-restaurantes/categorias`)
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
            restaurant,
            restaurants,
            category,
            categories,
            isLoading,
            setCategory,
            getRestaurants,
            getRestaurant,
            getRestaurantsByCategory,
            getCategories,
        }),
        [
            restaurants,
            category,
            categories,
            isLoading,
            restaurant,
            setCategory,
            getRestaurants,
            getRestaurant,
            getRestaurantsByCategory,
            getCategories,
        ]
    );

    return (
        <RestaurantsContext.Provider value={providerValue}>
            {children}
        </RestaurantsContext.Provider>
    );
};
