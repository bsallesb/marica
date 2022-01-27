import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { BannersProvider } from "./hooks/Banners";
import { SpotsProvider } from "./hooks/TouristSpot";
import { Home } from "./pages/Home";
import { TouristSpots } from "./pages/TouristSpots";
import { GlobalStyle } from "./styles/global";

export const Routes:React.FC = () => (
    <>
        <BannersProvider>
            <SpotsProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" element={<Home />} />
                        <Route path="/pontos" element={<TouristSpots />} />
                    </Switch>
                </BrowserRouter>
            </SpotsProvider>
        </BannersProvider>
        <GlobalStyle />
    </>
);