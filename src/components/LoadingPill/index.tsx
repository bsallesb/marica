import ContentLoader from 'react-content-loader';

const LoadingPill: React.FC = () => (
    <div className="mb-3 me-3">
        <ContentLoader
            speed={2}
            width="120"
            height={30}
            backgroundColor="#d4d3db"
            foregroundColor="#ece4e4"
        >
            <rect x="0" y="0" rx="15" ry="15" width="120" height="30" />
        </ContentLoader>
    </div>
);

export default LoadingPill;
