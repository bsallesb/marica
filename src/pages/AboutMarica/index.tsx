import { useEffect } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import AboutMaricaBackground from '../../assets/marica-about.jpeg';
import { Card, MaricaBackground } from './styles';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import { useAbout } from '../../hooks/About';

export const AboutMarica: React.FC = () => {
    const { about, getAbout } = useAbout();

    useEffect(() => {
        getAbout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line no-console
    console.log('getAbout()', getAbout);

    return (
        <Wrapper>
            <Header />
            <MaricaBackground
                style={{
                    backgroundImage: `url(${AboutMaricaBackground})`,
                }}
            />
            <Container>
                <Card className="card p-4 shadow-sm">
                    <div className="p-4">
                        <PageTitle title="Conheça Maricá" />
                        <div
                            style={{
                                whiteSpace: 'pre-wrap',
                            }}
                            className="mt-4"
                        >
                            {about}
                        </div>
                    </div>
                </Card>
            </Container>
            <Footer />
        </Wrapper>
    );
};
