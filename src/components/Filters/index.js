import React from 'react';
import FilterPill from '../FilterPill';
import './style.css';

const Filters = (props) => {
    if (props.filters.length === 0) {
        return null;
    }
    return (
        <div className="filterWrapper">
            <ul>
                {props.filters.map((filter, index) => {
                    return <FilterPill key={index} text={filter} removeFilter={props.removeFilter} />
                })}
            </ul>
            {props.filters.length > 0 && <button className="clearButton" onClick={() => props.clearFilters()}>Clear</button>}
        </div>
    )
}

export default Filters;
