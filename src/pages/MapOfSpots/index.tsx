import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../hooks/TouristSpot';

export const MapOfSpots: React.FC = () => {
    const { spots, getSpots } = useSpots();

    useEffect(() => {
        getSpots();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {spots && (
                <>
                    {spots.map(spot => (
                        <IframeBigMap
                            addresses={spot?.enderecos}
                            url="/pontos-turisticos"
                            backTo="Pontos Turísticos"
                            key={spot?.id}
                        />
                    ))}
                </>
            )}
        </Wrapper>
    );
};
