import { useState } from "react";
import { type Status } from "./Toast";

export type ShowToastType = {
    show: boolean;
    type: Status | null;
};

export function useToast() {
    const [showToast, setShowToast] = useState<ShowToastType>({
        show: false,
        type: null,
    });

    const onCloseToast = () => {
        setShowToast({ show: false, type: null });
    };

    return { onCloseToast, showToast, setShowToast };
}
