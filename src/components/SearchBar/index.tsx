import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button, Form, SearchInput } from './styled';

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
        <Form className="d-flex row">
            <div className="d-flex col col-12">
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
