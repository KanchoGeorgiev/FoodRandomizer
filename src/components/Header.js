import React, { useContext } from "react";
import "./Header.css";
import ModalContext from "../context/modalContext";

const Header = () => {
    const { openModal } = useContext(ModalContext);
    return (
        <header className="header">
            <div className="name">Food Randomizer</div>
            <div className="button">
                <button onClick={() => openModal(0, true)}>
                    Randomize Lunch
                </button>
            </div>
            <div className="button">
                <button onClick={() => openModal(0, false)}>Add Lunch</button>
            </div>
            <div className="button">
                <button onClick={() => openModal(1, true)}>
                    Randomize Dinner
                </button>
            </div>
            <div className="button">
                <button onClick={() => openModal(1, false)}>Add Dinner</button>
            </div>
        </header>
    );
};

export default Header;
