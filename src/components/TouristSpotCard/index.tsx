import { useEffect } from "react";
import { useSpots } from "../../hooks/TouristSpot";
import Card from "../Card";
import { Section } from "./styled";

const TouristSpotCard:React.FC = () => {
    const { spots, getSpots } = useSpots();
    console.log('spot', spots);
    useEffect(() => {
        getSpots();
    }, [])

    return (
        <Section className="align-self-stretch pb-5">
            <div className="row row-cols-3 justify-content-center gy-4">
                {spots.map((spot) =>
                    <Card 
                    nome={spot.nome}
                    description="Rua Álvares de Castro, 239, Centro"
                    image={spot.capa}
                    url=""
                    />
                )}
            </div>
        </Section>
    );
};

export default TouristSpotCard;