import React from 'react';

const FilteredList = ({ items, searchTerm }) => {
    // Filtra los elementos basados en el texto de búsqueda
    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ul>
            {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => <li key={index}>{item}</li>)
            ) : (
                <p>No hay resultados</p>
            )}
        </ul>
    );
};

export default FilteredList;
