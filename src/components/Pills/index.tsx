import slugify from 'react-slugify';

import { CategoryType } from '../../@types/Category';
import Pill from '../Pill';
import { Wrapper } from './styles';

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
    <Wrapper>
        <ul className="d-flex list-unstyled overflow-x overflow-sm-x flex-md-wrap p-0">
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
    </Wrapper>
);

export default Pills;
