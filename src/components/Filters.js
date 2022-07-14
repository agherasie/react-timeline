import React from 'react';
import './Filters.css';

export default function Filters(props) {

    function filterGetState(filter) {
        if (props.currentFilters?.includes(filter) === true) {
            return "Filter Filter--on";
        }
        return "Filter";
    }

    const filters = props.filters.map((filter) =>
        <p onClick={() => props.setCurrentFilters([filter])} className={filterGetState(filter)}>{filter}</p>
    );

    return (
        <div className="Filters">
            {filters}
        </div>
    );
}