import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AboutSpot from '../../components/AboutSpot';

import Container from '../../components/Container';
import EntryValue from '../../components/EntryValue';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IframeSmallMap from '../../components/IframeSmallMap';
import InformationsSpot from '../../components/InformationsSpot';
import LoadingBanner from '../../components/LoadingBanner';
import LoadingGate from '../../components/LoadingGate';
import LoadingInfo from '../../components/LoadingInfo';
import MeetOurApp from '../../components/MeetOurApp';
import PageTitle from '../../components/PageTitle';
import Pills from '../../components/Pills';
import SpotSlider from '../../components/Slider';
import SpotTip from '../../components/SpotTip';
import Travellers from '../../components/Travellers';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../hooks/TouristSpot';
import { setTitle } from '../../utils/title';

const TouristSpot: React.FC = () => {
    const { isLoading, spot, setCategory, getSpot } = useSpots();
    const { id } = useParams();

    useEffect(() => {
        getSpot(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`${spot?.nome ?? 'Loading...'} | Pontos Turisticos`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spot]);

    return (
        <Wrapper>
            <Header />
            {spot && (
                <SpotSlider images={spot.images}>
                    import `~slick-carousel/slick/slick.css``; import
                    `~slick-carousel/slick/slick-theme.css``;
                </SpotSlider>
            )}
            <LoadingGate
                waitFor={isLoading === false}
                meanWile={<LoadingBanner />}
            />
            <Container>
                <LoadingGate
                    waitFor={isLoading === false}
                    meanWile={<LoadingInfo />}
                >
                    <div className="flex-column flex-sm-column flex-md-column d-lg-flex flex-lg-row mb-5">
                        <div className="col col-lg-8">
                            {spot && (
                                <>
                                    <div className="mb-3">
                                        <PageTitle
                                            title={spot?.nome}
                                            subtitle="Pontos Turisticos"
                                            url="/pontos-turisticos"
                                        />
                                    </div>
                                    {Array.isArray(spot?.categorias) &&
                                        spot?.categorias.length > 0 && (
                                            <Pills
                                                setCategory={setCategory}
                                                categories={spot.categorias}
                                                url="/pontos-turisticos/categorias"
                                                color="secondary"
                                            />
                                        )}
                                    <div className="mb-4 mt-2">
                                        <p
                                            style={{
                                                whiteSpace: 'pre-wrap',
                                            }}
                                            className="text-justify"
                                        >
                                            {spot?.descricao_t}
                                        </p>
                                    </div>
                                    <AboutSpot
                                        title="Sobre"
                                        addresses={spot.addresses}
                                        phones={spot.phones}
                                        socialMedias={spot.redes}
                                        email={spot.email}
                                        openingHours={
                                            spot.horario_funcionamento
                                        }
                                    />
                                    {spot.dicas_t && (
                                        <SpotTip
                                            title="Dicas"
                                            tip={spot.dicas_t}
                                        />
                                    )}
                                    <EntryValue
                                        title="Valor da Entrada"
                                        isFree={spot.gratuito}
                                        price={spot.preco_t}
                                    />
                                    {Array.isArray(spot?.viajantes) &&
                                        spot?.viajantes.length > 0 && (
                                            <Travellers
                                                title="Tipos de Viajantes"
                                                travellerType={spot.viajantes}
                                            />
                                        )}
                                    {Array.isArray(spot?.estruturas) &&
                                        spot?.estruturas.length > 0 && (
                                            <InformationsSpot
                                                title="Estruturas"
                                                informations={spot.estruturas}
                                            />
                                        )}
                                    {Array.isArray(spot?.restricoes) &&
                                        spot?.restricoes.length > 0 && (
                                            <InformationsSpot
                                                title="Restrições"
                                                informations={spot.restricoes}
                                            />
                                        )}
                                    {Array.isArray(spot?.formas_pagamento) &&
                                        spot?.formas_pagamento.length > 0 && (
                                            <InformationsSpot
                                                title="Formas de Pagamento"
                                                informations={
                                                    spot.formas_pagamento
                                                }
                                            />
                                        )}
                                </>
                            )}
                        </div>
                        <div className="col col-lg-4">
                            {spot && (
                                <IframeSmallMap address={spot?.addresses} />
                            )}
                            <MeetOurApp />
                        </div>
                    </div>
                </LoadingGate>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default TouristSpot;
