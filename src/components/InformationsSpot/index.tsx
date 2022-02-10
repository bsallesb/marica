import { InfoType } from '../../@types/Information';
import { SVGIcon } from './styles';

interface IInformationsProps {
    title: string;
    informations: InfoType[];
}

const InformationsSpot: React.FC<IInformationsProps> = ({
    title,
    informations,
}) => (
    <div className="mt-5">
        <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
            {title}
        </h1>
        <ul className="align-items-center p-0 row row-cols-3 pb-3">
            {informations.map(info => (
                <li className="d-flex align-items-center list-unstyled col pb-4">
                    <div className="px-2 text-secondary">
                        <SVGIcon src={info.icone} />
                    </div>
                    <h2 className="px-2 fs-5 m-0">{info.label}</h2>
                </li>
            ))}
        </ul>
    </div>
);

export default InformationsSpot;