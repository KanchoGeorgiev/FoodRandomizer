import { createContext, useState } from "react";

const ModalContext = createContext({
    modalState: {},
    openModal: (type, randomizeState) => {},
    closeModal: () => {},
});

export const ModalContextProvider = ({ children }) => {
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
        <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
