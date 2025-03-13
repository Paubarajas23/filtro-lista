import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.length > 0 ? (
                items.map((item, index) => <li key={index}>{item}</li>)
            ) : (
                <p>No hay resultados</p>
            )}
        </ul>
    );
};

export default ItemList;
