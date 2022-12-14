import "./Modal.css";
import { createPortal } from "react-dom";

const Backdrop = ({ onClose }) => {
    return <div className="backdrop" onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
    return <div className="overlay">{children}</div>;
};

const Modal = ({ onClose, children }) => {
    return (
        <>
            {createPortal(
                <Backdrop onClose={onClose} />,
                document.getElementById("backdrop")
            )}
            {createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                document.getElementById("overlay")
            )}
        </>
    );
};

export default Modal;
