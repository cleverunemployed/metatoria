import { createPortal } from "react-dom";

export const Modal = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className="bg-red-500 fixed z-50 flex w-full justify-center">
            <div className="">
                <h3>Error</h3>
            </div>
        </div>,
        document.getElementById("formPanel")
    );
};
