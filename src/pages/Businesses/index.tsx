import { useCallback, useEffect } from 'react';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useBusinesses } from '../../hooks/Business';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Pills from '../../components/Pills';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import LoadingPills from '../../components/LoadingPills';
import { setTitle } from '../../utils/title';

export const Businesses: React.FC = () => {
    const { isLoading, businesses, categories, setCategory, getBusinesses } =
        useBusinesses();

    useEffect(() => {
        getBusinesses();
        setTitle('Comércios');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getBusinesses(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Wrapper>
            <Header />
            <Container>
                <div className="flex-column flex-sm-column flex-md-column d-lg-flex flex-lg-row align-items-center mt-3 mb-4">
                    <div className="col">
                        <PageTitle title="Comércio Local" />
                    </div>
                    <div className="d-flex col m-0 my-3">
                        <Map url="/comercio-local/mapa" />
                        <SearchBar
                            placeholder="Buscar Comércio Local"
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
                        url="/comercio-local/categorias"
                        color="secondary"
                        size="md"
                    />
                    <div className="align-self-stretch pb-5 mt-3">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 gy-4">
                            {businesses.map(business => (
                                <Card
                                    setCategory={setCategory}
                                    key={business.id}
                                    nome={business.nome}
                                    addresses={business.enderecos}
                                    image={business.capa}
                                    url={`/comercio-local/${business.id}`}
                                    categories={business.categorias}
                                    path="comercio-local"
                                    isDelivery={business.is_delivery}
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
