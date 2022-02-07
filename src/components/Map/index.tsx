import { FaMapMarkedAlt } from 'react-icons/fa';

import { ButtonMap } from './styled';

const Map: React.FC = () => (
    <ButtonMap type="button">
        <FaMapMarkedAlt className="fs-5 pb-1" /> Mapa
    </ButtonMap>
);

export default Map;
