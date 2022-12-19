import FoodList from "./components/FoodList";
import Header from "./components/Header";
import AddMeal from "./components/modals/AddMeal";
import RandomizeMeal from "./components/modals/RandomizeMeal";
import { useState } from "react";
import { FoodContextProvider } from "./context/foodContext";
const App = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        type: 0,
        randomize: false,
    });

    const openModal = (type, randomizeState) => {
        setModalState({ isOpen: true, type, randomize: randomizeState });
    };

    const closeModal = () => {
        setModalState({ isOpen: false, type: 0, randomize: false });
    };
    return (
        <FoodContextProvider>
            <Header openModal={openModal} />
            {modalState.isOpen && !modalState.randomize && (
                <AddMeal closeModal={closeModal} type={modalState.type} />
            )}
            {modalState.isOpen && modalState.randomize && (
                <RandomizeMeal closeModal={closeModal} type={modalState.type} />
            )}
            <FoodList />
        </FoodContextProvider>
    );
};

export default App;
