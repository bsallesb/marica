import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TitleArrow, TitleSection } from './styled';

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
        <TitleSection
            aria-label="breadcrumb"
            className="d-flex align-items-center"
        >
            <ul className="breadcrumb m-0 d-flex align-items-center">
                <TitleArrow className="fw-normal fs-5 me-2" to={url}>
                    <AiOutlineArrowLeft />
                </TitleArrow>
                <li className="d-flex flex-column">
                    {subtitle && (
                        <Link to="/" className=" text-muted fs-6 fw-normal">
                            {subtitle}
                        </Link>
                    )}
                    <Link to="/" className="breadcrumb-item">
                        {title}
                    </Link>
                </li>
            </ul>
        </TitleSection>
    );
};

export default PageTitle;
