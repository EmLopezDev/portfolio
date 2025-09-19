import React, { useEffect, useState, useRef } from "react";
import { stopPropagation } from "../../lib/event.utils";
import emailjs from "@emailjs/browser";
import IconButton from "../Icon/IconButton";
import Loader from "../Loader/Loader";
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

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [subjectValue, setSubjectValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");

    const [isSending, setIsSending] = useState(false);

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

    const isNameValid = nameCheck(nameValue);
    const isEmailValid = emailCheck(emailValue);

    const showNameErrors = () => {
        if (!nameValue) {
            setNameError("Missing Name");
        } else if (!isNameValid) {
            setNameError("Invalid Name");
        } else {
            setNameError("");
        }
    };

    const showEmailErrors = () => {
        if (!emailValue) {
            setEmailError("Missing Email");
        } else if (!isEmailValid) {
            setEmailError("Invalid Email");
        } else {
            setEmailError("");
        }
    };

    const showSubjectErrors = () => {
        if (!subjectValue) {
            setSubjectError("Missing Subject");
        } else {
            setSubjectError("");
        }
    };

    const showMessageErrors = () => {
        if (!messageValue) {
            setMessageError("Missing Message");
        } else {
            setMessageError("");
        }
    };

    const showErrors = () => {
        showNameErrors();
        showEmailErrors();
        showSubjectErrors();
        showMessageErrors();
    };

    const formValidation = () => {
        if (isNameValid && isEmailValid && subjectValue && messageValue) {
            return true;
        }
        showErrors();
        return false;
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

    const sendEmail = async () => {
        if (formRef.current) {
            setIsSending(true);
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
            } finally {
                setIsSending(false);
            }
        }
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formValidation()) {
            sendEmail();
        }
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
                    noValidate
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
                        <span>{nameError}</span>
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
                        <span>{emailError}</span>
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
                        <span>{subjectError}</span>
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
                        <span>{messageError}</span>
                    </label>
                    <button className="contact__form--submit">
                        {isSending ? <Loader size="small" /> : "Submit"}
                    </button>
                </form>
            </div>
        </aside>
    );
}

export default ContactForm;
