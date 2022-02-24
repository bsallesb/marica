import { useEffect } from 'react';
import Header from '../../components/Header';
import IframeBigMap from '../../components/IframeBigMap';
import Wrapper from '../../components/Wrapper';
import { useBusinesses } from '../../hooks/Business';

export const MapOfBusinesses: React.FC = () => {
    const { businesses, getBusinesses } = useBusinesses();

    useEffect(() => {
        getBusinesses();
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
                />
            )}
        </Wrapper>
    );
};
