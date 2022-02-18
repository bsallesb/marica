import Slider from 'react-slick';
import { ImageType } from '../../@types/Image';
import { Cover } from './styled';

interface ISpotSliderProps {
    images: ImageType[];
}

const responsive = [
    {
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        },
    },
    {
        breakpoint: 750,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
        },
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
];

const SpotSlider: React.FC<ISpotSliderProps> = ({ images }) => (
    <div>
        {images.length > 3 ? (
            <Slider
                className="mb-4"
                dots
                infinite
                speed={500}
                autoplay
                autoplaySpeed={3000}
                slidesToShow={4}
                slidesToScroll={1}
                initialSlide={0}
                responsive={responsive}
                pauseOnHover
            >
                {images.map(image => (
                    <div key={image.id}>
                        <Cover
                            style={{ backgroundImage: `url(${image.src})` }}
                        />
                    </div>
                ))}
            </Slider>
        ) : (
            <div className="d-flex">
                {images.map(image => (
                    <div key={image.id}>
                        <Cover
                            style={{ backgroundImage: `url(${image.src})` }}
                        />
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default SpotSlider;
