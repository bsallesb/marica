import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AboutSpot from '../../components/AboutSpot';
import Amenities from '../../components/Amenities';

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
import { useHotels } from '../../hooks/Hotel';
import { setTitle } from '../../utils/title';

const Hotel: React.FC = () => {
    const { isLoading, hotel, setCategory, getHotel } = useHotels();
    const { id } = useParams();

    useEffect(() => {
        getHotel(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`${hotel?.nome ?? 'Loading...'} | Hotéis e Pousadas`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hotel]);

    return (
        <Wrapper>
            <Header />
            {hotel && (
                <SpotSlider images={hotel.images}>
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
                            {hotel && (
                                <>
                                    <div className="mb-3">
                                        <PageTitle
                                            title={hotel?.nome}
                                            subtitle="Hotéis e Pousadas"
                                            url="/hoteis-e-pousadas"
                                        />
                                    </div>
                                    {Array.isArray(hotel?.categorias) &&
                                        hotel?.categorias.length > 0 && (
                                            <Pills
                                                setCategory={setCategory}
                                                categories={hotel.categorias}
                                                url="/hoteis-e-pousadas/categorias"
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
                                            {hotel?.descricao_t}
                                        </p>
                                    </div>
                                    <AboutSpot
                                        title="Sobre"
                                        addresses={hotel.addresses}
                                        phones={hotel.phones}
                                        socialMedias={hotel.redes}
                                        email={hotel.email}
                                        websites={hotel.site}
                                        openingHours={
                                            hotel.horario_funcionamento
                                        }
                                    />
                                    <Amenities
                                        title="Comodidades"
                                        rooms={hotel.quartos}
                                        beds={hotel.leitos}
                                        breakfast={hotel.cafe_manha}
                                        breakfastForGuests={hotel.cafe_hospedes}
                                        lunch={hotel.almoco}
                                        lunchForGuests={hotel.almoco_hospedes}
                                        dinner={hotel.jantar}
                                        dinnerForGuests={hotel.jantar_hospedes}
                                    />
                                    {Array.isArray(hotel?.estruturas) &&
                                        hotel?.estruturas.length > 0 && (
                                            <InformationsSpot
                                                title="Estruturas"
                                                informations={hotel.estruturas}
                                            />
                                        )}
                                    {Array.isArray(hotel?.restricoes) &&
                                        hotel?.restricoes.length > 0 && (
                                            <InformationsSpot
                                                title="Restrições"
                                                informations={hotel.restricoes}
                                            />
                                        )}
                                    {Array.isArray(hotel?.formas_pagamento) &&
                                        hotel?.formas_pagamento.length > 0 && (
                                            <FormOfPayment
                                                title="Formas de Pagamento"
                                                informations={
                                                    hotel.formas_pagamento
                                                }
                                            />
                                        )}
                                </>
                            )}
                        </div>
                        <div className="col col-lg-4">
                            {hotel && (
                                <IframeSmallMap address={hotel?.addresses} />
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

export default Hotel;
