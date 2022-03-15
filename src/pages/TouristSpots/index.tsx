import { useCallback, useEffect } from 'react';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useSpots } from '../../hooks/TouristSpot';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Pills from '../../components/Pills';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import LoadingPills from '../../components/LoadingPills';
import { setTitle } from '../../utils/title';

export const TouristSpots: React.FC = () => {
    const { isLoading, spots, setCategory, categories, getSpots } = useSpots();

    useEffect(() => {
        getSpots();
        setTitle('Pontos Turísticos');
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
                <div className="flex-column flex-sm-column flex-md-column d-lg-flex flex-lg-row align-items-center mt-3 mb-4">
                    <div className="col">
                        <PageTitle title="Pontos Turísticos" />
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
                    meanWile={
                        <>
                            <LoadingPills show />
                            <LoadingCards show />
                        </>
                    }
                >
                    <Pills
                        setCategory={setCategory}
                        categories={categories}
                        url="/pontos-turisticos/categorias"
                        color="secondary"
                        size="md"
                    />
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
