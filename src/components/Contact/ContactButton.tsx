import React from "react";

type ContactButtonType = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactButton({ setIsOpen }: ContactButtonType) {
    return (
        <button
            className="contact__button"
            onClick={() => setIsOpen(true)}
        >
            Contact Me
        </button>
    );
}

export default ContactButton;
