import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import Footer from './components/Footer';

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const items = ["React", "JavaScript", "Node.js", "CSS", "HTML", "Python", "Vue", "Angular"];

    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ItemList items={filteredItems} />
            <Footer />
        </div>
    );
};

export default App;
