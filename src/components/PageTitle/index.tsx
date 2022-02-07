import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TitleArrow, TitleSection } from './styled';

interface IPageTitleProps {
    name: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({ name }) => {
    return (
        <TitleSection
            aria-label="breadcrumb"
            className="d-flex align-items-center"
        >
            <ol className="breadcrumb m-0 d-flex align-items-center">
                <TitleArrow href="">
                    <AiOutlineArrowLeft />
                </TitleArrow>
                <li className="breadcrumb-item">
                    <Link to="/">{name}</Link>
                </li>
            </ol>
        </TitleSection>
    );
};

export default PageTitle;
