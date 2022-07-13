// import yticon from './yt-icon.png';
import React from 'react';
import './Header.css';

const numbers = ["All", "French", "British", "US", "Celebrity", "Gaming", "Disstracks", "GradeAUnderA", "Boxing", "Influencers"];
const listItems = numbers.map((number) =>
  <p className="Filter">{number}</p>
);

export default function Header() {
    return (
        <header className="App-header">
          <div className="Header-section">
            {/* <img src={yticon} className="yt-icon"></img> */}
            <input type="text" placeholder="Search"/>
          </div>
          <div className="Header-section">
            <div className="Filters">
              {listItems}
            </div>
          </div>
        </header>
    );
}