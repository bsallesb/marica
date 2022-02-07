import { CategorieType } from '../../@types/Categorie';
import { SpotSection } from './styles';

interface ISpotInfosProps {
    categories: CategorieType[];
}

const SpotInfos: React.FC<ISpotInfosProps> = ({ categories }) => (
    <SpotSection className="col-8">
        {categories.map(category => (
            <p>{category.label}</p>
        ))}
    </SpotSection>
);

export default SpotInfos;
