import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { MainFooter } from './styled';
import Logo from '../../assets/marica-logo.png';
import LogoMarica from '../../assets/marica-protege-logo.png';

const Footer: React.FC = () => (
    <MainFooter className="mt-auto">
        <div className="container">
            <div className="flex-column flex-sm-column flex-md-column d-lg-flex flex-lg-row row-cols py-3">
                <div className="col">
                    <div className="py-2">
                        <ul className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start m-0 p-0">
                            <li className="ms-2 d-flex">
                                <a
                                    href="https://www.facebook.com/prefeiturademarica?_rdc=1&_rdr"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="d-flex fs-6 align-items-center"
                                >
                                    <FaFacebook
                                        size="30"
                                        className="d-block d-lg-none mx-2"
                                    />
                                    <FaFacebook
                                        size="20"
                                        className="d-none d-lg-block"
                                    />
                                    <p className="d-none d-sm-none d-md-none d-lg-block ps-2">
                                        Facebook
                                    </p>
                                </a>
                            </li>
                            <li className="ms-2">
                                <a
                                    href="https://www.instagram.com/prefeiturademarica/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="d-flex fs-6 align-items-center"
                                >
                                    <FaInstagram
                                        size="30"
                                        className="d-block d-lg-none mx-2"
                                    />
                                    <FaInstagram
                                        size="20"
                                        className="d-none d-lg-block"
                                    />
                                    <p className="d-none d-sm-none d-md-none d-lg-block ps-2">
                                        Instagram
                                    </p>
                                </a>
                            </li>
                            <li className="ms-2">
                                <a
                                    href="http://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="d-flex fs-6 align-items-center"
                                >
                                    <FaTwitter
                                        size="30"
                                        className="d-block d-lg-none mx-2"
                                    />
                                    <FaTwitter
                                        size="20"
                                        className="d-none d-lg-block"
                                    />
                                    <p className="d-none d-sm-none d-md-none d-lg-block ps-2">
                                        Twitter
                                    </p>
                                </a>
                            </li>
                            <li className="ms-2">
                                <a
                                    href="https://www.youtube.com/user/prefeiturademarica1"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="d-flex fs-6 align-items-center"
                                >
                                    <FaYoutube
                                        size="30"
                                        className="d-block d-lg-none mx-2"
                                    />
                                    <FaYoutube
                                        size="20"
                                        className="d-none d-lg-block"
                                    />
                                    <p className="d-none d-sm-none d-md-none d-lg-block ps-2">
                                        Youtube
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="py-2">
                        <ul className="d-block justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start m-0 p-0">
                            <li className="ms-2 d-block">
                                <a
                                    href="https://app.marica2030.com.br/login"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="d-block d-lg-none fs-6 border py-3 text-center"
                                >
                                    Área do Comerciante
                                </a>
                                <a
                                    href="https://app.marica2030.com.br/login"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="d-none d-lg-block fs-6 text-decoration-underline"
                                >
                                    Área do Comerciante
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col d-block d-lg-none flex-column align-items-center">
                    <ul className="d-block flex-column justify-content-start m-0 p-0">
                        <li className="ms-2 d-block pb-1">
                            <a
                                href="https://www.conhecamarica.com.br/static/media/guia-gastronomico.f9556598.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="fs-6 d-block py-3 border text-center"
                            >
                                Manual Gastronomia
                            </a>
                        </li>
                        <li className="ms-2 d-block py-1">
                            <a
                                href="https://www.conhecamarica.com.br/static/media/guia-hospedagem.2046547a.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="fs-6 d-block py-3 border text-center"
                            >
                                Manual Hospedagem
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex mt-3 justify-content-center">
                        <img
                            src={LogoMarica}
                            alt="Maricá Recebe, Maricá Protege"
                            className="img-fluid px-2"
                        />
                        <img
                            src={Logo}
                            alt="Maricá Recebe, Maricá Protege"
                            className="img-fluid px-2"
                        />
                    </div>
                </div>
                <div className="col d-none d-lg-flex flex-lg-row align-items-center justify-content-end">
                    <img
                        src={LogoMarica}
                        alt="Maricá Recebe, Maricá Protege"
                        className="img-fluid px-2"
                    />
                    <ul className="d-block flex-column justify-content-start m-0 p-0 px-2">
                        <li className="ms-2 d-block py-1">
                            <a
                                href="https://www.conhecamarica.com.br/static/media/guia-gastronomico.f9556598.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="fs-6"
                            >
                                Manual Gastronomia
                            </a>
                        </li>
                        <li className="ms-2 d-block py-1">
                            <a
                                href="https://www.conhecamarica.com.br/static/media/guia-hospedagem.2046547a.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="fs-6"
                            >
                                Manual Hospedagem
                            </a>
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
