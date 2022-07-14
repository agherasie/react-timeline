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

  const [dateRange, setDateRange] = React.useState(["2005-02-14", getCurrentDate()]);

  return (
    <div className="App">
      <Header dateRange={dateRange} setDateRange={setDateRange} />
      <Timeline dateRange={dateRange}/>
    </div>
  );
}

export default App;
