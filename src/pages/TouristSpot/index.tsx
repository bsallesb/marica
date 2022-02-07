import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LoadingGate from '../../components/LoadingGate';
import PageTitle from '../../components/PageTitle';
import SpotInfos from '../../components/SpotInfos';
import { useSpots } from '../../hooks/TouristSpot';

const TouristSpot: React.FC = () => {
    const { isLoading, spot, getSpot } = useSpots();
    const { id } = useParams();

    useEffect(() => {
        getSpot(parseInt(id ?? '', 10));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Container>
                <LoadingGate waitFor={isLoading === false} meanWile="Loading">
                    <PageTitle name="Ponto Turistico" />
                    {spot && <SpotInfos categories={spot.categorias} />}
                </LoadingGate>
            </Container>
            <Footer />
        </>
    );
};

export default TouristSpot;
