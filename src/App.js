import './App.css';
import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import FilteredList from './components/FilteredList';

const App = () => {
    // Estado para la lista de elementos y el texto de búsqueda
    const [searchTerm, setSearchTerm] = useState("");
    const items = ["React", "JavaScript", "Node.js", "CSS", "HTML", "Python", "Vue", "Angular"];

    return (
        <div>
            <h1>Filtrado de Listas</h1>
            {/* Componente de búsqueda */}
            <SearchBox setSearchTerm={setSearchTerm} />
            {/* Componente que muestra la lista filtrada */}
            <FilteredList items={items} searchTerm={searchTerm} />
        </div>
    );
};

export default App;
