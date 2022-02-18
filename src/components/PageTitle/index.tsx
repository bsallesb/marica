import { AiOutlineArrowLeft } from 'react-icons/ai';
import { LinkTitle } from './styled';

interface IPageTitleProps {
    title: string;
    subtitle?: string;
    url?: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({
    title,
    subtitle,
    url = '/',
}) => {
    return (
        <div className="d-flex m-0 align-items-center">
            <LinkTitle className="fw-normal fs-5 me-2" to={url}>
                <AiOutlineArrowLeft />
            </LinkTitle>
            <div className="fw-bold">
                {subtitle && (
                    <LinkTitle
                        to={url}
                        className="text-muted text-decoration-none fs-6 fw-normal"
                    >
                        {subtitle}
                    </LinkTitle>
                )}
                <p className="text-decoration-none fs-3 breadcrumb-item">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default PageTitle;
