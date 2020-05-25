import React from 'react';
import './style.css';

const FilterPill = props => {

    return (
        <li className="filterPill">
            <span className="filterName">{props.text}</span>
            <span className="filterRemove" onClick={() => props.removeFilter(props.text)}>X</span>
        </li>
    )
}

export default FilterPill;