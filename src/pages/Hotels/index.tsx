import { useCallback, useEffect } from 'react';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useHotels } from '../../hooks/Hotel';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Pills from '../../components/Pills';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import LoadingPills from '../../components/LoadingPills';

export const Hotels: React.FC = () => {
    const { isLoading, hotels, setCategory, categories, getHotels } =
        useHotels();

    useEffect(() => {
        getHotels();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getHotels(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            <Container>
                <div className="row align-items-center mt-3 mb-4">
                    <div className="col col-5 col-lg-6">
                        <PageTitle title="Hoteis e Pousadas" />
                    </div>
                    <div className="d-flex col col-7 col-lg-6 m-0">
                        <Map url="/hoteis-e-pousadas/mapa" />
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
                        url="/hoteis-e-pousadas/categorias"
                        color="secondary"
                        size="md"
                    />
                    <div className="align-self-stretch pb-5 mt-3">
                        <div className="row row-cols-3 gy-4">
                            {hotels.map(hotel => (
                                <Card
                                    setCategory={setCategory}
                                    key={hotel.id}
                                    nome={hotel.nome}
                                    addresses={hotel.enderecos}
                                    image={hotel.capa}
                                    url={`/hoteis-e-pousadas/${hotel.id}`}
                                    categories={hotel.categorias}
                                    path="hoteis-e-pousadas"
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
