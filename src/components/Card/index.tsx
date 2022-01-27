import { Link } from "react-router-dom";
import { BorderCard, Button, Section } from "./styled";

interface ICardProps {
    url: string;
    nome: string;
    description: string;
    image: string
};

const Card:React.FC<ICardProps> = ({url, nome, description, image}) => (    
    <Section className="d-flex col">
        <BorderCard className="card align-self-stretch w-100 text-start border-0 shadow-sm">
            <Link to={url} className="fs-1 text-center"><img src={image} alt="" /></Link>
            <div className="card-body">
                <h5 className="card-title fs-5 mb-2">{nome}</h5>
                <div className="d-flex flex-wrap">
                    <Button type="button" className="btn">Acessar</Button>
                    <Button type="button" className="btn">Acessar</Button>
                </div>
                <p className="card-text pb-4">{description}</p>
            </div>
        </BorderCard>
    </Section>
);

export default Card;