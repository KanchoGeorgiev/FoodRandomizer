import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalContextProvider } from "./context/modalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ModalContextProvider>
        <App />
    </ModalContextProvider>
);
