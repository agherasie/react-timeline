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
        return true;
    }).map((event) =>
        <div className={"container-"+(event.id % 2 === 0 ? "left" : "right")}>
            <div className="event">
                <p>📅 {event.date}</p>
                <h4>{event.title}</h4>
                <Filters filters={event.filters}/>
            </div>
        </div>
    );

    return (
        <div class="timeline">
            {listEvents}
        </div>
    );
}