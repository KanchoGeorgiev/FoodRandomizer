import React, { useContext } from "react";
import "./AddMeal.css";
import Modal from "./Modal";
import FoodContext from "../../context/foodContext";
import MealItem from "../MealItem";
import ModalContext from "../../context/modalContext";

const RandomizeMeal = () => {
    const { foodData } = useContext(FoodContext);
    const { modalState, closeModal } = useContext(ModalContext);
    const { type } = modalState;
    const processedData = foodData.filter((meal) => meal.type === type);
    const randomNumber = Math.floor(Math.random() * processedData.length);
    const randomMeal = processedData[randomNumber];

    return (
        <Modal>
            <div className="meal-form">
                <h1>{`Randomize ${type === 0 ? "Lunch" : "Dinner"}`}</h1>
                <MealItem items={[randomMeal]} startNumber={randomNumber} />
                <div>
                    <button>Add</button>
                    <button onClick={() => closeModal()}>Close</button>
                </div>
            </div>
        </Modal>
    );
};

export default RandomizeMeal;
