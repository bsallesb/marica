import { PillBtn } from './styles';

interface IPillProps {
    url: string;
    color?: string;
    size?: string;
    onClick?: () => void;
}

const Pill: React.FC<IPillProps> = ({
    url,
    color = 'light',
    size = 'sm',
    children,
    onClick,
}) => (
    <PillBtn
        to={url}
        className={`btn btn-${color} btn-${size}`}
        onClick={onClick}
    >
        {children}
    </PillBtn>
);

export default Pill;
