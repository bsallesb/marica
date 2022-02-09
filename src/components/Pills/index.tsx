import { CategorieType } from '../../@types/Categorie';
import Pill from '../Pill';

interface IPillsProps {
    categories: CategorieType[];
    url: string;
    color?: 'primary' | 'secondary' | 'light';
    size?: 'sm' | 'md';
}

const Pills: React.FC<IPillsProps> = ({
    categories,
    url,
    color = 'light',
    size = 'sm',
}) => (
    <ul className="d-flex list-unstyled flex-wrap p-0">
        {categories.map(category => (
            <li className="me-2 mb-2">
                <Pill key={category.id} url={url} color={color} size={size}>
                    {category.label}
                </Pill>
            </li>
        ))}
    </ul>
);

export default Pills;
