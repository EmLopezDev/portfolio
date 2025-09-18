import { useEffect, useState, type JSX } from "react";
import { Icon } from "../Icon/Icon";
import IconButton from "../Icon/IconButton";
import { useToast } from "./useToast";

export type Status = "success" | "failure" | "warning";

type ToastOptionsType = {
    [key: string]: {
        icon: JSX.Element;
        status: Status;
        message: string;
    };
};

function Toast() {
    const [toastType, setToastType] = useState<Status | null>(null);
    const { showToast, onCloseToast } = useToast();
    const toastOptions: ToastOptionsType = {
        success: {
            icon: (
                <Icon
                    name="circleCheckFilled"
                    color="green"
                    size={24}
                />
            ),
            status: "success",
            message:
                "Message has been successfuly sent. Looking forward to talking with you soon. 😎",
        },
        failure: {
            icon: (
                <Icon
                    name="circleXFilled"
                    color="red"
                    size={24}
                />
            ),
            status: "failure",
            message: "Unable to send message. Please try again momentarily",
        },
        warning: {
            icon: (
                <Icon
                    name="circleExclamationFilled"
                    color="orange"
                    size={24}
                />
            ),
            status: "warning",
            message: "Warning message goes here.",
        },
    };

    const toastOption = showToast && toastOptions[showToast];

    useEffect(() => {
        setToastType(showToast);
    }, [showToast]);

    return (
        toastOption && (
            <dialog
                className={`toast__container ${showToast}`}
                open
            >
                <IconButton
                    className="toast__container--close"
                    iconName="close"
                    iconSize={24}
                    onClick={onCloseToast}
                />
                <div className="toast">
                    <div className="toast__header">
                        {toastOption.icon}
                        <span className="toast__header--status">
                            {toastOption.status}
                        </span>
                    </div>
                    <div className="toast__message">{toastOption.message}</div>
                </div>
            </dialog>
        )
    );
}

export default Toast;
