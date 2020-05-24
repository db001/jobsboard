import React from 'react';
import './style.css';

const Pill = props => {

    return (
        <li className="pill" onClick={() => props.addPillToFilters(props.text)}>
            {props.text}
        </li>
    )
}

export default Pill;
