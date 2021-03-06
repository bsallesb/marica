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
}) => {
    const isInternal = url.charAt(0) === '/';

    return (
        <CardSection className="d-flex col">
            {isInternal ? (
                <div className="card align-self-stretch w-100 text-center border-0">
                    <Link to={url} className="fs-1">
                        <Icon />
                    </Link>
                    <div className="card-body pt-2">
                        <Link to={url} className="d-block fs-card-title fs-5">
                            {title}
                        </Link>
                        <p className="d-block card-text pt-2 pb-3 text-muted">
                            {description}
                        </p>
                        <Pill url={url} color="white" size="sm">
                            Acessar
                        </Pill>
                    </div>
                </div>
            ) : (
                <div className="card align-self-stretch w-100 text-center border-0">
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="fs-1"
                    >
                        <Icon />
                    </a>
                    <div className="card-body pt-2">
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="d-block fs-card-title fs-5"
                        >
                            {title}
                        </a>
                        <p className="d-block card-text pt-2 pb-3 text-muted">
                            {description}
                        </p>
                        <Pill url={url} color="white" size="sm">
                            Acessar
                        </Pill>
                    </div>
                </div>
            )}
        </CardSection>
    );
};

export default HighlightedCard;
