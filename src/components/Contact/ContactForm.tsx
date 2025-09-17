import { useEffect, useState } from "react";
import { stopPropagation } from "../../lib/functions";
import IconButton from "../Icon/IconButton";

type ContactFormType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactForm({ isOpen, setIsOpen }: ContactFormType) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowOverlay(true);
        setTimeout(() => {
            setShowForm(true);
        }, 150);
    };

    const hideForm = () => {
        setShowForm(false);
        setTimeout(() => {
            setShowOverlay(false);
            setIsOpen(false);
        }, 250);
    };

    useEffect(() => {
        if (isOpen) {
            openForm();
        } else {
            hideForm();
        }
    }, [isOpen]);

    return (
        <aside
            className={`contact__overlay ${showOverlay ? "show" : ""}`}
            onClick={hideForm}
        >
            <div
                className={`contact__form ${showForm ? "open" : ""}`}
                onClick={stopPropagation}
            >
                <IconButton
                    className="contact__form--close"
                    iconName="close"
                    iconSize={28}
                    onClick={hideForm}
                />
            </div>
        </aside>
    );
}

export default ContactForm;
