import React from "react";
import "./Foodlist.css";
import FoodMenu from "./FoodMenu";
import { useContext, useEffect, useState } from "react";
import FoodContext from "../context/foodContext";

const FoodList = () => {
    const [lunchData, setLunchData] = useState([]);
    const [dinnerData, setDinnerData] = useState([]);
    const { foodData, fetchMeals } = useContext(FoodContext);

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
                <FoodMenu items={lunchData} />
            </div>
            <div className="list">
                <h1>Dinner</h1>
                <FoodMenu items={dinnerData} />
            </div>
        </div>
    );
};

export default FoodList;
