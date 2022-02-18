import { FaMapMarkedAlt } from 'react-icons/fa';
import Pill from '../Pill';

interface MapProps {
    url: string;
}

const Map: React.FC<MapProps> = ({ url }) => (
    <div className="me-3">
        <Pill url={url} color="primary" size="lg">
            <FaMapMarkedAlt className="fs-5 pb-1" /> Mapa
        </Pill>
    </div>
);

export default Map;
