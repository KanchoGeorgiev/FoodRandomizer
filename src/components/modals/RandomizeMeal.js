import React, { useContext } from "react";
import Modal from "./Modal";
import FoodContext from "../../context/foodContext";

const RandomizeMeal = ({ closeModal, type }) => {
    const {foodData} = useContext(FoodContext);
    const processedData = foodData.filter((meal) => meal.type === type);
    const randomMeal =
        processedData[Math.floor(Math.random() * processedData.length)];
    return (
        <Modal>
            <div>{`Randomize ${type === 0 ? "Lunch" : "Dinner"}`}</div>
            <div>{randomMeal.name}</div>
            <button onClick={() => closeModal()}>Close</button>
        </Modal>
    );
};

export default RandomizeMeal;
