import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { BannersProvider } from './hooks/Banners';
import { SpotsProvider } from './hooks/TouristSpot';
import { Home } from './pages/Home';
import TouristSpot from './pages/TouristSpot';
import { TouristSpots } from './pages/TouristSpots';
import { GlobalStyle } from './styles/global';
import { SpotCategory } from './pages/SpotCategory';
import { AboutMarica } from './pages/AboutMarica';
import { AboutProvider } from './hooks/About';
import { MapOfSpots } from './pages/MapOfSpots';
import { HotelsProvider } from './hooks/Hotel';
import { Hotels } from './pages/Hotels';
import Hotel from './pages/Hotel';
import { HotelCategory } from './pages/HotelCategory';
import { MapOfHotels } from './pages/MapOfHotels';
import { Restaurants } from './pages/Restaurants';
import { RestaurantsProvider } from './hooks/Restaurant';
import Restaurant from './pages/Restaurant';
import { RestaurantCategory } from './pages/RestaurantCategory';
import { MapOfRestaurants } from './pages/MapOfRestaurants';
import { Delivery } from './pages/Delivery';
import { BusinessesProvider } from './hooks/Business';
import { Businesses } from './pages/Businesses';

export const Routes: React.FC = () => (
    <>
        <BannersProvider>
            <SpotsProvider>
                <HotelsProvider>
                    <RestaurantsProvider>
                        <AboutProvider>
                            <BusinessesProvider>
                                <BrowserRouter>
                                    <Switch>
                                        <Route path="/" element={<Home />} />
                                        <Route
                                            path="/pontos-turisticos"
                                            element={<TouristSpots />}
                                        />
                                        <Route
                                            path="/pontos-turisticos/categorias/:id/:label"
                                            element={<SpotCategory />}
                                        />
                                        <Route
                                            path="/pontos-turisticos/:id"
                                            element={<TouristSpot />}
                                        />
                                        <Route
                                            path="/sobre-a-cidade"
                                            element={<AboutMarica />}
                                        />
                                        <Route
                                            path="/pontos-turisticos/mapa"
                                            element={<MapOfSpots />}
                                        />
                                        <Route
                                            path="/hoteis-e-pousadas"
                                            element={<Hotels />}
                                        />
                                        <Route
                                            path="/hoteis-e-pousadas/categorias/:id/:label"
                                            element={<HotelCategory />}
                                        />
                                        <Route
                                            path="/hoteis-e-pousadas/:id"
                                            element={<Hotel />}
                                        />
                                        <Route
                                            path="/hoteis-e-pousadas/mapa"
                                            element={<MapOfHotels />}
                                        />
                                        <Route
                                            path="/bares-e-restaurantes"
                                            element={<Restaurants />}
                                        />
                                        <Route
                                            path="/bares-e-restaurantes/categorias/:id/:label"
                                            element={<RestaurantCategory />}
                                        />
                                        <Route
                                            path="/bares-e-restaurantes/:id"
                                            element={<Restaurant />}
                                        />
                                        <Route
                                            path="/bares-e-restaurantes/mapa"
                                            element={<MapOfRestaurants />}
                                        />
                                        <Route
                                            path="/delivery"
                                            element={<Delivery />}
                                        />
                                        <Route
                                            path="/comercios"
                                            element={<Businesses />}
                                        />
                                    </Switch>
                                </BrowserRouter>
                            </BusinessesProvider>
                        </AboutProvider>
                    </RestaurantsProvider>
                </HotelsProvider>
            </SpotsProvider>
        </BannersProvider>
        <GlobalStyle />
    </>
);
