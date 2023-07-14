import "./App.css";
import React, { useState } from "react";
import BasketballCalendarForm from "./Components/BasketballCalendarForm/BasketballCalendarForm";
import BasketballCalendarList from "./Components/BasketballCalendarList/BasketballCalendarList";

function App() {
    const [items, setItems] = useState([
        {
            id: 1689374598465,
            location: "Los Angeles",
            team1: "Lakers",
            team2: "Pistons",
            date: "2023-08-11",
            winner: "Lakers",
        },
        {
            id: 1689374598466,
            location: "Detroit",
            team1: "Pistons",
            team2: "Lakers",
            date: "2023-10-12",
            winner: null,
        },
    ]);

    function updateWinner(id, newWinnerValue) {
        let result = [];
        let newItems = structuredClone(items); // deep clone
        for (let item of newItems) {
            if (item.id === id) {
                item.winner = newWinnerValue;
            }
            result.push(item);
        }
        setItems(result);
    }

    function deleteItem(id) {
        let result = []; // shallow clone (because we don't dig into the object fields)
        for (let item of items) {
            if (item.id !== id) {
                result.push(item);
            }
        }
        setItems(result);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Basketball Calendar</h1>
            </header>
            <BasketballCalendarForm />
            <BasketballCalendarList items={items} updateWinner={updateWinner} deleteItem={deleteItem} />
        </div>
    );
}

export default App;
