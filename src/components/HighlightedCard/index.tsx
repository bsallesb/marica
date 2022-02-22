import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import Pill from '../Pill';

import { CardSection } from './styled';

interface ICardProps {
    title: string;
    icon: IconType;
    description: string;
    url: string;
}

const HighlightedCard: React.FC<ICardProps> = ({
    title,
    icon: Icon,
    description,
    url,
}) => (
    <CardSection className="d-flex col">
        <div className="card align-self-stretch w-100 text-center border-0">
            <Link to={url} className="fs-1">
                <Icon />
            </Link>
            <div className="card-body">
                <h5 className="card-title fs-5">{title}</h5>
                <p className="card-text pb-4">{description}</p>
                <Pill url={url} color="white" size="sm">
                    Acessar
                </Pill>
            </div>
        </div>
    </CardSection>
);

export default HighlightedCard;
