import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AboutSpot from '../../components/AboutSpot';
import Container from '../../components/Container';
import EntryValue from '../../components/EntryValue';
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
import { useEvents } from '../../hooks/Event';
import { setTitle } from '../../utils/title';

const Event: React.FC = () => {
    const { isLoading, event, setCategory, getEvent } = useEvents();
    const { id } = useParams();

    useEffect(() => {
        getEvent(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`${event?.nome ?? 'Loading...'} | Eventos`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [event]);

    return (
        <Wrapper>
            <Header />
            {event && (
                <SpotSlider images={event.images}>
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
                            {event && (
                                <>
                                    <div className="mb-3">
                                        <PageTitle
                                            title={event?.nome}
                                            subtitle="Eventos"
                                            url="/eventos"
                                        />
                                    </div>
                                    {Array.isArray(event?.categorias) &&
                                        event?.categorias.length > 0 && (
                                            <Pills
                                                setCategory={setCategory}
                                                categories={event.categorias}
                                                url="/eventos/categorias"
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
                                            {event?.descricao_t}
                                        </p>
                                    </div>
                                    <AboutSpot
                                        title="Sobre"
                                        addresses={event.addresses}
                                        phones={event.phones}
                                        socialMedias={event.redes}
                                        email={event.email}
                                        websites={event.site}
                                        openingHours={
                                            event.horario_funcionamento
                                        }
                                    />
                                    {Array.isArray(event?.estruturas) &&
                                        event?.estruturas.length > 0 && (
                                            <InformationsSpot
                                                title="Estruturas"
                                                informations={event.estruturas}
                                            />
                                        )}
                                    {Array.isArray(event?.restricoes) &&
                                        event?.restricoes.length > 0 && (
                                            <InformationsSpot
                                                title="Restrições"
                                                informations={event.restricoes}
                                            />
                                        )}
                                    {Array.isArray(event?.formas_pagamento) &&
                                        event?.formas_pagamento.length > 0 && (
                                            <FormOfPayment
                                                title="Formas de Pagamento"
                                                informations={
                                                    event.formas_pagamento
                                                }
                                            />
                                        )}
                                    <EntryValue
                                        title="Valor de Entrada"
                                        isFree={!!event.gratuito}
                                    />
                                </>
                            )}
                        </div>
                        <div className="col col-lg-4">
                            {event && (
                                <IframeSmallMap address={event?.addresses} />
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

export default Event;
