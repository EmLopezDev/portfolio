import { useEffect, useState, useRef } from "react";
import { stopPropagation } from "../../lib/functions";
import emailjs from "@emailjs/browser";
import IconButton from "../Icon/IconButton";

type ContactFormType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactForm({ isOpen, setIsOpen }: ContactFormType) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [nameValue, setNameValue] = useState<string | null>(null);
    const [emailValue, setEmailValue] = useState<string | null>(null);
    const [subjectValue, setSubjectValue] = useState<string | null>(null);
    const [messageValue, setMessageValue] = useState<string | null>(null);

    const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    const formRef: React.Ref<HTMLFormElement> | null = useRef(null);

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

    const sendEmail = async () => {
        if (formRef.current) {
            try {
                const email = await emailjs.sendForm(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    formRef.current,
                    PUBLIC_KEY
                );
                console.log(email.status);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value);
    };

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };

    const onSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectValue(e.target.value);
    };

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageValue(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendEmail();
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
                    ref={formRef}
                    className="contact__form"
                    action=""
                    onSubmit={onSubmit}
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
                            name="name"
                            onChange={onNameChange}
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
                            name="email"
                            placeholder=""
                            onChange={onEmailChange}
                        />
                    </label>
                    <label
                        className="contact__form--label"
                        htmlFor="subject"
                    >
                        Subject
                        <input
                            id="subject"
                            className="contact__form--input"
                            type="text"
                            name="subject"
                            placeholder=""
                            onChange={onSubjectChange}
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
                            name="message"
                            onChange={onMessageChange}
                        ></textarea>
                    </label>
                    <button className="contact__form--submit">SUBMIT</button>
                </form>
            </div>
        </aside>
    );
}

export default ContactForm;
