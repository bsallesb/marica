import { FaRegMoneyBillAlt } from 'react-icons/fa';

import { CheckIcon } from './styles';

interface IEntryValueProps {
    title: string;
    isFree?: boolean;
    price?: string;
}

const EntryValue: React.FC<IEntryValueProps> = ({ title, isFree, price }) => (
    <div className="mt-5">
        <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
            {title}
        </h1>
        <ul className="align-items-center p-0 pb-3">
            <li className="d-flex align-items-center list-unstyled col pb-4">
                <CheckIcon className="px-2 text-secondary fs-5">
                    <FaRegMoneyBillAlt />
                </CheckIcon>
                {isFree ? (
                    <h2 className="px-2 fs-5 m-0">Gratuito</h2>
                ) : (
                    <h2 className="px-2 fs-5 m-0">{price}</h2>
                )}
            </li>
        </ul>
    </div>
);

export default EntryValue;
