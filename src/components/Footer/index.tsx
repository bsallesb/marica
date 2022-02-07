import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MainFooter } from './styled';

const Footer: React.FC = () => (
    <MainFooter>
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
                        src="https://conhecamarica.com.br/static/media/marica-protege-logo.9ad352b4.png"
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
                        src="data:image/png;base64,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"
                        alt="Maricá Recebe, Maricá Protege"
                        className="img-fluid px-2"
                    />
                </div>
            </div>
        </div>
    </MainFooter>
);

export default Footer;
