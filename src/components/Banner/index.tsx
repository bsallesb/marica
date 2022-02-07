import { Background, BannerSection } from './styled';

const Banners: React.FC = () => (
    <BannerSection>
        <Background />
        <div className="container">
            <div className="row py-5">
                <div className="col-6">
                    <h1 className="pb-3">Conheça nosso aplicativo</h1>
                    <h2 className="pb-5">
                        Tenha o Guia Oficial de Turismo de Maricá a qualquer
                        momento, na palma das suas mãos!
                    </h2>
                    <div className="pt-5">
                        <img
                            src="https://conhecamarica.com.br/static/media/btn-google-play.9cedb6fd.png"
                            alt="Disponível no Google Play"
                            className="pe-2"
                        />
                        <img
                            src="https://conhecamarica.com.br/static/media/btn-app-store.889738f2.png"
                            alt="Disponível na Play Store"
                        />
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-end">
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
