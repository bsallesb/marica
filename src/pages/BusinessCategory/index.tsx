import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useBusinesses } from '../../hooks/Business';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';

export const BusinessCategory: React.FC = () => {
    const {
        businesses,
        isLoading,
        categories,
        category,
        getBusinessesByCategory,
        setCategory,
        getBusinesses,
        getCategories,
    } = useBusinesses();
    const { id } = useParams();

    useEffect(() => {
        getBusinessesByCategory(parseInt(id ?? '', 10));
        if (!categories.length) {
            getCategories(parseInt(id ?? '', 10));
        }
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
                <div className="row align-items-center mt-3 mb-3">
                    <div className="col col-5 col-lg-6">
                        <PageTitle
                            title={category?.label ?? 'Carregando...'}
                            subtitle="Comércio Local"
                            url="/comercio-local"
                        />
                    </div>
                    <div className="d-flex col col-7 col-lg-6 m-0">
                        <Map url="/comercio-local/mapa" />
                        <SearchBar
                            placeholder="Buscar Comércio Local"
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
