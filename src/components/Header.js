import React from "react";
import "./Header.css";

const Header = ({ openModal }) => {
    return (
        <header className="header">
            <div className="name">Food Randomizer</div>
            <div className="button">
                <button>Randomize Lunch</button>
            </div>
            <div className="button">
                <button onClick={() => openModal(0)}>Add Lunch</button>
            </div>
            <div className="button">
                <button>Randomize Dinner</button>
            </div>
            <div className="button">
                <button onClick={() => openModal(1)}>Add Dinner</button>
            </div>
        </header>
    );
};

export default Header;
