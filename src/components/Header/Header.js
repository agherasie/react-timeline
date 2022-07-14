// import yticon from './yt-icon.png';
import React from 'react';
import './Header.css';
import Filters from '../Filters.js'
import DateRange from './DateRange.js';

const filters = ["All", "French", "British", "US", "Celebrity", "Gaming", "Disstracks", "GradeAUnderA", "Boxing", "Influencers"];

export default function Header(props) {

    return (
        <header className="App-header">
          <div className="Header-section">
            {/* <img src={yticon} className="yt-icon"></img> */}
            <DateRange dateRange={props.dateRange} setDateRange={props.setDateRange} />
            <input type="text" placeholder="Search"/>
          </div>
          <div className="Header-section">
            <Filters filters={filters}/>
          </div>
        </header>
    );
}