import FoodList from "./components/FoodList";
import Header from "./components/Header";
import AddMeal from "./components/modals/AddMeal";
import RandomizeMeal from "./components/modals/RandomizeMeal";
import { useContext } from "react";
import ModalContext from "./context/modalContext";
import { FoodContextProvider } from "./context/foodContext";
const App = () => {
    const { modalState } = useContext(ModalContext);
    return (
        <FoodContextProvider>
            <Header />
            {modalState.isOpen && !modalState.randomize && <AddMeal />}
            {modalState.isOpen && modalState.randomize && <RandomizeMeal />}
            <FoodList />
        </FoodContextProvider>
    );
};

export default App;
