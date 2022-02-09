import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { MainFooter } from './styled';
import Logo from '../../assets/marica-logo.png';
import LogoMarica from '../../assets/marica-protege-logo.png';

const Footer: React.FC = () => (
    <MainFooter className="mt-auto">
        <div className="container">
            <div className="row row-cols py-3">
                <div className="col">
                    <div className="py-2">
                        <ul className="d-flex justify-content-start m-0 p-0">
                            <li className="ms-2 d-flex">
                                <a
                                    href="http://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-6"
                                >
                                    <FaFacebook /> Facebook
                                </a>
                            </li>
                            <li className="ms-2">
                                <a
                                    href="http://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-6"
                                >
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                            <li className="ms-2">
                                <a
                                    href="http://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-6"
                                >
                                    <FaTwitter /> Twitter
                                </a>
                            </li>
                            <li className="ms-2">
                                <a
                                    href="http://youtube.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-6"
                                >
                                    <FaYoutube /> Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="py-2">
                        <ul className="d-flex justify-content-start m-0 p-0">
                            <li className="ms-2 d-flex">
                                <Link to="/" className="fs-6">
                                    Área do Comerciante
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col d-flex flex-row align-items-center justify-content-end">
                    <img
                        src={LogoMarica}
                        alt="Maricá Recebe, Maricá Protege"
                        className="img-fluid px-2"
                    />
                    <ul className="d-flex flex-column justify-content-start m-0 p-0 px-2">
                        <li className="ms-2 d-flex py-1">
                            <Link to="/" className="fs-6">
                                Manual Gastronomia
                            </Link>
                        </li>
                        <li className="ms-2 d-flex py-1">
                            <Link to="/" className="fs-6">
                                Manual Hospedagem
                            </Link>
                        </li>
                    </ul>
                    <img
                        src={Logo}
                        alt="Maricá Recebe, Maricá Protege"
                        className="img-fluid px-2"
                    />
                </div>
            </div>
        </div>
    </MainFooter>
);

export default Footer;
