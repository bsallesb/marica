import ContentLoader from 'react-content-loader';

const LoadingInfo: React.FC = () => (
    <div className="mb-3">
        <ContentLoader
            speed={2}
            width="100%"
            height={700}
            backgroundColor="#d4d3db"
            foregroundColor="#ece4e4"
            className="d-block d-sm-block d-md-block d-lg-none"
        >
            <rect x="0" y="0" rx="10" ry="10" width="12%" height="20" />
            <rect x="0" y="35" rx="15" ry="15" width="40%" height="30" />
            <rect x="0" y="80" rx="15" ry="15" width="10%" height="30" />
            <rect x="12%" y="80" rx="15" ry="15" width="10%" height="30" />
            <rect x="0" y="120" rx="10" ry="10" width="100%" height="20" />
            <rect x="0" y="145" rx="10" ry="10" width="85%" height="20" />
            <rect x="0" y="170" rx="10" ry="10" width="92%" height="20" />
            <rect x="0" y="195" rx="10" ry="10" width="100%" height="20" />
            <rect x="0" y="220" rx="10" ry="10" width="95%" height="20" />
            <rect x="0" y="300" rx="10" ry="10" width="15%" height="25" />
            <rect x="0" y="340" rx="10" ry="10" width="3%" height="20" />
            <rect x="4%" y="340" rx="10" ry="10" width="30%" height="20" />
            <rect x="0" y="375" rx="10" ry="10" width="3%" height="20" />
            <rect x="4%" y="375" rx="10" ry="10" width="30%" height="20" />
            <rect x="0" y="440" rx="10" ry="10" width="15%" height="25" />
            <rect x="0" y="480" rx="10" ry="10" width="3%" height="20" />
            <rect x="4%" y="480" rx="10" ry="10" width="30%" height="20" />
            <rect x="0" y="515" rx="10" ry="10" width="3%" height="20" />
            <rect x="4%" y="515" rx="10" ry="10" width="30%" height="20" />
        </ContentLoader>
        <ContentLoader
            speed={2}
            width="100%"
            height={700}
            backgroundColor="#d4d3db"
            foregroundColor="#ece4e4"
            className="d-none d-sm-none d-md-none d-lg-block"
        >
            <rect x="0" y="0" rx="10" ry="10" width="12%" height="20" />
            <rect x="0" y="35" rx="15" ry="15" width="40%" height="30" />
            <rect x="0" y="80" rx="15" ry="15" width="10%" height="30" />
            <rect x="12%" y="80" rx="15" ry="15" width="10%" height="30" />
            <rect x="0" y="120" rx="10" ry="10" width="75%" height="20" />
            <rect x="0" y="145" rx="10" ry="10" width="65%" height="20" />
            <rect x="0" y="170" rx="10" ry="10" width="72%" height="20" />
            <rect x="0" y="195" rx="10" ry="10" width="65%" height="20" />
            <rect x="0" y="220" rx="10" ry="10" width="75%" height="20" />
            <rect x="0" y="300" rx="10" ry="10" width="15%" height="25" />
            <rect x="0" y="340" rx="10" ry="10" width="3%" height="20" />
            <rect x="4%" y="340" rx="10" ry="10" width="30%" height="20" />
            <rect x="0" y="375" rx="10" ry="10" width="3%" height="20" />
            <rect x="4%" y="375" rx="10" ry="10" width="30%" height="20" />
            <rect x="0" y="440" rx="10" ry="10" width="15%" height="25" />
            <rect x="0" y="480" rx="10" ry="10" width="3%" height="20" />
            <rect x="4%" y="480" rx="10" ry="10" width="30%" height="20" />
            <rect x="0" y="515" rx="10" ry="10" width="3%" height="20" />
            <rect x="4%" y="515" rx="10" ry="10" width="30%" height="20" />
            <rect x="78%" y="0" rx="15" ry="15" width="10%" height="30" />
            <rect x="78%" y="35" rx="5" ry="5" width="22%" height="280" />
            <rect x="78%" y="330" rx="15" ry="15" width="10%" height="30" />
            <rect x="78%" y="380" rx="10" ry="10" width="10%" height="50" />
            <rect x="90%" y="380" rx="10" ry="10" width="10%" height="50" />
        </ContentLoader>
    </div>
);

export default LoadingInfo;
