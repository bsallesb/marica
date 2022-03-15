import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import { useEvents } from '../../hooks/Event';
import Card from '../../components/Card';
import PageTitle from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { setTitle } from '../../utils/title';

export const EventCategory: React.FC = () => {
    const {
        events,
        isLoading,
        categories,
        category,
        getEventsByCategory,
        setCategory,
        getEvent,
        getCategories,
    } = useEvents();
    const { id } = useParams();

    useEffect(() => {
        getEventsByCategory(parseInt(id ?? '', 10));
        if (!categories.length) {
            getCategories(parseInt(id ?? '', 10));
        }
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`${category?.label ?? 'Loading...'} | "Categoria"`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    const handleSearch = useCallback((searchText): void => {
        getEvent(searchText);
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
                            subtitle="Eventos"
                            url="/eventos"
                        />
                    </div>
                    <div className="d-flex col m-0 my-3">
                        <Map url="/eventos/mapa" />
                        <SearchBar
                            placeholder="Buscar Eventos"
                            onSearch={handleSearch}
                        />
                    </div>
                </div>
                <LoadingGate
                    waitFor={isLoading === false}
                    meanWile={<LoadingCards show />}
                >
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 gy-4">
                        <div className="row row-cols-3 gy-4">
                            {events.map(event => (
                                <Card
                                    setCategory={setCategory}
                                    key={event.id}
                                    nome={event.nome}
                                    addresses={event.enderecos}
                                    image={event.capa}
                                    url={`/eventos/${event.id}`}
                                    categories={event.categorias}
                                    path="eventos"
                                    fullDate={event.datahora_inicio}
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
