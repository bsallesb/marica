import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

import { MainHeader } from "./styled";
import OffCanvas from "../OffCanvas";

const Header:React.FC = () => (
    <>
        <OffCanvas />
        <MainHeader>
        <div className="container">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
                <div className="d-flex align-items-center">
                    <button className="text-white text-decoration-none btn btn-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" type="button" aria-controls="sidebar"><MdMenu className="fs-2" /> Menu</button>
                </div>
                <Link to="/">
                    <img src="https://conhecamarica.com.br/static/media/app-logo.20b8b528.png" alt="Logo Conheça Maricá" className="img-fluid"></img>
                </Link>
                <ul className="d-flex justify-content-end m-0">
                    <li className='ms-2'><Link to='https://www.facebook.com/prefeiturademarica?_rdc=1&_rdr' target="_blank" className="fs-6"><FaFacebook /></Link></li>
                    <li className='ms-2'><Link to='' className="fs-6"><FaInstagram /></Link></li>
                    <li className='ms-2'><Link to='' className="fs-6"><FaTwitter /></Link></li>
                    <li className='ms-2'><Link to='' className="fs-6"><FaYoutube /></Link></li>
                </ul>
            </div>
        </div>
        </MainHeader>
    </>
);

export default Header;