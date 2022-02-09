import { FaMapMarkedAlt } from 'react-icons/fa';
import Pill from '../Pill';

const Map: React.FC = () => (
    <div className="me-3">
        <Pill url="/" color="primary" size="lg">
            <FaMapMarkedAlt className="fs-5 pb-1" /> Mapa
        </Pill>
    </div>
);

export default Map;
