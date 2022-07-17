import React from 'react';
import './Timeline.css';
import {events} from '../../events.js';

import Filters from '../Filters.js';

export default function Timeline(props) {
    function writeDate(dateString) {
        var date = new Date(dateString);

        var year = date.getFullYear();
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var day = String(date.getDate()).padStart(2, '0');

        return day + "/" + month + "/" + year;
    }

    const [allEvents, setAllEvents] = React.useState(events)

    const request = {
        url: "https://localhost/events",
        object: {
            headers: {
                'Accept': 'application/json'
            }
        }
    };

    React.useEffect(() => {
            fetch(request.url, request.object
        )
            .then(res => res.json())
            .then(data => setAllEvents(data))
    }, [request.url, request.object])

    var left = true;

    const listEvents = allEvents.sort((a, b) => new Date(a.date) - new Date(b.date)).filter(function(event) {
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
    }).map(function(event) {
        left = !left;
        return (
            <div>
                <div className={"container-"+(left ? "left" : "right")}>
                    <div className="timePoint">
                        <span>{writeDate(event.date)}</span>
                    </div>
                    <div className="event">
                        <a href={event.wiki}><h4>{event.title}</h4></a>
                        {event.url && <iframe src={event.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                        <Filters filters={event.filters} currentFilters={props.currentFilters} setCurrentFilters={props.setCurrentFilters}/>
                    </div>
                </div>
            </div>
            )
        }
    );

    return (
        <div class="timeline">
            {listEvents}
        </div>
    );
}