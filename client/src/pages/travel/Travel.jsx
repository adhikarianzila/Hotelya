import React, { useState } from 'react';
import './travel.css';

const Travel = () => {
    const [destination, setDestination] = useState('');
    const [accommodation, setAccommodation] = useState('');
    const [transportation, setTransportation] = useState('');
    const [food, setFood] = useState('');
    const [days, setDays] = useState('');
    const [guide, setGuide] = useState(false);
    const [trekking, setTrekking] = useState(false);
    const [totalBudget, setTotalBudget] = useState(0);

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleAccommodationChange = (event) => {
        setAccommodation(event.target.value);
    };

    const handleTransportationChange = (event) => {
        setTransportation(event.target.value);
    };

    const handleFoodChange = (event) => {
        setFood(event.target.value);
    };

    const handleDaysChange = (event) => {
        setDays(event.target.value);
    };

    const handleGuideChange = (event) => {
        setGuide(event.target.checked);
    };

    const handleTrekkingChange = (event) => {
        setTrekking(event.target.checked);
    };

    const calculateBudget = () => {
        let budget = 0;
        if (destination === 'Pokhara') {
            budget += 1000;
        } else if (destination === 'Kathmandu') {
            budget += 800;
        } else if (destination === 'Chiitwan') {
            budget += 1500;
        }
        if (accommodation === '5-star hotel') {
            budget += 500;
        } else if (accommodation === '3-star hotel') {
            budget += 300;
        } else if (accommodation === 'guesthouse') {
            budget += 100;
        }
        if (transportation === 'rental car') {
            budget += 100;
        } else if (transportation === 'taxi') {
            budget += 50;
        } else if (transportation === 'public transport') {
            budget += 20;
        }
        if (food === 'restaurant meals') {
            budget += 50;
        } else if (food === 'street food') {
            budget += 20;
        } else if (food === 'grocery shopping') {
            budget += 10;
        }
        if (guide) {
            budget += 200;
        }
        if (trekking) {
            budget += 300;
        }
        budget *= days;
        setTotalBudget(budget);
    };

    return (
        <div className="travel-planner">
            <h1>Travel Planner</h1>
            <div>
                <label htmlFor="destination">Destination:</label>
                <select id="destination" value={destination} onChange={handleDestinationChange}>
                    <option value="">Please select</option>
                    <option value="Pokhara">Pokhara</option>
                    <option value="Kathmandu">Kathmandu</option>
                    <option value="Chitwan">Chitwan</option>
                </select>
            </div>
            <div>
                <label htmlFor="days">Number of days:</label>
                <input type="number" id="days" value={days} onChange={handleDaysChange} min="1" />
            </div>
            <div>
                <label htmlFor="accommodation">Accommodation:</label>
                <select id="accommodation" value={accommodation} onChange={handleAccommodationChange}>
                    <option value="">Please select</option>
                    <option value="5-star hotel">5-star hotel</option>
                    <option value="3-star hotel">3-star hotel</option>
                    <option value="guesthouse">Guesthouse</option>
                </select>
            </div>
            <div>
                <label htmlFor="transportation">Transportation:</label>
                <select id="transportation" value={transportation} onChange={handleTransportationChange}>
                    <option value="">Please select</option>
                    <option value="rental car">Rental car</option>
                    <option value="taxi">Taxi</option>
                    <option value="public transport">Public transport</option>
                </select>
            </div>
            <div>
                <label htmlFor="food">Food:</label>
                <select id="food" value={food} onChange={handleFoodChange}>
                    <option value="">Please select</option>
                    <option value="restaurant meals">Restaurant meals</option>
                    <option value="street food">Street food</option>
                    <option value="grocery shopping">Grocery shopping</option>
                </select>
            </div>

            <div>
                <label htmlFor="guide">Guide required:</label>
                <input type="checkbox" id="guide" checked={guide} onChange={handleGuideChange} />
            </div>
            <div>
                <label htmlFor="trekking">Trekking:</label>
                <input type="checkbox" id="trekking" checked={trekking} onChange={handleTrekkingChange} />
            </div>
            <div className="calculate-budget">
                <button onClick={calculateBudget}>Calculate Budget</button>
                <div>Total Budget: {totalBudget}$</div>
            </div>
        </div>
    );
};
export default Travel;



