import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
             placeholder="Поиск по элементам"
        />
    )
}

export default SearchPanel;