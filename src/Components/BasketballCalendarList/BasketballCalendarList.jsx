import React from 'react';
import BasketballCalendarItem from './BasketballCalendarItem';
import './BasketballCalendarList.css';

export default function BasketballCalendarList({ items }) {

    let ItemListJsx = items.map( item => 
        <BasketballCalendarItem 
            key={item.createdAt}
            location={item.location}
            team1={item.team1}
            team2={item.team2}
            date={item.date}
            winner={item.winner} />
    );

    return (
        <div className="calendar-table-container">
            <table className="calendar-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Home</th>
                        <th>Guest</th>
                        <th>Winner</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { ItemListJsx }
                </tbody>
            </table>
        </div>
    );
}
