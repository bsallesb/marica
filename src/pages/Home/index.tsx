import Container from '../../components/Container';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HighlightedContent from '../../components/HighlightedContent';
import Carousel from '../../components/Carousel';
import Wrapper from '../../components/Wrapper';

export const Home: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Carousel />
            <Container>
                <HighlightedContent />
            </Container>
            <Banner />
            <Footer />
        </Wrapper>
    );
};
