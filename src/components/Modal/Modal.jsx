import { createPortal } from "react-dom";

export const Modal = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className="bg-slate-200 z-50">
            <h3>Error</h3>
        </div>,
        document.getElementById("formPanel")
    );
};
