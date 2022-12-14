import Modal from "./Modal";
import { useState } from "react";
import "./AddMeal.css";
const AddMeal = ({ closeModal, type }) => {
    const [meal, setMeal] = useState("");
    const mealChangeHandler = (e) => {
        setMeal(e.target.value);
    };
    const submitMealHandler = (e) => {
        e.preventDefault();
        console.log(meal);
        closeModal();
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
