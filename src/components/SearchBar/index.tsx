import { AiOutlineSearch } from "react-icons/ai";
import { SearchInput } from "./styled";

const SearchBar:React.FC = () => {
    
    return(
        <form className="d-flex">
            <SearchInput className="form-control me-2" type="search" placeholder="Buscar Pontos Turísticos" aria-label="Search">

            </SearchInput>
        </form>
        );
};

export default SearchBar;