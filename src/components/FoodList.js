import React from "react";
import "./Foodlist.css";
import FoodMenu from "./FoodMenu";

const FoodList = () => {
    return (
        <div className="container">
            <div className="list">
                <h1>Lunch</h1>
                <FoodMenu />
            </div>
            <div className="list">
                <h1>Dinner</h1>
                <FoodMenu />
            </div>
        </div>
    );
};

export default FoodList;
