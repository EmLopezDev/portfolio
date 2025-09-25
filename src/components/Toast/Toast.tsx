import { type JSX } from "react";
import { Icon } from "../Icon/Icon";
import IconButton from "../Icon/IconButton";
import type { ShowToastType } from "./useToast";

export type Status = "success" | "failure" | "warning";

type ToastOptionsType = {
    [key: string]: {
        icon: JSX.Element;
        status: Status;
        message: string;
    };
};

type ToastType = {
    toast: ShowToastType;
    handleCloseToast: () => void;
};

function Toast({ toast, handleCloseToast }: ToastType) {
    const toastOptions: ToastOptionsType = {
        success: {
            icon: (
                <Icon
                    name="circleCheckFilled"
                    color="green"
                    size={26}
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
                    size={26}
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
                    size={26}
                />
            ),
            status: "warning",
            message: "Warning message goes here.",
        },
    };

    const toastOption = toast.type && toastOptions[toast.type];

    return (
        <dialog
            className={`toast__container ${
                toastOption?.status ? toastOption.status : ""
            }`}
            open
        >
            {toastOption && (
                <>
                    <IconButton
                        className="toast__container--close"
                        iconName="close"
                        iconSize={24}
                        onClick={handleCloseToast}
                    />
                    <div className="toast">
                        <div className="toast__header">
                            {toastOption?.icon}
                            <span className="toast__header--status">
                                {toastOption.status}
                            </span>
                        </div>
                        <div className="toast__message">
                            {toastOption?.message}
                        </div>
                    </div>
                </>
            )}
        </dialog>
    );
}

export default Toast;
