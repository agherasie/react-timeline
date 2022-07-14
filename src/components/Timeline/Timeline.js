import React from 'react';
import './Timeline.css';
import {events} from '../../events.js';

import Filters from '../Filters.js';

export default function Timeline(props) {
    const listEvents = events.filter(function(event) {
        if (new Date(event.date) < new Date(props.dateRange[0])
        || new Date(event.date) > new Date(props.dateRange[1])) {
            return false;
        }
        var filterInArray = false;

        if (props.currentFilters?.includes("All")) {
            return true;
        }

        event.filters.forEach((filter) => {
            if (props.currentFilters?.includes(filter) === true) {
                filterInArray = true;
                return;
            }
        });
        if (!filterInArray) {
            return false;
        }
        return true;
    }).map((event) =>
        <div className={"container-"+(event.id % 2 === 0 ? "left" : "right")}>
            <div className="event">
                <p>📅 {event.date}</p>
                <h4>{event.title}</h4>
                <Filters filters={event.filters} currentFilters={props.currentFilters} setCurrentFilters={props.setCurrentFilters}/>
            </div>
        </div>
    );

    return (
        <div class="timeline">
            {listEvents}
        </div>
    );
}