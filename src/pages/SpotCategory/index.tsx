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

    const handleSearch = useCallback((searchText: string): void => {
        getSpots(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            <Container>
                <div className="row align-items-center mt-3 mb-3">
                    <div className="col col-5 col-lg-6">
                        <PageTitle
                            title={category?.label ?? 'Carregando...'}
                            subtitle="Pontos Turísticos"
                            url="/pontos-turisticos"
                        />
                    </div>
                    <div className="d-flex col col-7 col-lg-6 m-0">
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
                        <div className="row row-cols-3 gy-4">
                            {spots.map(spot => (
                                <Card
                                    setCategory={setCategory}
                                    key={spot.id}
                                    nome={spot.nome}
                                    addresses={spot.enderecos}
                                    image={spot.capa}
                                    url={`/pontos-turisticos/${spot.id}`}
                                    categories={spot.categorias}
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
