import React from 'react';

const Pill = props => {

    return (
        <li onClick={() => props.addPillToFilters(props.text)}>
            {props.text}
        </li>
    )
}

export default Pill;
