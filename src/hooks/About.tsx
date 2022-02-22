import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import Api from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface AboutContextData {
    isLoading: boolean;
    about: string;
    getAbout: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const AboutContext = createContext<AboutContextData>(
    {} as AboutContextData
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useAbout = (): AboutContextData => {
    const context = useContext(AboutContext);

    if (!context) {
        throw new Error('useAbout must be within AboutProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const AboutProvider: React.FC = ({ children }) => {
    const [about, setAbout] = useState('');
    const [isLoading, setLoading] = useState(true);

    const getAbout = useCallback(async (): Promise<void> => {
        setLoading(true);

        Api.get('/apps/get')
            .then(response => {
                setAbout(response?.data?.sobre?.content);
            })
            .catch()
            .finally(() => setLoading(false));
    }, []);

    // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
    const providerValue = useMemo(
        () => ({
            about,
            isLoading,
            getAbout,
        }),
        [about, isLoading, getAbout]
    );

    return (
        <AboutContext.Provider value={providerValue}>
            {children}
        </AboutContext.Provider>
    );
};
