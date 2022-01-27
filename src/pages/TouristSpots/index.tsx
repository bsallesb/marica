import Breadcrumb from "../../components/Breadcrumb";
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu";
import SearchBar from "../../components/SearchBar";
import TouristSpotCard from "../../components/TouristSpotCard";

export const TouristSpots:React.FC = () => {

    return(
        <>
            <Header />
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <Breadcrumb />
                    <SearchBar />
                </div>
                <Menu />
                <TouristSpotCard />
            </Container>
            <Footer />
        </>
    );
}