import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useRestaurants } from '../../hooks/Restaurant';
import { setTitle } from '../../utils/title';

export const MapOfRestaurants: React.FC = () => {
    const { restaurants, getRestaurants, setCategory } = useRestaurants();

    useEffect(() => {
        getRestaurants();
        setTitle('Mapa | Bares e Restaurantes');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {restaurants && (
                <IframeBigMap
                    items={restaurants}
                    url="/bares-e-restaurantes"
                    backTo="Bares e Restaurantes"
                    setCategory={setCategory}
                />
            )}
        </Wrapper>
    );
};
