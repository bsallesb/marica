/* eslint-disable react/no-danger */
import { useEffect } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import AboutMaricaBackground from '../../assets/marica-about.jpeg';
import { Card, MaricaBackground } from './styles';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import { useAbout } from '../../hooks/About';
import LoadingGate from '../../components/LoadingGate';
import LoadingAbout from '../../components/LoadingAbout';

export const AboutMarica: React.FC = () => {
    const { about, getAbout, isLoading } = useAbout();

    useEffect(() => {
        getAbout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                        <LoadingGate
                            waitFor={isLoading === false}
                            meanWile={<LoadingAbout />}
                        />
                        <div
                            style={{
                                whiteSpace: 'pre-wrap',
                            }}
                            className="mt-4"
                        >
                            <div dangerouslySetInnerHTML={{ __html: about }} />
                        </div>
                    </div>
                </Card>
            </Container>
            <Footer />
        </Wrapper>
    );
};
