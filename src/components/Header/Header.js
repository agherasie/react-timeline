import React from 'react';
import './Header.css';
import Filters from '../Filters.js'
import DateRange from './DateRange.js';

const filters = ["All", "Assassins", "Templars", "Ezio", "Al Mualim", "Births", "Deaths", "Auditore", "Altair"];

export default function Header(props) {

    return (
        <header className="App-header">
          <div className="Header-section">
            <Filters filters={filters} currentFilters={props.currentFilters} setCurrentFilters={props.setCurrentFilters} />
          </div>
          <DateRange dateRange={props.dateRange} setDateRange={props.setDateRange} />
        </header>
    );
}