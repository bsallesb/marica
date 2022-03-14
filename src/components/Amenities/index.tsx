import { FaCoffee, FaConciergeBell } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { RiKeyFill } from 'react-icons/ri';

import { InfoType } from '../../@types/Information';
import { Pluralize } from '../../utils/pluralize';

interface IInformationsProps {
    title: string;
    informations?: InfoType[];
    rooms: number;
    beds: number;
    breakfast: boolean;
    breakfastForGuests: boolean;
    lunch: boolean;
    lunchForGuests: boolean;
    dinner: boolean;
    dinnerForGuests: boolean;
}

const InformationsSpot: React.FC<IInformationsProps> = ({
    title,
    rooms,
    beds,
    breakfast,
    breakfastForGuests,
    lunch,
    lunchForGuests,
    dinner,
    dinnerForGuests,
}) => (
    <div className="mt-5">
        <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
            {title}
        </h1>
        <ul className="align-items-center p-0 row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 pb-3">
            {rooms && (
                <li className="d-flex align-items-center list-unstyled col pb-4">
                    <div className="px-2 text-secondary">
                        <RiKeyFill />
                    </div>
                    <div>
                        <h2 className="px-2 fs-6 m-0">
                            {rooms} {Pluralize('quarto', 'quartos', rooms)}
                        </h2>
                    </div>
                </li>
            )}
            {beds && (
                <li className="d-flex align-items-center list-unstyled col pb-4">
                    <div className="px-2 text-secondary">
                        <RiKeyFill />
                    </div>
                    <div>
                        <h2 className="px-2 fs-6 m-0">
                            {Pluralize('leito', 'leitos', beds)}
                        </h2>
                    </div>
                </li>
            )}
            {breakfast && (
                <li className="d-flex align-items-center list-unstyled col pb-4">
                    <div className="px-2 text-secondary">
                        <FaCoffee />
                    </div>
                    <div>
                        <h2 className="px-2 fs-6 m-0">Café da manhã</h2>
                        {breakfastForGuests && (
                            <h2 className="px-2 fs-6 m-0">
                                Aceita não-hóspedes
                            </h2>
                        )}
                    </div>
                </li>
            )}
            {lunch && (
                <li className="d-flex align-items-center list-unstyled col pb-4">
                    <div className="px-2 text-secondary">
                        <GiKnifeFork />
                    </div>
                    <div>
                        <h2 className="px-2 fs-6 m-0">Almoço</h2>
                        {lunchForGuests && (
                            <h2 className="px-2 fs-6 m-0">
                                Aceita não-hóspedes
                            </h2>
                        )}
                    </div>
                </li>
            )}
            {dinner && (
                <li className="d-flex align-items-center list-unstyled col pb-4">
                    <div className="px-2 text-secondary">
                        <FaConciergeBell />
                    </div>
                    <div>
                        <h2 className="px-2 fs-6 m-0">Jantar</h2>
                        {dinnerForGuests && (
                            <h2 className="px-2 fs-6 m-0">
                                Aceita não-hóspedes
                            </h2>
                        )}
                    </div>
                </li>
            )}
        </ul>
    </div>
);

export default InformationsSpot;
