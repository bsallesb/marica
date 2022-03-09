import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useRestaurants } from '../../hooks/Restaurant';

export const MapOfRestaurants: React.FC = () => {
    const { restaurants, getRestaurants, setCategory } = useRestaurants();

    useEffect(() => {
        getRestaurants();
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
