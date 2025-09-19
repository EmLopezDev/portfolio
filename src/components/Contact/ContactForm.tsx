import { useEffect, useState, useRef } from "react";
import { stopPropagation } from "../../lib/event.utils";
import emailjs from "@emailjs/browser";
import IconButton from "../Icon/IconButton";
import type { ShowToastType } from "../Toast/useToast";
import { emailCheck, nameCheck } from "../../lib/string.utils";

type ContactFormType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleShowToast: React.Dispatch<React.SetStateAction<ShowToastType>>;
};

function ContactForm({ isOpen, setIsOpen, handleShowToast }: ContactFormType) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [nameValue, setNameValue] = useState<string>("");
    const [emailValue, setEmailValue] = useState<string>("");
    const [subjectValue, setSubjectValue] = useState<string>("");
    const [messageValue, setMessageValue] = useState<string>("");

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
                if (email.status === 200) {
                    handleShowToast({ show: true, type: "success" });
                    formRef.current.reset();
                    hideForm();
                }
            } catch (error) {
                handleShowToast({ show: true, type: "failure" });
                console.error(error);
            }
        }
    };

    const formValidation = () => {
        const isNameValid = nameCheck(nameValue);
        console.log(isNameValid);
    };

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value.trim());
    };

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value.trim());
    };

    const onSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectValue(e.target.value.trim());
    };

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageValue(e.target.value.trim());
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        formValidation();
        // sendEmail();
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
                            placeholder="example@gmail.com"
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
                            className="contact__form--text-area"
                            name="message"
                            onChange={onMessageChange}
                            placeholder="Please write a brief message as to what you would like us to chat about"
                        ></textarea>
                    </label>
                    <button className="contact__form--submit">SUBMIT</button>
                </form>
            </div>
        </aside>
    );
}

export default ContactForm;
