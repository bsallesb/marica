import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useHotels } from '../../hooks/Hotel';

export const MapOfHotels: React.FC = () => {
    const { hotels, getHotels, setCategory } = useHotels();

    useEffect(() => {
        getHotels();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {hotels && (
                <IframeBigMap
                    items={hotels}
                    url="/bares-e-restaurantes"
                    backTo="Bares e Restaurantes"
                    setCategory={setCategory}
                />
            )}
        </Wrapper>
    );
};
