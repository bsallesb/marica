import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../hooks/TouristSpot';

export const MapOfSpots: React.FC = () => {
    const { spot } = useSpots();

    return (
        <Wrapper>
            <Header />
            {spot && (
                <IframeBigMap
                    addresses={spot?.addresses}
                    url="/pontos-turisticos"
                    backTo="Pontos Turísticos"
                />
            )}
        </Wrapper>
    );
};
