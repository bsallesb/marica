import GoogleMapReact from 'google-map-react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';

import { AddressType } from '../../@types/Address';
import { LocationPoint, Title } from './styles';

interface IframeMapProps {
    addresses: AddressType[];
    url: string;
    backTo: string;
}

interface IAnyReactComponentProps {
    lat: number;
    lng: number;
}

const AnyReactComponent: React.FC<IAnyReactComponentProps> = () => (
    <LocationPoint>
        <ImLocation2 color="red" className="fs-2" />
    </LocationPoint>
);

const IframeBigMap: React.FC<IframeMapProps> = ({ addresses, url, backTo }) => {
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
                    defaultCenter={{
                        lat: addresses[0].lat,
                        lng: addresses[0].lng,
                    }}
                    defaultZoom={13}
                >
                    {addresses.map(address => (
                        <AnyReactComponent
                            lat={address.lat}
                            lng={address.lng}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default IframeBigMap;
