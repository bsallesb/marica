import { IconType } from "react-icons";
import { Link } from "react-router-dom";

import { Button, CardSection } from "./styled";

interface ICardProps {
    title: string;
    icon: IconType;
    description: string;
    url: string;
}

const HighlightedCard:React.FC<ICardProps> = ({title, icon:Icon, description, url}) => (
    <CardSection className="d-flex col">
        <div className="card align-self-stretch w-100 text-center border-0">
            <Link to={url} className="fs-1"><Icon /></Link>
            <div className="card-body">
                <h5 className="card-title fs-5">{title}</h5>
                <p className="card-text pb-4">{description}</p>
                <Button type="button" href={url} className="btn btn-success">Acessar</Button>
            </div>
        </div>
    </CardSection>
);

export default HighlightedCard;