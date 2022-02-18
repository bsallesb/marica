import ContentLoader from 'react-content-loader';

const LoadingCard: React.FC = () => (
    <div className="mb-3">
        <ContentLoader
            speed={2}
            width="100%"
            height={420}
            backgroundColor="#d4d3db"
            foregroundColor="#ece4e4"
        >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="280" />
            <rect x="0" y="290" rx="15" ry="15" width="100%" height="30" />
            <rect x="0" y="325" rx="15" ry="15" width="22%" height="30" />
            <rect x="100" y="325" rx="15" ry="15" width="22%" height="30" />
            <rect x="0" y="360" rx="10" ry="10" width="60%" height="20" />
        </ContentLoader>
    </div>
);

export default LoadingCard;
