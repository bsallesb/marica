import GoogleMapReact from 'google-map-react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { HotelType } from '../../@types/Hotel';
import { RestaurantType } from '../../@types/Restaurant';

import { SpotType } from '../../@types/Spot';
import { LocationPoint, Title } from './styles';

interface IframeMapProps {
    items: SpotType[] | HotelType[] | RestaurantType[];
    url: string;
    backTo: string;
}

interface IAnyReactComponentProps {
    lat: number;
    lng: number;
}

const MapMarker: React.FC<IAnyReactComponentProps> = () => (
    <LocationPoint>
        <ImLocation2 color="red" className="fs-2" />
    </LocationPoint>
);

const IframeBigMap: React.FC<IframeMapProps> = ({ items, url, backTo }) => {
    return (
        <div>
            <Title
                to={url}
                className="d-flex bg-white px-4 py-2 mt-3 ms-3 text-decoration-none align-items-center"
            >
                <AiOutlineArrowLeft color="black" />
                <h1 className="ms-2 fs-5 fw-bold m-0 text-dark">{backTo}</h1>
            </Title>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: `${process.env.REACT_APP_GOOGLE_KEY}`,
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={13}
                    defaultCenter={{
                        lat: -22.92016437953923713166659581474959850311279296875,
                        lng: -42.81936358437220491168773151002824306488037109375,
                    }}
                >
                    {items?.map(item =>
                        item?.enderecos?.map(address => (
                            <MapMarker
                                lat={address.lat}
                                lng={address.lng}
                                key={address.id}
                            />
                        ))
                    )}
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default IframeBigMap;
