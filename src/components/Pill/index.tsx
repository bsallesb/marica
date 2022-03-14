import { PillBtn, PillExternalBtn } from './styles';

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
}) => {
    const isInternal = url.charAt(0) === '/';

    return (
        <div>
            {isInternal ? (
                <PillBtn
                    to={url}
                    className={`btn btn-${color} btn-${size}`}
                    onClick={onClick}
                >
                    {children}
                </PillBtn>
            ) : (
                <PillExternalBtn
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn btn-${color} btn-${size}`}
                    onClick={onClick}
                >
                    {children}
                </PillExternalBtn>
            )}
        </div>
    );
};

export default Pill;
