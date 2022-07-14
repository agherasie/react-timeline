import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Timeline from './components/Timeline/Timeline.js';

function App() {
  function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    var date = yyyy + '-' + mm + '-' + dd;
    return date;
  }

  const [dateRange, setDateRange] = React.useState(["0001-01-01", getCurrentDate()]);
  const [currentFilters, setCurrentFilters] = React.useState(["All"])

  return (
    <div className="App">
      <Header
        dateRange={dateRange}
        setDateRange={setDateRange}
        currentFilters={currentFilters}
        setCurrentFilters={setCurrentFilters}
      />
      <Timeline
        dateRange={dateRange}
        currentFilters={currentFilters}
        setCurrentFilters={setCurrentFilters}
      />
    </div>
  );
}

export default App;
