import { useCallback, useEffect } from 'react';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useSpots } from '../../hooks/TouristSpot';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';

export const TouristSpots: React.FC = () => {
    const { spots, getSpots } = useSpots();

    useEffect(() => {
        getSpots();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getSpots(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Container>
                <div className="row align-items-center mt-3">
                    <div className="col col-6">
                        <PageTitle name="Pontos Turísticos" />
                    </div>
                    <div className="col col-6 row m-0">
                        <div className="col-3 p-0 text-center">
                            <Map />
                        </div>
                        <div className="col-9">
                            <SearchBar
                                placeholder="Buscar Pontos Turísticos"
                                onSearch={handleSearch}
                            />
                        </div>
                    </div>
                </div>
                <Menu />
                <div className="align-self-stretch pb-5">
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
        </>
    );
};
