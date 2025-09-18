import { useEffect, useState } from "react";
import { type Status } from "./Toast";

export function useToast() {
    const [showToast, setShowToast] = useState<Status | null>("warning");

    const onCloseToast = () => {
        setShowToast(null);
    };

    useEffect(() => {
        setShowToast(showToast);
    }, [showToast]);

    return { onCloseToast, showToast };
}
