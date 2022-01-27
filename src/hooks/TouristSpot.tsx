import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { SpotType } from '../@types/SpotType';
import Api from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface SpotContextData {
    spots: SpotType[];
    categories: SpotType[];
    getSpots: () => Promise<void>;
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
    const [categories, setCategories] = useState<SpotType[]>([]);

    const getSpots = useCallback(async (): Promise<void> => {
        Api.get('/pontos')
            .then(response => {
                setSpots(response.data.collection);
                setCategories(response.data.categorias);
            })
            .catch(() => {
                setSpots([])
                setCategories([])
            })
            .finally()
    }, []);

    console.log('spots', spots);
    // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
    const providerValue = useMemo(
        () => ({
            spots,
            categories,
            getSpots,
        }),
        [spots, categories, getSpots]
    );

    return (
        <SpotsContext.Provider value={providerValue}>
            {children}
        </SpotsContext.Provider>
    );
};