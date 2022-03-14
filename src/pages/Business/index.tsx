import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AboutSpot from '../../components/AboutSpot';

import Container from '../../components/Container';
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
import { useBusinesses } from '../../hooks/Business';

const Business: React.FC = () => {
    const { isLoading, business, setCategory, getBusiness } = useBusinesses();
    const { id } = useParams();

    useEffect(() => {
        getBusiness(parseInt(id ?? '', 10));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {business && (
                <SpotSlider images={business.images}>
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
                            {business && (
                                <>
                                    <div className="mb-3">
                                        <PageTitle
                                            title={business?.nome}
                                            subtitle="Comércio Local"
                                            url="/comercio-local"
                                        />
                                    </div>
                                    {Array.isArray(business?.categorias) &&
                                        business?.categorias.length > 0 && (
                                            <Pills
                                                setCategory={setCategory}
                                                categories={business.categorias}
                                                url="/comercio-local/categorias"
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
                                            {business?.descricao_t}
                                        </p>
                                    </div>
                                    <AboutSpot
                                        title="Sobre"
                                        addresses={business.addresses}
                                        phones={business.phones}
                                        socialMedias={business.redes}
                                        email={business.email}
                                        openingHours={
                                            business.horario_funcionamento
                                        }
                                    />
                                    {Array.isArray(business?.estruturas) &&
                                        business?.estruturas.length > 0 && (
                                            <InformationsSpot
                                                title="Estruturas"
                                                informations={
                                                    business.estruturas
                                                }
                                            />
                                        )}
                                    {Array.isArray(business?.restricoes) &&
                                        business?.restricoes.length > 0 && (
                                            <InformationsSpot
                                                title="Restrições"
                                                informations={
                                                    business.restricoes
                                                }
                                            />
                                        )}
                                    {Array.isArray(
                                        business?.formas_pagamento
                                    ) &&
                                        business?.formas_pagamento.length >
                                            0 && (
                                            <FormOfPayment
                                                title="Formas de Pagamento"
                                                informations={
                                                    business.formas_pagamento
                                                }
                                            />
                                        )}
                                </>
                            )}
                        </div>
                        <div className="col col-lg-4">
                            {business && (
                                <IframeSmallMap address={business?.addresses} />
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

export default Business;
