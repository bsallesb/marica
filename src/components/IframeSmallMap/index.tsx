import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from 'react-icons/im';

import { AddressType } from '../../@types/Address';
import { LocationPoint } from './styles';

interface IframeMapProps {
    address: AddressType[];
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

const IframeSmallMap: React.FC<IframeMapProps> = ({ address }) => {
    return (
        <div>
            <div className="mt-3">
                <h2 className="ms-3 fs-5 fw-bold">Localização</h2>
                <div style={{ height: '35vh', width: '100%' }} className="px-3">
                    <GoogleMapReact
                        key={address[0].id}
                        bootstrapURLKeys={{
                            key: `${process.env.REACT_APP_GOOGLE_KEY}`,
                        }}
                        defaultCenter={{
                            lat: address[0].lat,
                            lng: address[0].lng,
                        }}
                        defaultZoom={13}
                    >
                        <AnyReactComponent
                            lat={address[0].lat}
                            lng={address[0].lng}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
};

export default IframeSmallMap;
