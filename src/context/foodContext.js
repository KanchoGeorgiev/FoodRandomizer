import { createContext, useState } from "react";

const FoodContext = createContext({
    foodData: [],
    fetchMeals: () => {},
});

export const FoodContextProvider = ({ children }) => {
    const [foodData, setFoodData] = useState([]);
    const fetchMeals = async () => {
        const result = await fetch(
            "https://food-randomizer-f306e-default-rtdb.europe-west1.firebasedatabase.app/foodData.json"
        );
        if (result.ok) {
            const data = await result.json();
            const processedData = [];
            for (const key in data) {
                processedData.push({
                    id: key,
                    name: data[key].name,
                    type: data[key].type,
                });
            }
            setFoodData(processedData);
        } else {
            console.log("Could Not Fetch");
        }
    };

    return (
        <FoodContext.Provider value={{ foodData, fetchMeals }}>
            {children}
        </FoodContext.Provider>
    );
};

export default FoodContext;
