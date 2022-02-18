import LoadingPill from '../LoadingPill';

interface ILoadingPillsProps {
    show: boolean;
    numberOfCards?: number;
}

const LoadingPills: React.FC<ILoadingPillsProps> = ({
    show,
    numberOfCards = 12,
}) =>
    show ? (
        <div className="d-flex flex-wrap mb-3">
            {[...Array(numberOfCards)].map((item, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} className="">
                    <LoadingPill />
                </div>
            ))}
        </div>
    ) : null;

export default LoadingPills;
