import Modal from "./Modal";
import { useState, useContext } from "react";
import FoodContext from "../../context/foodContext";
import "./AddMeal.css";
import ModalContext from "../../context/modalContext";

const AddMeal = () => {
    const [meal, setMeal] = useState("");
    const { fetchMeals } = useContext(FoodContext);
    const { modalState, closeModal } = useContext(ModalContext);
    const { type } = modalState;
    const mealChangeHandler = (e) => {
        setMeal(e.target.value);
    };
    const submitMealHandler = async (e) => {
        e.preventDefault();
        if (meal.length > 0) {
            const mealData = {
                name: meal,
                type,
            };
            const response = await fetch(
                "https://food-randomizer-f306e-default-rtdb.europe-west1.firebasedatabase.app/foodData.json",
                {
                    method: "POST",
                    body: JSON.stringify(mealData),
                    headers: {
                        "Content-Type": "aplicatin/json",
                    },
                }
            );
            if (response.ok) {
                console.log("Succsess");
            } else {
                console.log("Could Not Post");
            }
            fetchMeals();
            closeModal();
        } else {
            alert("Need to Add Data");
        }
    };
    return (
        <Modal>
            <form onSubmit={submitMealHandler} className="meal-form">
                <h1>{type === 0 ? "Lunch" : "Dinner"}</h1>
                <input
                    type="text"
                    onChange={mealChangeHandler}
                    placeholder={type === 0 ? "Add lunch" : "Add dinner"}
                />
                <div>
                    <button>Sumbit</button>
                    <button type="button" onClick={closeModal}>
                        Close
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddMeal;
