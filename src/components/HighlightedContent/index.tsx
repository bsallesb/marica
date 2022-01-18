import { Link } from "react-router-dom";
import { FaBed, FaMotorcycle, FaRoute, FaTicketAlt, FaUmbrellaBeach, FaUniversity } from "react-icons/fa";
import { MdRestaurant, MdStore } from "react-icons/md";
import { GiMicrophone, GiFlowerPot } from "react-icons/gi"
import { BsCalendarDayFill } from "react-icons/bs"

import { Button, Section } from "./styled";

const HighlightedContent:React.FC = () => (
    <Section className="align-self-stretch pb-5">
        <div className="row row-cols-3 justify-content-center gy-4">
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><FaUmbrellaBeach /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Pontos Turísticos</h5>
                        <p className="card-text pb-4">Conheça nossas praias, lagoas, grutas e outros pontos turísticos</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><FaBed /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Hotéis e Pousadas</h5>
                        <p className="card-text pb-4">Saiba onde se hospedar em Maricá</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><MdRestaurant /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Bares e Restaurantes</h5>
                        <p className="card-text pb-4">Aprecie a gastronomia de Maricá</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><FaMotorcycle /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Delivery</h5>
                        <p className="card-text pb-4">Receba o melhor de Maricá no conforto da sua casa</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><MdStore /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Comércio Local</h5>
                        <p className="card-text pb-4">Veja onde fazer as suas compras</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><FaTicketAlt /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Cupons de Desconto</h5>
                        <p className="card-text pb-4">As melhores promoções para curtir a cidade</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><GiMicrophone /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Espaços para Eventos</h5>
                        <p className="card-text pb-4">Locais para fazer suas festas ou reuniões</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><BsCalendarDayFill /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Eventos</h5>
                        <p className="card-text pb-4">Confira o calendário de eventos da cidade</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><FaRoute /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Roteiros Turisticos</h5>
                        <p className="card-text pb-4">Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade.</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><GiFlowerPot /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Artesanato</h5>
                        <p className="card-text pb-4">Conheça e compre as criações dos artesãos de Maricá/RJ</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center border-0">
                    <Link to='' className="fs-1"><FaUniversity /></Link>
                    <div className="card-body">
                        <h5 className="card-title fs-5">Sobre a Cidade</h5>
                        <p className="card-text pb-4">Conheça mais sobre Maricá</p>
                        <Button href="" className="btn btn-primary pt-0 pb-0">Acessar</Button>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

export default HighlightedContent;