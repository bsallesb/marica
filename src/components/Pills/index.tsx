import slugify from 'react-slugify';

import { CategoryType } from '../../@types/Category';
import Pill from '../Pill';

interface IPillsProps {
    categories: CategoryType[];
    url?: string;
    color?: 'primary' | 'secondary' | 'light';
    size?: 'sm' | 'md';
    setCategory: (category: CategoryType) => void;
}

const Pills: React.FC<IPillsProps> = ({
    categories,
    url,
    color = 'light',
    size = 'sm',
    setCategory,
}) => (
    <ul className="d-flex list-unstyled flex-wrap p-0">
        {categories.map(category => (
            <li className="me-2 mb-2" key={category.id}>
                <Pill
                    onClick={() => setCategory(category)}
                    url={`${url}/${category.id}/${slugify(category.label)}`}
                    color={color}
                    size={size}
                >
                    {category.label}
                </Pill>
            </li>
        ))}
    </ul>
);

export default Pills;
