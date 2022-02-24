import { useCallback, useEffect } from 'react';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useEventSpaces } from '../../hooks/EventSpace';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Pills from '../../components/Pills';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import LoadingPills from '../../components/LoadingPills';

export const EventSpaces: React.FC = () => {
    const { isLoading, eventSpaces, setCategory, categories, getEventSpaces } =
        useEventSpaces();

    useEffect(() => {
        getEventSpaces();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getEventSpaces(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            <Container>
                <div className="row align-items-center mt-3 mb-4">
                    <div className="col col-5 col-lg-6">
                        <PageTitle title="Espaços para Eventos" />
                    </div>
                    <div className="d-flex col col-7 col-lg-6 m-0">
                        <Map url="/espacos-para-eventos/mapa" />
                        <SearchBar
                            placeholder="Buscar Espaços e Eventos"
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
                        url="/espacos-para-eventos/categorias"
                        color="secondary"
                        size="md"
                    />
                    <div className="align-self-stretch pb-5 mt-3">
                        <div className="row row-cols-3 gy-4">
                            {eventSpaces.map(eventSpace => (
                                <Card
                                    setCategory={setCategory}
                                    key={eventSpace.id}
                                    nome={eventSpace.nome}
                                    addresses={eventSpace.enderecos}
                                    image={eventSpace.capa}
                                    url={`/espacos-para-eventos/${eventSpace.id}`}
                                    categories={eventSpace.categorias}
                                    path="espacos-para-eventos"
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
