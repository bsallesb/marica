import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useBusinesses } from '../../hooks/Business';

export const MapOfBusinesses: React.FC = () => {
    const { businesses, getBusinesses, setCategory } = useBusinesses();

    useEffect(() => {
        getBusinesses();
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {businesses && (
                <IframeBigMap
                    items={businesses}
                    url="/comercio-local"
                    backTo="Comércio local"
                    setCategory={setCategory}
                />
            )}
        </Wrapper>
    );
};
