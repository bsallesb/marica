import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AboutSpot from '../../components/AboutSpot';
import Areas from '../../components/Areas';

import Container from '../../components/Container';
import Equipments from '../../components/Equipments';
import Footer from '../../components/Footer';
import FormOfPayment from '../../components/FormOfPayment';
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
import Wrapper from '../../components/Wrapper';
import { useEventSpaces } from '../../hooks/EventSpace';
import { setTitle } from '../../utils/title';

const EventSpace: React.FC = () => {
    const { isLoading, eventSpace, setCategory, getEventSpace } =
        useEventSpaces();
    const { id } = useParams();

    useEffect(() => {
        getEventSpace(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`${eventSpace?.nome ?? 'Loading...'} | "Ponto"`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventSpace]);

    return (
        <Wrapper>
            <Header />
            {eventSpace && (
                <SpotSlider images={eventSpace.images}>
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
                            {eventSpace && (
                                <>
                                    <div className="mb-3">
                                        <PageTitle
                                            title={eventSpace?.nome}
                                            subtitle="Espaços para Eventos"
                                            url="/espacos-para-eventos"
                                        />
                                    </div>
                                    {Array.isArray(eventSpace?.categorias) &&
                                        eventSpace?.categorias.length > 0 && (
                                            <Pills
                                                setCategory={setCategory}
                                                categories={
                                                    eventSpace.categorias
                                                }
                                                url="/espacos-para-eventos/categorias"
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
                                            {eventSpace?.descricao_t}
                                        </p>
                                    </div>
                                    <AboutSpot
                                        title="Sobre"
                                        addresses={eventSpace.addresses}
                                        phones={eventSpace.phones}
                                        socialMedias={eventSpace.redes}
                                        email={eventSpace.email}
                                        websites={eventSpace.site}
                                        openingHours={
                                            eventSpace.horario_funcionamento
                                        }
                                    />
                                    {Array.isArray(eventSpace?.espacos) &&
                                        eventSpace.espacos.length > 0 && (
                                            <Areas
                                                title="Espaços"
                                                areas={eventSpace.espacos}
                                            />
                                        )}
                                    {Array.isArray(eventSpace?.equipamentos) &&
                                        eventSpace?.equipamentos.length > 0 && (
                                            <Equipments
                                                title="Equipamentos"
                                                equipments={
                                                    eventSpace.equipamentos
                                                }
                                            />
                                        )}
                                    {Array.isArray(eventSpace?.estruturas) &&
                                        eventSpace?.estruturas.length > 0 && (
                                            <InformationsSpot
                                                title="Estruturas"
                                                informations={
                                                    eventSpace.estruturas
                                                }
                                            />
                                        )}
                                    {Array.isArray(eventSpace?.restricoes) &&
                                        eventSpace?.restricoes.length > 0 && (
                                            <InformationsSpot
                                                title="Restrições"
                                                informations={
                                                    eventSpace.restricoes
                                                }
                                            />
                                        )}
                                    {Array.isArray(
                                        eventSpace?.formas_pagamento
                                    ) &&
                                        eventSpace?.formas_pagamento.length >
                                            0 && (
                                            <FormOfPayment
                                                title="Formas de Pagamento"
                                                informations={
                                                    eventSpace.formas_pagamento
                                                }
                                            />
                                        )}
                                </>
                            )}
                        </div>
                        <div className="col col-lg-4">
                            {eventSpace && (
                                <IframeSmallMap
                                    address={eventSpace?.addresses}
                                />
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

export default EventSpace;
