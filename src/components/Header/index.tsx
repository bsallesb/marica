import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';

import { MainHeader, Wrapper } from './styled';
import OffCanvas from '../OffCanvas';
import Logo from '../../assets/conheca-marica-logo.png';
import SmallLogo from '../../assets/marica-small-logo.png';

const Header: React.FC = () => (
    <>
        <OffCanvas />
        <MainHeader>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
                    <div className="d-flex align-items-center">
                        <button
                            className="text-white text-decoration-none btn btn-link d-flex align-items-center"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas"
                            type="button"
                            aria-controls="sidebar"
                        >
                            <MdMenu size="50" className="d-block d-lg-none" />
                            <MdMenu size="40" className="d-none d-lg-block" />
                            <p className="ms-2 d-none d-lg-block">Menu</p>
                        </button>
                    </div>
                    <Link to="/" className="d-flex">
                        <img
                            src={Logo}
                            alt="Logo Conheça Maricá"
                            className="img-fluid d-none d-lg-block"
                        />
                        <img
                            src={SmallLogo}
                            alt="Logo Conheça Maricá"
                            className="img-fluid d-block d-lg-none"
                        />
                    </Link>
                    <Wrapper className="d-flex h-100">
                        <ul className="d-none d-lg-flex justify-content-end m-0">
                            <li className="ms-2">
                                <a
                                    href="https://www.facebook.com/prefeiturademarica?_rdc=1&_rdr"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-6"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li className="ms-2">
                                <a
                                    href="https://www.instagram.com/prefeiturademarica/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-6"
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                            <li className="ms-2">
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-6"
                                >
                                    <FaTwitter />
                                </a>
                            </li>
                            <li className="ms-2">
                                <a
                                    href="https://www.youtube.com/user/prefeiturademarica1"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-6"
                                >
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </Wrapper>
                </div>
            </div>
        </MainHeader>
    </>
);

export default Header;
