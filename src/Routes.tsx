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

export const Routes: React.FC = () => (
    <>
        <BannersProvider>
            <SpotsProvider>
                <AboutProvider>
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
                        </Switch>
                    </BrowserRouter>
                </AboutProvider>
            </SpotsProvider>
        </BannersProvider>
        <GlobalStyle />
    </>
);
