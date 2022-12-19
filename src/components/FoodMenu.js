import React from "react";
import "./FoodMenu.css";

const FoodMenu = ({ items }) => {
    return (
        <div className="food-list">
            {!items && <div>No Items</div>}
            {items && (
                <ol>
                    {" "}
                    {items.map((item) => {
                        return <li key={item.id}>{item.name}</li>;
                    })}
                </ol>
            )}
        </div>
    );
};

export default FoodMenu;
