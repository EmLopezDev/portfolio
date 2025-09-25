import React from "react";

type ContactButtonType = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
};

function ContactButton({ setIsOpen, className = "" }: ContactButtonType) {
    return (
        <button
            className={className}
            onClick={() => setIsOpen(true)}
        >
            Contact Me
        </button>
    );
}

export default ContactButton;
