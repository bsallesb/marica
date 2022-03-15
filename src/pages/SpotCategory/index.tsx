import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useSpots } from '../../hooks/TouristSpot';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { setTitle } from '../../utils/title';

export const SpotCategory: React.FC = () => {
    const {
        spots,
        isLoading,
        categories,
        category,
        getSpotsByCategory,
        setCategory,
        getSpots,
        getCategories,
    } = useSpots();
    const { id } = useParams();

    useEffect(() => {
        getSpotsByCategory(parseInt(id ?? '', 10));
        if (!categories.length) {
            getCategories(parseInt(id ?? '', 10));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`${category?.label ?? 'Loading...'} | "Categoria"`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    const handleSearch = useCallback((searchText: string): void => {
        getSpots(searchText);
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
                            subtitle="Pontos Turísticos"
                            url="/pontos-turisticos"
                        />
                    </div>
                    <div className="d-flex col m-0 my-3">
                        <Map url="/pontos-turisticos/mapa" />
                        <SearchBar
                            placeholder="Buscar Pontos Turísticos"
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
                            {spots.map(spot => (
                                <Card
                                    setCategory={setCategory}
                                    key={spot.id}
                                    nome={spot.nome}
                                    addresses={spot.enderecos}
                                    image={spot.capa}
                                    url={`/pontos-turisticos/${spot.id}`}
                                    categories={spot.categorias}
                                    path="pontos-turisticos"
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
