import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AboutSpot from '../../components/AboutSpot';

import Container from '../../components/Container';
import EntryValue from '../../components/EntryValue';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Informations from '../../components/InformationsSpot';
import LoadingGate from '../../components/LoadingGate';
import PageTitle from '../../components/PageTitle';
import Pills from '../../components/Pills';
import SpotSlider from '../../components/Slider';
import Travellers from '../../components/Travellers';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../hooks/TouristSpot';

const TouristSpot: React.FC = () => {
    const { isLoading, spot, getSpot } = useSpots();
    const { id } = useParams();

    useEffect(() => {
        getSpot(parseInt(id ?? '', 10));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {spot && (
                <SpotSlider images={spot.images}>
                    import `~slick-carousel/slick/slick.css``; import
                    `~slick-carousel/slick/slick-theme.css``;
                </SpotSlider>
            )}
            <Container>
                <LoadingGate waitFor={isLoading === false} meanWile="Loading">
                    <div className="row">
                        <div className="col-8">
                            {spot && (
                                <>
                                    <div className="mb-3">
                                        <PageTitle
                                            title={spot?.nome}
                                            subtitle="Ponto Turistico"
                                            url="/pontos-turisticos"
                                        />
                                    </div>
                                    {Array.isArray(spot?.categorias) &&
                                        spot?.categorias.length > 1 && (
                                            <Pills
                                                categories={spot.categorias}
                                                url="/"
                                                color="secondary"
                                            />
                                        )}
                                    <div className="mb-4 mt-2">
                                        <p className="text-justify">
                                            {spot?.descricao_t}
                                        </p>
                                    </div>
                                    <AboutSpot
                                        title="Sobre"
                                        addresses={spot.addresses}
                                        phones={spot.phones}
                                        socialmidias={spot.redes}
                                        email={spot.email}
                                    />
                                    <EntryValue
                                        title="Valor da Entrada"
                                        isFree={spot.gratuito}
                                        price={spot.preco_t}
                                    />
                                    {Array.isArray(spot?.viajantes) &&
                                        spot?.viajantes.length > 1 && (
                                            <Travellers
                                                title="Tipos de Viajantes"
                                                travellerType={spot.viajantes}
                                            />
                                        )}
                                    {Array.isArray(spot?.estruturas) &&
                                        spot?.estruturas.length > 1 && (
                                            <Informations
                                                title="Estruturas"
                                                informations={spot.estruturas}
                                            />
                                        )}
                                    {Array.isArray(spot?.restricoes) &&
                                        spot?.restricoes.length > 1 && (
                                            <Informations
                                                title="Restrições"
                                                informations={spot.restricoes}
                                            />
                                        )}
                                </>
                            )}
                        </div>
                    </div>
                </LoadingGate>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default TouristSpot;
