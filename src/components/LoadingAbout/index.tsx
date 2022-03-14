import ContentLoader from 'react-content-loader';

const LoadingAbout: React.FC = () => (
    <div className="mb-3">
        <ContentLoader
            speed={2}
            width="100%"
            height={700}
            backgroundColor="#d4d3db"
            foregroundColor="#ece4e4"
        >
            <rect x="0" y="20" rx="10" ry="10" width="100%" height="20" />
            <rect x="0" y="50" rx="10" ry="10" width="85%" height="20" />
            <rect x="0" y="80" rx="10" ry="10" width="92%" height="20" />
            <rect x="0" y="110" rx="10" ry="10" width="100%" height="20" />
            <rect x="0" y="140" rx="10" ry="10" width="95%" height="20" />
            <rect x="0" y="190" rx="20" ry="20" width="20%" height="35" />
            <rect x="0" y="240" rx="10" ry="10" width="100%" height="20" />
            <rect x="0" y="270" rx="10" ry="10" width="85%" height="20" />
            <rect x="0" y="300" rx="10" ry="10" width="92%" height="20" />
            <rect x="0" y="330" rx="10" ry="10" width="100%" height="20" />
            <rect x="0" y="360" rx="10" ry="10" width="95%" height="20" />
            <rect x="0" y="410" rx="20" ry="20" width="20%" height="35" />
            <rect x="0" y="460" rx="10" ry="10" width="100%" height="20" />
            <rect x="0" y="490" rx="10" ry="10" width="85%" height="20" />
            <rect x="0" y="520" rx="10" ry="10" width="92%" height="20" />
            <rect x="0" y="550" rx="10" ry="10" width="100%" height="20" />
            <rect x="0" y="580" rx="10" ry="10" width="95%" height="20" />
        </ContentLoader>
    </div>
);

export default LoadingAbout;
