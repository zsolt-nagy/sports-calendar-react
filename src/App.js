import "./App.css";
import React, { useState } from "react";
import BasketballCalendarForm from "./Components/BasketballCalendarForm/BasketballCalendarForm";
import BasketballCalendarList from "./Components/BasketballCalendarList/BasketballCalendarList";

function App() {
    const [items, setItems] = useState([
        {
            createdAt: 1689374598465,
            location: "Los Angeles",
            team1: "Lakers",
            team2: "Pistons",
            date: "2023-08-11",
            winner: "Lakers",
        },
        {
            createdAt: 1689374598466,
            location: "Detroit",
            team1: "Pistons",
            team2: "Lakers",
            date: "2023-10-12",
            winner: null,
        },
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Basketball Calendar</h1>
            </header>
            <BasketballCalendarForm />
            <BasketballCalendarList items={items} />
        </div>
    );
}

export default App;
