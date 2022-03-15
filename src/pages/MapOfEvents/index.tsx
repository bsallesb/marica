import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useEvents } from '../../hooks/Event';
import { setTitle } from '../../utils/title';

export const MapOfEvents: React.FC = () => {
    const { events, getEvents, setCategory } = useEvents();

    useEffect(() => {
        getEvents();
        setTitle('Mapa | Eventos');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {events && (
                <IframeBigMap
                    items={events}
                    url="/eventos"
                    backTo="Eventos"
                    setCategory={setCategory}
                />
            )}
        </Wrapper>
    );
};
