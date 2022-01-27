import { BannersProvider } from "./hooks/Banners";
import { Routes } from "./Routes";
import { GlobalStyle } from "./styles/global";

export const App:React.FC = () => {
  return (
    <>
      <BannersProvider>
        <Routes />
      </BannersProvider>
      <GlobalStyle />
    </>
  );
}