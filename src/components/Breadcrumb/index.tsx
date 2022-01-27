import { AiOutlineArrowLeft } from "react-icons/ai";
import { BreadcrumbArrow, BreadcrumbSection } from "./styled";

const Breadcrumb:React.FC = () => {


    return(
        <BreadcrumbSection aria-label="breadcrumb">
        <ol className="breadcrumb m-0 d-flex align-items-center">
            <BreadcrumbArrow href=""><AiOutlineArrowLeft /></BreadcrumbArrow>
            <li className="breadcrumb-item"><a href="#">Pontos Turísticos</a></li>
        </ol>
        </BreadcrumbSection>
    )
};

export default Breadcrumb;