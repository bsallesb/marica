import GooglePlay from '../../assets/app-google-play.png';
import AppleStore from '../../assets/app-apple-store.png';

const MeetOurApp: React.FC = () => {
    return (
        <div>
            <div className="mt-5">
                <h2 className="ms-3 fs-5 fw-bold">Conheça nosso app</h2>
            </div>
            <div className="d-flex mt-3 mx-3">
                <a
                    href="https://play.google.com/store/apps/details?id=com.marica2030.app"
                    target="_blank"
                    rel="noreferrer"
                    className="w-50 me-1"
                >
                    <img
                        src={GooglePlay}
                        alt="Aplicativo Google Play"
                        className="img-fluid"
                    />
                </a>
                <a
                    href="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199"
                    target="_blank"
                    rel="noreferrer"
                    className="w-50 ms-1"
                >
                    <img
                        src={AppleStore}
                        alt="Aplicativo Apple Store"
                        className="img-fluid"
                    />
                </a>
            </div>
        </div>
    );
};

export default MeetOurApp;
