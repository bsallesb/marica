import { BsCalendarDayFill } from 'react-icons/bs';
import {
    FaBed,
    FaHome,
    FaMotorcycle,
    FaRoute,
    FaTicketAlt,
    FaUmbrellaBeach,
} from 'react-icons/fa';
import { GiFlowerPot, GiMicrophone } from 'react-icons/gi';
import { MdRestaurant, MdStore } from 'react-icons/md';
import { FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SectionOffcanvas } from './styled';

const routesURL = process.env.REACT_APP_CRAFTSMANSHIP ?? '';
const craftmansshipURL = process.env.REACT_APP_CRAFTSMANSHIP ?? '';

const OffCanvas: React.FC = () => (
    <SectionOffcanvas
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
    >
        <div className="offcanvas-header">
            <p className="offcanvas-title" id="offcanvasLabel" />
            <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            />
        </div>
        <div className="offcanvas-body d-flex flex-column">
            <Link
                to="/"
                className="fs-5 pb-3 border-bottom text-decoration-none"
            >
                <FaHome /> Inicial
            </Link>
            <Link
                to="/sobre-a-cidade"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <FiInfo /> Sobre a Cidade
            </Link>
            <Link
                to="/pontos-turisticos"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <FaUmbrellaBeach /> Pontos Turísticos
            </Link>
            <Link
                to="/hoteis-e-pousadas"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <FaBed /> Hoteís e Pousadas
            </Link>
            <Link
                to="/bares-e-restaurantes"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <MdRestaurant /> Bares e Restaurantes
            </Link>
            <Link
                to="/delivery"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <FaMotorcycle /> Delivery
            </Link>
            <Link
                to="/comercio-local"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <MdStore /> Comércio Local
            </Link>
            <Link
                to="/descontos"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <FaTicketAlt /> Cupons e Descontos
            </Link>
            <Link
                to="/espacos-para-eventos"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <GiMicrophone /> Espaços para eventos
            </Link>
            <Link
                to="/eventos"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <BsCalendarDayFill /> Eventos
            </Link>
            <a
                href={routesURL}
                target="_blank"
                rel="noreferrer"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <FaRoute /> Roteiros Turísticos
            </a>
            <a
                href={craftmansshipURL}
                target="_blank"
                rel="noreferrer"
                className="fs-5 py-3 border-bottom text-decoration-none"
            >
                <GiFlowerPot /> Artesanato
            </a>
        </div>
    </SectionOffcanvas>
);

export default OffCanvas;
