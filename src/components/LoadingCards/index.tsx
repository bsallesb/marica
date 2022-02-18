import LoadingCard from '../LoadingCard';

interface ILoadingCardsProps {
    show: boolean;
    numberOfCards?: number;
}

const LoadingCards: React.FC<ILoadingCardsProps> = ({
    show,
    numberOfCards = 12,
}) =>
    show ? (
        <div className="row row-cols-3 g-4">
            {[...Array(numberOfCards)].map((item, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} className="col">
                    <LoadingCard />
                </div>
            ))}
        </div>
    ) : null;

export default LoadingCards;
