import { Background, BannerSection, LargeTitle, SmallTitle } from './styled';

const Banners: React.FC = () => (
    <BannerSection>
        <Background className="d-none d-md-block" />
        <div className="container">
            <div className="flex-column flex-sm-column d-md-flex flex-md-row py-5">
                <div className="col">
                    <SmallTitle className="d-block d-lg-none pb-3">
                        Conheça nosso aplicativo
                    </SmallTitle>
                    <LargeTitle className="d-none d-lg-block pb-3">
                        Conheça nosso aplicativo
                    </LargeTitle>
                    <h2 className="d-block d-lg-none pb-5 fs-5">
                        Tenha o Guia Oficial de Turismo de Maricá a qualquer
                        momento, na palma das suas mãos!
                    </h2>
                    <h2 className="d-none d-lg-block pb-5">
                        Tenha o Guia Oficial de Turismo de Maricá a qualquer
                        momento, na palma das suas mãos!
                    </h2>
                    <div className="pt-5 d-flex">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.marica2030.app"
                            target="_blank"
                            rel="noreferrer"
                            className="d-flex"
                        >
                            <img
                                src="https://conhecamarica.com.br/static/media/btn-google-play.9cedb6fd.png"
                                alt="Disponível no Google Play"
                                className="pe-2 img-fluid"
                            />
                        </a>
                        <a
                            href="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199"
                            target="_blank"
                            rel="noreferrer"
                            className="d-flex"
                        >
                            <img
                                src="https://conhecamarica.com.br/static/media/btn-app-store.889738f2.png"
                                alt="Disponível na Play Store"
                                className="img-fluid"
                            />
                        </a>
                    </div>
                </div>
                <div className="d-none d-md-flex col d-flex justify-content-end">
                    <img
                        src="https://conhecamarica.com.br/static/media/mock-phone.ecd8b759.png"
                        alt="App conheça Maricá"
                    />
                </div>
                <div className="col d-flex d-md-none justify-content-center mt-5">
                    <img
                        src="https://conhecamarica.com.br/static/media/mock-phone.ecd8b759.png"
                        alt="App conheça Maricá"
                    />
                </div>
            </div>
        </div>
    </BannerSection>
);

export default Banners;
