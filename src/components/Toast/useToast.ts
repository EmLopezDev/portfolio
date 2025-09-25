import { useEffect, useState } from "react";
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

    useEffect(() => {
        if (showToast.show) {
            setTimeout(() => {
                onCloseToast();
            }, 3000);
        }
    }, [showToast]);

    return { onCloseToast, showToast, setShowToast };
}
