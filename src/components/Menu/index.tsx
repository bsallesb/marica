import { useSpots } from '../../hooks/TouristSpot';
import { Button } from './styled';

const Menu: React.FC = () => {
    const { categories } = useSpots();

    return (
        <ul className="d-flex flex-wrap p-3 px-0">
            {categories.map(categorie => (
                <li key={categorie.id} className="list-unstyled">
                    <Button type="button" className="btn me-2 mb-2">
                        {categorie.label}
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
