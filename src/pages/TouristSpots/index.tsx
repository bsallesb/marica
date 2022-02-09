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

export const TouristSpots: React.FC = () => {
    const { spots, categories, getSpots } = useSpots();

    useEffect(() => {
        getSpots();
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
                        <PageTitle title="Pontos Turísticos" />
                    </div>
                    <div className="d-flex col col-7 col-lg-6 m-0">
                        <Map />
                        <SearchBar
                            placeholder="Buscar Pontos Turísticos"
                            onSearch={handleSearch}
                        />
                    </div>
                </div>
                <Pills
                    categories={categories}
                    url="/"
                    color="secondary"
                    size="md"
                />
                <div className="align-self-stretch pb-5 mt-3">
                    <div className="row row-cols-3 gy-4">
                        {spots.map(spot => (
                            <Card
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
            </Container>
            <Footer />
        </Wrapper>
    );
};
