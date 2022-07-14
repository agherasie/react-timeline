import React from 'react';
import './DateRange.css';

export default function DateRange(props) {
    return (
        <div className="dateRange">
              <p>From</p>
              <input type="date" defaultValue={props.dateRange[0]} onChange={
                  (date) => props.setDateRange(
                      (prevDate) => ([date.target.value, prevDate[1]])
                    )
                } />
              <p>To</p>
              <input type="date" defaultValue={props.dateRange[1]} onChange={
                  (date) => props.setDateRange(
                      (prevDate) => ([prevDate[0], date.target.value])
                    )
                } />
        </div>
    )
}