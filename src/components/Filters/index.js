import React from 'react';
import FilterPill from '../FilterPill';

const Filters = (props) => {
    return (
        <ul>
            {props.filters.map((filter, index) => {
                return <FilterPill key={index} text={filter} />
            })}
        </ul>
    )
}

export default Filters;
