import { FaRegCheckCircle } from 'react-icons/fa';

import { TravellerType } from '../../@types/Travaller';
import { CheckIcon } from './styles';

interface IInformationsProps {
    title: string;
    travellerType: TravellerType[];
}

const Travellers: React.FC<IInformationsProps> = ({ title, travellerType }) => (
    <div className="mt-5">
        <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
            {title}
        </h1>
        <ul className="align-items-center p-0 row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 pb-3">
            {travellerType.map(info => (
                <li
                    className="d-flex align-items-center list-unstyled col pb-4"
                    key={info.label}
                >
                    <CheckIcon className="px-2 text-secondary fs-5">
                        <FaRegCheckCircle />
                    </CheckIcon>
                    <h2 className="px-2 fs-5 m-0">{info.label}</h2>
                </li>
            ))}
        </ul>
    </div>
);

export default Travellers;
