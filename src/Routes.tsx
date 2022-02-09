import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { BannersProvider } from './hooks/Banners';
import { SpotsProvider } from './hooks/TouristSpot';
import { Home } from './pages/Home';
import TouristSpot from './pages/TouristSpot';
import { TouristSpots } from './pages/TouristSpots';
import { GlobalStyle } from './styles/global';

export const Routes: React.FC = () => (
    <>
        <BannersProvider>
            <SpotsProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/pontos-turisticos"
                            element={<TouristSpots />}
                        />
                        <Route
                            path="/pontos-turisticos/:id"
                            element={<TouristSpot />}
                        />
                    </Switch>
                </BrowserRouter>
            </SpotsProvider>
        </BannersProvider>
        <GlobalStyle />
    </>
);
