import { Link } from 'react-router-dom';
import { AddressType } from '../../@types/Address';
import { CategorieType } from '../../@types/Categorie';
import Pills from '../Pills';
import { BorderCard, Cover, Section } from './styled';

interface ICardProps {
    url: string;
    nome: string;
    addresses: AddressType[];
    image: string;
    categories: CategorieType[];
}

const Card: React.FC<ICardProps> = ({
    url,
    nome,
    addresses,
    image,
    categories,
}) => (
    <Section className="d-flex col">
        <BorderCard className="card align-self-stretch w-100 text-start border-0 shadow-sm">
            <Link to={url} className="fs-1 text-center">
                <Cover style={{ backgroundImage: `url(${image})` }} />
            </Link>
            <div className="card-body">
                <Link to={url} className="text-decoration-none">
                    <h5 className="card-title fs-5 mb-2">{nome}</h5>
                </Link>
                <Pills categories={categories} url="/" />
                {addresses.map(address => (
                    <p className="card-text pb-4" key={address.id}>
                        {address.label}
                    </p>
                ))}
            </div>
        </BorderCard>
    </Section>
);

export default Card;
