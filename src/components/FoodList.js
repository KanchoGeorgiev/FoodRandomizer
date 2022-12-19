import React from "react";
import "./Foodlist.css";
import MealItem from "./MealItem";
import { useContext, useEffect, useState } from "react";
import FoodContext from "../context/foodContext";
import ModalContext from "../context/modalContext";

const FoodList = () => {
    const [lunchData, setLunchData] = useState([]);
    const [dinnerData, setDinnerData] = useState([]);
    const { foodData, fetchMeals } = useContext(FoodContext);
    const { openModal } = useContext(ModalContext);

    useEffect(() => {
        setLunchData(
            foodData.filter((meal) => {
                return meal.type === 0;
            })
        );
        setDinnerData(
            foodData.filter((meal) => {
                return meal.type === 1;
            })
        );
    }, [foodData]);

    useEffect(() => {
        fetchMeals();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="container">
            <div className="list">
                <h1>Lunch</h1>
                <MealItem items={lunchData} openModal={openModal} />
            </div>
            <div className="list">
                <h1>Dinner</h1>
                <MealItem items={dinnerData} openModal={openModal} />
            </div>
        </div>
    );
};

export default FoodList;
