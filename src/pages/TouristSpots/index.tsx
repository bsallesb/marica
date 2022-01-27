import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu";
import TouristSpotCard from "../../components/TouristSpotCard";

export const TouristSpots:React.FC = () => {

    return(
        <>
            <Header />
            <Container>
                <Menu />
                <TouristSpotCard />
            </Container>
            <Footer />
        </>
    );
}