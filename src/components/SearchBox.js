import React from 'react';

const SearchBox = ({ setSearchTerm }) => {
    return (
        <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};

export default SearchBox;
