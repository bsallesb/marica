import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useHotels } from '../../hooks/Hotel';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';

export const HotelCategory: React.FC = () => {
    const {
        hotels,
        isLoading,
        categories,
        category,
        getHotelsByCategory,
        setCategory,
        getHotels,
        getCategories,
    } = useHotels();
    const { id } = useParams();

    useEffect(() => {
        getHotelsByCategory(parseInt(id ?? '', 10));
        if (!categories.length) {
            getCategories(parseInt(id ?? '', 10));
        }
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
                <div className="row align-items-center mt-3 mb-3">
                    <div className="col col-5 col-lg-6">
                        <PageTitle
                            title={category?.label ?? 'Carregando...'}
                            subtitle="Hoteis e Pousadas"
                            url="/hoteis-e-pousadas"
                        />
                    </div>
                    <div className="d-flex col col-7 col-lg-6 m-0">
                        <Map url="/hoteis-e-pousadas/mapa" />
                        <SearchBar
                            placeholder="Buscar Hotéis e Pousadas"
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
