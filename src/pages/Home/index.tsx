import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HighlightedContent from "../../components/HighlightedContent";

export const Home:React.FC = () => {

    return(
          <>
            <Header />
            <Container>
                <HighlightedContent />
            </Container>
            <Footer />
          </>
      );
  }