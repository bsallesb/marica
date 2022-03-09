import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { EventType } from '../@types/Event';
import Api from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface EventContextData {
    event: EventType | null;
    events: EventType[];
    category: CategoryType | null;
    categories: CategoryType[];
    isLoading: boolean;
    setCategory: (category: CategoryType) => void;
    getEvents: (text?: string) => Promise<void>;
    getEvent: (id: number) => Promise<void>;
    getEventsByCategory: (id: number) => Promise<void>;
    getCategories: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const EventsContext = createContext<EventContextData>(
    {} as EventContextData
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useEvents = (): EventContextData => {
    const context = useContext(EventsContext);

    if (!context) {
        throw new Error('useEvents must be within EventsProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const EventsProvider: React.FC = ({ children }) => {
    const [events, setEvents] = useState<EventType[]>([]);
    const [event, setEvent] = useState<EventType | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setLoading] = useState(true);

    const getEvents = useCallback(async (searchText = ''): Promise<void> => {
        let url = '/eventos';

        setLoading(true);

        if (searchText.length > 0) {
            url += `/busca?busca=${searchText}`;
        }

        Api.get(url, {
            params: {
                fields: 'datahora_inicio',
                orderby: 'datahora_inicio',
                order: 'asc',
            },
        })
            .then(response => {
                setEvents(response.data.collection);
                if (response.data.categorias) {
                    setCategories(response.data.categorias);
                }
            })
            .catch(() => {
                setEvents([]);
                setCategories([]);
            })
            .finally(() => setLoading(false));
    }, []);

    const getEventsByCategory = useCallback(async (id): Promise<void> => {
        setLoading(true);

        Api.get(`eventos/categorias/${id}`, {
            params: {
                fields: 'datahora_inicio',
                orderby: 'datahora_inicio',
                order: 'asc',
            },
        })
            .then(response => {
                setEvents(response.data.collection);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getEvent = useCallback(async (id: number): Promise<void> => {
        setEvent(null);
        setLoading(true);

        Api.get(`/eventos/${id}`)
            .then(response => {
                setEvent(response.data.item ?? null);
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getCategories = useCallback(async (id): Promise<void> => {
        Api.get(`/eventos/categorias`)
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
            event,
            events,
            category,
            categories,
            isLoading,
            setCategory,
            getEvents,
            getEvent,
            getEventsByCategory,
            getCategories,
        }),
        [
            events,
            category,
            categories,
            isLoading,
            event,
            setCategory,
            getEvents,
            getEvent,
            getEventsByCategory,
            getCategories,
        ]
    );

    return (
        <EventsContext.Provider value={providerValue}>
            {children}
        </EventsContext.Provider>
    );
};
