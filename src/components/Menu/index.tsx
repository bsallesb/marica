import { useEffect } from "react";
import { useSpots } from "../../hooks/TouristSpot";
import { Button, Section } from "./styled";

const Menu:React.FC = () => {
    const {categories, getSpots} = useSpots();
    console.log('categories', categories);

    useEffect(() => {
        getSpots();
    }, [])

    return(
        <Section className="d-flex flex-wrap p-3 px-0">
            {categories.map((categorie) =>
                <li><Button type="button" className="btn me-2 mb-2">{categorie.label}</Button></li>
            )}
        </Section>
    )
};

export default Menu;