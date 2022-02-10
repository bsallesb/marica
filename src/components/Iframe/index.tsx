import GoogleMapReact from 'google-map-react';
import { AddressType } from '../../@types/Address';

interface IframeMapProps {
    address: AddressType[];
}

const IframeMap: React.FC<IframeMapProps> = ({ address }) => {
    return (
        <div className="mt-3">
            <h2 className="ms-3 fs-5">Localização</h2>
            <div style={{ height: '35vh', width: '100%' }} className="ps-3">
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
                />
            </div>
        </div>
    );
};

export default IframeMap;
