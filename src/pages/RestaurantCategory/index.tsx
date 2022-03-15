import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useRestaurants } from '../../hooks/Restaurant';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { setTitle } from '../../utils/title';

export const RestaurantCategory: React.FC = () => {
    const {
        restaurants,
        isLoading,
        categories,
        category,
        getRestaurantsByCategory,
        setCategory,
        getRestaurants,
        getCategories,
    } = useRestaurants();
    const { id } = useParams();

    useEffect(() => {
        getRestaurantsByCategory(parseInt(id ?? '', 10));
        if (!categories.length) {
            getCategories(parseInt(id ?? '', 10));
        }
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`${category?.label ?? 'Loading...'} | Restaurantes`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    const handleSearch = useCallback((searchText: string): void => {
        getRestaurants(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            <Container>
                <div className="flex-column flex-sm-column flex-md-column d-lg-flex flex-lg-row align-items-center mt-3 mb-4">
                    <div className="col">
                        <PageTitle
                            title={category?.label ?? 'Carregando...'}
                            subtitle="Bares e Restaurantes"
                            url="/bares-e-restaurantes"
                        />
                    </div>
                    <div className="d-flex col m-0 my-3">
                        <Map url="/bares-e-restaurantes/mapa" />
                        <SearchBar
                            placeholder="Buscar Bares e Restaurantes"
                            onSearch={handleSearch}
                        />
                    </div>
                </div>
                <LoadingGate
                    waitFor={isLoading === false}
                    meanWile={<LoadingCards show />}
                >
                    <div className="align-self-stretch pb-5 mt-3">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 gy-4">
                            {restaurants.map(restaurant => (
                                <Card
                                    setCategory={setCategory}
                                    key={restaurant.id}
                                    nome={restaurant.nome}
                                    addresses={restaurant.enderecos}
                                    image={restaurant.capa}
                                    url={`/bares-e-restaurantes/${restaurant.id}`}
                                    categories={restaurant.categorias}
                                    path="bares-e-restaurantes"
                                />
                            ))}
                        </div>
                    </div>
                </LoadingGate>
            </Container>
            <Footer />
        </Wrapper>
    );
};
