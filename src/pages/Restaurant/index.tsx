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
import PriceRange from '../../components/PriceRange';
import SpotSlider from '../../components/Slider';
import Wrapper from '../../components/Wrapper';
import { useRestaurants } from '../../hooks/Restaurant';
import { setTitle } from '../../utils/title';

const Restaurant: React.FC = () => {
    const { isLoading, restaurant, setCategory, getRestaurant } =
        useRestaurants();
    const { id } = useParams();

    useEffect(() => {
        getRestaurant(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`${restaurant?.nome ?? 'Loading...'} | Bares e Restaurantes`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [restaurant]);

    return (
        <Wrapper>
            <Header />
            {restaurant && (
                <SpotSlider images={restaurant.images}>
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
                            {restaurant && (
                                <>
                                    <div className="mb-3">
                                        <PageTitle
                                            title={restaurant?.nome}
                                            subtitle="Hot??is e Pousadas"
                                            url="/hoteis-e-pousadas"
                                        />
                                    </div>
                                    {Array.isArray(restaurant?.categorias) &&
                                        restaurant?.categorias.length > 0 && (
                                            <Pills
                                                setCategory={setCategory}
                                                categories={
                                                    restaurant.categorias
                                                }
                                                url="/bares-e-restaurantes/categorias"
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
                                            {restaurant?.descricao_t}
                                        </p>
                                    </div>
                                    <AboutSpot
                                        title="Sobre"
                                        addresses={restaurant.addresses}
                                        phones={restaurant.phones}
                                        socialMedias={restaurant.redes}
                                        email={restaurant.email}
                                        websites={restaurant.site}
                                        openingHours={
                                            restaurant.horario_funcionamento
                                        }
                                    />
                                    {restaurant.faixa_preco && (
                                        <PriceRange
                                            title="Faixa de pre??o"
                                            amount={restaurant.faixa_preco}
                                        />
                                    )}
                                    {Array.isArray(restaurant.refeicoes) &&
                                        restaurant?.refeicoes.length > 0 && (
                                            <InformationsSpot
                                                title="Refei????es"
                                                informations={
                                                    restaurant.refeicoes
                                                }
                                            />
                                        )}
                                    {Array.isArray(restaurant.cozinhas) &&
                                        restaurant?.cozinhas.length > 0 && (
                                            <InformationsSpot
                                                title="Cozinhas"
                                                informations={
                                                    restaurant.cozinhas
                                                }
                                            />
                                        )}
                                    {Array.isArray(restaurant?.estruturas) &&
                                        restaurant?.estruturas.length > 0 && (
                                            <InformationsSpot
                                                title="Estruturas"
                                                informations={
                                                    restaurant.estruturas
                                                }
                                            />
                                        )}
                                    {Array.isArray(restaurant?.restricoes) &&
                                        restaurant?.restricoes.length > 0 && (
                                            <InformationsSpot
                                                title="Restri????es"
                                                informations={
                                                    restaurant.restricoes
                                                }
                                            />
                                        )}
                                    {Array.isArray(
                                        restaurant?.formas_pagamento
                                    ) &&
                                        restaurant?.formas_pagamento.length >
                                            0 && (
                                            <FormOfPayment
                                                title="Formas de Pagamento"
                                                informations={
                                                    restaurant.formas_pagamento
                                                }
                                            />
                                        )}
                                </>
                            )}
                        </div>
                        <div className="col col-lg-4">
                            {restaurant && (
                                <IframeSmallMap
                                    address={restaurant?.addresses}
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

export default Restaurant;
