import { useEffect } from "react";
import { useBanners } from "../../hooks/Banners";

const Carousel:React.FC = () => {
  const { banners, getBanners } = useBanners();

  useEffect(() => {
    getBanners();
  }, [])

  return (
    <div className="pb-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    {banners.map((banner, index) => 
        <div key={banner.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
        <img src={banner.image_l} className="d-block w-100" alt="carrosel" />
      </div>
    )}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
    </div>
)};

export default Carousel;

// https://app-marica-fotos.s3-sa-east-1.amazonaws.com/banners/l2NkllCVvyk3zc2dI2dtroI14bDeB0K9Mk4faP5g.jpeg
// https://app-marica-fotos.s3-sa-east-1.amazonaws.com/banners/EIFNlXR68J3LcbxZEyMEcaFnrHEptrXTxQXpK945.jpeg