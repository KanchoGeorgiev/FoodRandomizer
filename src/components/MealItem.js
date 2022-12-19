import React from "react";
import "./MealItem.css";

const MealItem = ({ items, startNumber, openModal }) => {
    return (
        <div className="food-list">
            {!items && <div>No Items</div>}
            {items && (
                <ol style={{"counterSet":`li-counter ${startNumber}`}}>
                    {items.map((item) => {
                        return <li onClick={()=>openModal(item.type)} key={item.id}>{item.name}</li>;
                    })}
                </ol>
            )}
        </div>
    );
};

export default MealItem;
