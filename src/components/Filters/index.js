import React from 'react';
import FilterPill from '../FilterPill';

const Filters = (props) => {

    return (
        <ul>
            {props.filters.map(filter => {
                return <FilterPill text={filter} />
            })}
        </ul>
    )
}

export default Filters;
