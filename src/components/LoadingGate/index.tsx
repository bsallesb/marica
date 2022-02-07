interface LoadingGateProps {
    waitFor: boolean;
    meanWile: React.ReactNode;
}

const LoadingGate: React.FC<LoadingGateProps> = ({
    waitFor,
    meanWile,
    children,
}) => {
    return <> waitFor ? children : meanWile; </>;
};

export default LoadingGate;
