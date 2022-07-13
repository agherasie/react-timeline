import React from 'react';
import './Timeline.css';
import {events} from '../events.js';

import Filters from './Filters.js';

export default function Timeline() {
    const listEvents = events.map((events) =>
        <div className={"container-"+(events.id % 2 === 0 ? "left" : "right")}>
            <div className="event">
                <p>📅 {events.date}</p>
                <h4>{events.title}</h4>
                <Filters filters={events.filters}/>
            </div>
        </div>
    );

    return (
        <div class="timeline">
            {listEvents}
        </div>
  );
}