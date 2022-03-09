import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { CategoryType } from '../../@types/Category';
import { HotelType } from '../../@types/Hotel';
import { RestaurantType } from '../../@types/Restaurant';

import { SpotType } from '../../@types/Spot';
import Card from '../Card';
import { CardMarker, LocationPoint, Title, Wrapper } from './styles';

interface IframeMapProps {
    items: SpotType[] | HotelType[] | RestaurantType[];
    url: string;
    backTo: string;
    setCategory: (category: CategoryType) => void;
}

interface IAnyReactComponentProps {
    lat: number;
    lng: number;
    item: SpotType | HotelType | RestaurantType;
    setCategory: (category: CategoryType) => void;
    showCard: boolean;
    onPinClick: () => void;
}

const MapMarker: React.FC<IAnyReactComponentProps> = ({
    item,
    setCategory,
    showCard,
    onPinClick,
}) => {
    return (
        <Wrapper>
            {showCard && (
                <CardMarker>
                    <Card
                        setCategory={setCategory}
                        key={item.id}
                        nome={item.nome}
                        addresses={item.enderecos}
                        image={item.capa}
                        url={`/eventos/${item.id}`}
                        categories={item.categorias}
                        path="eventos"
                    />
                </CardMarker>
            )}
            <LocationPoint type="button" onClick={onPinClick}>
                <ImLocation2 color="red" className="fs-2" />
            </LocationPoint>
        </Wrapper>
    );
};

const IframeBigMap: React.FC<IframeMapProps> = ({
    items,
    url,
    backTo,
    setCategory,
}) => {
    const [activeAddress, setActiveAddress] = useState<number | null>(null);
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
                    onClick={() => setActiveAddress(null)}
                >
                    {items?.map(item =>
                        item?.enderecos?.map(address => {
                            return (
                                <MapMarker
                                    lat={address.lat}
                                    lng={address.lng}
                                    key={address.id}
                                    item={item}
                                    setCategory={setCategory}
                                    showCard={address.id === activeAddress}
                                    onPinClick={() =>
                                        setActiveAddress(
                                            address.id === activeAddress
                                                ? null
                                                : address.id
                                        )
                                    }
                                />
                            );
                        })
                    )}
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default IframeBigMap;
