import React from 'react';
import Pill from '../Pill';

const Filters = (props) => {

    return (
        <ul>
            {props.filters.map(filter => {
                return <Pill text={filter} />
            })}
        </ul>
    )
}

export default Filters;
