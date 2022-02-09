import { PillBtn } from './styles';

interface IPillProps {
    url: string;
    color?: string;
    size?: string;
}

const Pill: React.FC<IPillProps> = ({
    url,
    color = 'light',
    size = 'sm',
    children,
}) => (
    <PillBtn to={url} className={`btn btn-${color} btn-${size}`}>
        {children}
    </PillBtn>
);

export default Pill;
