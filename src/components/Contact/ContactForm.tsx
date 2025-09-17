import React from "react";
import { Icon } from "../Icon/Icon";

type ContactFormType = {
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactForm({ setIsFormOpen }: ContactFormType) {
    return (
        <aside
            className="contact__form"
            onClick={(e) => e.stopPropagation()}
        >
            <button
                style={{
                    backgroundColor: "none",
                    border: "none",
                    display: "flex",
                    justifyContent: "center",
                    width: "50px",
                }}
                onClick={() => setIsFormOpen(false)}
            >
                <Icon
                    name="close"
                    color="black"
                    size={32}
                />
            </button>
        </aside>
    );
}

export default ContactForm;
