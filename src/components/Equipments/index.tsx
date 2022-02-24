import { FaRegCheckCircle } from 'react-icons/fa';

import { EquipmentType } from '../../@types/Equipment';
import { SVGIcon } from './styles';

interface IEquipmentsProps {
    title: string;
    equipments: EquipmentType[];
}

const Equipments: React.FC<IEquipmentsProps> = ({ title, equipments }) => (
    <div className="mt-5">
        <h1 className="fs-4 fw-bold border-bottom pb-2 border-2 mb-4">
            {title}
        </h1>
        <ul className="align-items-center p-0 row row-cols-3 pb-3">
            {equipments.map(equipment => (
                <li
                    className="d-flex align-items-center list-unstyled col pb-4"
                    key={equipment.label}
                >
                    {equipment.icone ? (
                        <div className="px-2 text-secondary">
                            <SVGIcon src={equipment.icone} />
                        </div>
                    ) : (
                        <div className="px-2 text-secondary">
                            <FaRegCheckCircle />
                        </div>
                    )}
                    <h2 className="px-2 fs-6 m-0">
                        {equipment.total}x {equipment.label}
                    </h2>
                </li>
            ))}
        </ul>
    </div>
);

export default Equipments;
