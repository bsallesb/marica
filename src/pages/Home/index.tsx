import Container from '../../components/Container';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HighlightedContent from '../../components/HighlightedContent';
import Carousel from '../../components/Carousel';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingBanner from '../../components/LoadingBanner';
import { useBanners } from '../../hooks/Banners';

export const Home: React.FC = () => {
    const { isLoading } = useBanners();

    return (
        <Wrapper>
            <Header />
            <LoadingGate
                waitFor={isLoading === false}
                meanWile={<LoadingBanner />}
            />
            <Carousel />
            <Container>
                <HighlightedContent />
            </Container>

            <Banner />
            <Footer />
        </Wrapper>
    );
};
