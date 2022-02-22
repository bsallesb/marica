import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form } from './styled';

interface ISearchBarProps {
    placeholder?: string;
    onSearch(searchText: string): void;
}

const SearchBar: React.FC<ISearchBarProps> = ({
    placeholder = 'Search',
    onSearch,
}) => {
    const [searchText, setSearchText] = useState('');
    return (
        <Form className="flex-grow-1">
            <div className="d-flex px-3">
                <input
                    className="form-control me-2 border-0"
                    type="search"
                    placeholder={placeholder}
                    aria-label="Search"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
                <button
                    type="button"
                    onClick={() => onSearch(searchText)}
                    className="border-0 bg-transparent"
                >
                    <AiOutlineSearch />
                </button>
            </div>
        </Form>
    );
};

export default SearchBar;
