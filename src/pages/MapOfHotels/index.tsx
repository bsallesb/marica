import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useHotels } from '../../hooks/Hotel';
import { setTitle } from '../../utils/title';

export const MapOfHotels: React.FC = () => {
    const { hotels, getHotels, setCategory } = useHotels();

    useEffect(() => {
        getHotels();
        setTitle('Mapa | Hotéis e Pousadas');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {hotels && (
                <IframeBigMap
                    items={hotels}
                    url="/hoteis-e-pousadas"
                    backTo="Hotéis e pousadas"
                    setCategory={setCategory}
                />
            )}
        </Wrapper>
    );
};
