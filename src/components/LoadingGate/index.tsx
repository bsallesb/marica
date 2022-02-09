interface LoadingGateProps {
    waitFor: boolean;
    meanWile: React.ReactNode;
}

const LoadingGate: React.FC<LoadingGateProps> = ({
    waitFor,
    meanWile,
    children,
    // eslint-disable-next-line react/jsx-no-useless-fragment
}) => <>{waitFor ? children : meanWile}</>;

export default LoadingGate;
