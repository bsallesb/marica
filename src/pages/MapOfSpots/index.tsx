import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../hooks/TouristSpot';

export const MapOfSpots: React.FC = () => {
    const { setCategory, spots, getSpots } = useSpots();

    useEffect(() => {
        getSpots();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {spots && (
                <IframeBigMap
                    items={spots}
                    url="/pontos-turisticos"
                    backTo="Pontos Turísticos"
                    setCategory={setCategory}
                />
            )}
        </Wrapper>
    );
};
