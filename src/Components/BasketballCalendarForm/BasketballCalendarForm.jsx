import React, { useState } from 'react';
import './BasketballCalendarForm.css';

export default function BasketballCalendarForm({ createItem }) {
    const [date, setDate] = useState('');  // '2023-07-21'
    const [location, setLocation] = useState('');
    const [home, setHome] = useState('');
    const [guest, setGuest] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        createItem(date, location, home, guest);
        setLocation('');
        setHome('');
        setGuest('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="date">Date</label>
                <input 
                    type="date" 
                    id="date" 
                    required 
                    value={date}
                    onChange={event => setDate(event.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    id="location" 
                    required 
                    value={location}
                    onChange={event => setLocation(event.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="home">Home</label>
                <input 
                    type="text" 
                    id="home" 
                    required
                    value={home}
                    onChange={event => setHome(event.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="guest">Guest</label>
                <input 
                    type="text" 
                    id="guest" 
                    required 
                    value={guest}
                    onChange={event => setGuest(event.target.value)} />
            </div>
            <div className="form-row">
                <button type="submit">Add</button>
            </div>
        </form>
    );
}
