import LoadingPill from '../LoadingPill';
import { Wrapper } from './styles';

interface ILoadingPillsProps {
    show: boolean;
    numberOfCards?: number;
}

const LoadingPills: React.FC<ILoadingPillsProps> = ({
    show,
    numberOfCards = 12,
}) =>
    show ? (
        <Wrapper>
            <div className="d-flex overflow-x overflow-sm-x flex-md-wrap mb-3">
                {[...Array(numberOfCards)].map((item, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={i} className="">
                        <LoadingPill />
                    </div>
                ))}
            </div>
        </Wrapper>
    ) : null;

export default LoadingPills;
