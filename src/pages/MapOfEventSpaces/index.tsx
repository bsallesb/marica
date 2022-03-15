import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useEventSpaces } from '../../hooks/EventSpace';
import { setTitle } from '../../utils/title';

export const MapOfEventSpaces: React.FC = () => {
    const { eventSpaces, getEventSpaces, setCategory } = useEventSpaces();

    useEffect(() => {
        getEventSpaces();
        setTitle('Mapa | Espaços para Eventos');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {eventSpaces && (
                <IframeBigMap
                    items={eventSpaces}
                    url="/espacos-para-eventos"
                    backTo="Espaços para Eventos"
                    setCategory={setCategory}
                />
            )}
        </Wrapper>
    );
};
