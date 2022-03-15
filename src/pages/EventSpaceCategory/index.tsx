import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useEventSpaces } from '../../hooks/EventSpace';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { setTitle } from '../../utils/title';

export const EventSpaceCategory: React.FC = () => {
    const {
        eventSpaces,
        isLoading,
        categories,
        category,
        getEventSpacesByCategory,
        setCategory,
        getEventSpaces,
        getCategories,
    } = useEventSpaces();
    const { id } = useParams();

    useEffect(() => {
        getEventSpacesByCategory(parseInt(id ?? '', 10));
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
        getEventSpaces(searchText);
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
                            subtitle="Espaços para Eventos"
                            url="/espacos-para-eventos"
                        />
                    </div>
                    <div className="d-flex col m-0 my-3">
                        <Map url="/espacos-para-eventos/mapa" />
                        <SearchBar
                            placeholder="Buscar Espaços para Eventos"
                            onSearch={handleSearch}
                        />
                    </div>
                </div>
                <LoadingGate
                    waitFor={isLoading === false}
                    meanWile={<LoadingCards show />}
                >
                    {Array.isArray(eventSpaces) && eventSpaces.length > 0 ? (
                        <div className="align-self-stretch pb-5 mt-3">
                            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 gy-4">
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
                    ) : (
                        <h1 className="text-center">
                            Desculpe! Nenhum Resultado encontrado
                        </h1>
                    )}
                </LoadingGate>
            </Container>
            <Footer />
        </Wrapper>
    );
};
