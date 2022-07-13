import React from 'react';
import './Filters.css';

export default function Filters(props) {
    const filters = props.filters.map((filter) =>
        <p className="Filter">{filter}</p>
    );

    return (
        <div className="Filters">
            {filters}
        </div>
    );
}