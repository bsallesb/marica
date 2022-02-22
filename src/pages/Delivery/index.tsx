import { FaMotorcycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import { Business } from './styles';

export const Delivery: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <div className="mt-3">
                    <PageTitle title="Delivery" />
                    <h2 className="mt-4 fs-5">
                        Selecione o tipo de estabelecimento:
                    </h2>
                </div>
                <div className="bg-white mt-3">
                    <div className="d-flex align-items-center p-3">
                        <Link
                            to="/bares-e-restaurantes"
                            className="fs-4 text-decoration-none"
                        >
                            <FaMotorcycle className="text-secondary" />
                        </Link>
                        <div className="ps-3">
                            <Business
                                to="/bares-e-restaurantes"
                                className="text-decoration-none"
                            >
                                <h2 className="fs-6 mb-0">
                                    Bares e Restaurantes
                                </h2>
                            </Business>
                        </div>
                    </div>
                </div>
                <div className="bg-white mt-3">
                    <div className="d-flex align-items-center p-3">
                        <Link
                            to="/bares-e-restaurantes"
                            className="fs-4 text-decoration-none"
                        >
                            <FaMotorcycle className="text-secondary" />
                        </Link>
                        <div className="ps-3">
                            <Business
                                to="/bares-e-restaurantes"
                                className="text-decoration-none"
                            >
                                <h2 className="fs-6 mb-0">Comércio Local</h2>
                            </Business>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </Wrapper>
    );
};
