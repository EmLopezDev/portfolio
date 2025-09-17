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

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
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
                className={`contact ${showForm ? "open" : ""}`}
                onClick={stopPropagation}
            >
                <IconButton
                    className="contact__close"
                    iconName="close"
                    iconSize={28}
                    onClick={hideForm}
                />
                <form
                    className="contact__form"
                    action=""
                >
                    <label
                        className="contact__form--label"
                        htmlFor="name"
                    >
                        Name
                        <input
                            id="name"
                            className="contact__form--input"
                            type="text"
                        />
                    </label>
                    <label
                        className="contact__form--label"
                        htmlFor="email"
                    >
                        Email
                        <input
                            id="email"
                            className="contact__form--input"
                            type="email"
                            placeholder=""
                        />
                    </label>
                    <label
                        className="contact__form--label"
                        htmlFor="message"
                    >
                        Message
                        <textarea
                            id="message"
                            className="contact__form--input"
                        ></textarea>
                    </label>
                    <button
                        className="contact__form--submit"
                        onClick={onSubmit}
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </aside>
    );
}

export default ContactForm;
