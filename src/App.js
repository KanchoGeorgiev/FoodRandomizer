import FoodList from "./components/FoodList";
import Header from "./components/Header";
import AddMeal from "./components/modals/AddMeal";
import { useState } from "react";
const App = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [type, setType] = useState(0);
    const openModalHandler = (type) => {
        setModalIsOpen(true);
        setType(type);
    };
    const closeModalHandler = () => {
        setModalIsOpen(false);
    };
    return (
        <div>
            <Header openModal={openModalHandler} />
            {modalIsOpen && (
                <AddMeal closeModal={closeModalHandler} type={type} />
            )}
            <FoodList />
        </div>
    );
};

export default App;
