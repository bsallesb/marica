import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { EventSpaceType } from '../@types/EventSpace';
import Api from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface EventSpaceContextData {
    eventSpace: EventSpaceType | null;
    eventSpaces: EventSpaceType[];
    category: CategoryType | null;
    categories: CategoryType[];
    isLoading: boolean;
    setCategory: (category: CategoryType) => void;
    getEventSpaces: (text?: string) => Promise<void>;
    getEventSpace: (id: number) => Promise<void>;
    getEventSpacesByCategory: (id: number) => Promise<void>;
    getCategories: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const EventSpacesContext = createContext<EventSpaceContextData>(
    {} as EventSpaceContextData
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useEventSpaces = (): EventSpaceContextData => {
    const context = useContext(EventSpacesContext);

    if (!context) {
        throw new Error('useEventSpaces must be within EventSpacesProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const EventSpacesProvider: React.FC = ({ children }) => {
    const [eventSpaces, setEventSpaces] = useState<EventSpaceType[]>([]);
    const [eventSpace, setEventSpace] = useState<EventSpaceType | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setLoading] = useState(true);

    const getEventSpaces = useCallback(
        async (searchText = ''): Promise<void> => {
            let url = '/espacos';

            setLoading(true);

            if (searchText.length > 0) {
                url += `/busca?busca=${searchText}`;
            }

            Api.get(url)
                .then(response => {
                    setEventSpaces(response.data.collection);
                    if (response.data.categorias) {
                        setCategories(response.data.categorias);
                    }
                })
                .catch(() => {
                    setEventSpaces([]);
                    setCategories([]);
                })
                .finally(() => setLoading(false));
        },
        []
    );

    const getEventSpacesByCategory = useCallback(async (id): Promise<void> => {
        setLoading(true);

        Api.get(`espacos/categorias/${id}`)
            .then(response => {
                setEventSpaces(response.data.collection);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getEventSpace = useCallback(async (id: number): Promise<void> => {
        setEventSpace(null);
        setLoading(true);

        Api.get(`/espacos/${id}`)
            .then(response => {
                setEventSpace(response.data.item ?? null);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getCategories = useCallback(async (id): Promise<void> => {
        Api.get(`/espacos/categorias`)
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
            eventSpace,
            eventSpaces,
            category,
            categories,
            isLoading,
            setCategory,
            getEventSpaces,
            getEventSpace,
            getEventSpacesByCategory,
            getCategories,
        }),
        [
            eventSpaces,
            category,
            categories,
            isLoading,
            eventSpace,
            setCategory,
            getEventSpaces,
            getEventSpace,
            getEventSpacesByCategory,
            getCategories,
        ]
    );

    return (
        <EventSpacesContext.Provider value={providerValue}>
            {children}
        </EventSpacesContext.Provider>
    );
};
