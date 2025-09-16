import React from "react";

type ContactButtonType = {
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactButton({ setIsFormOpen }: ContactButtonType) {
    return (
        <button
            className="contact__button"
            onClick={() => setIsFormOpen(true)}
        >
            Contact Me
        </button>
    );
}

export default ContactButton;
