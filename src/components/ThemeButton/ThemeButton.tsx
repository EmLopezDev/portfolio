import { useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";

function ThemeButton() {
    const [checked, setChecked] = useState<boolean>(false);

    const darkmode: string | null = localStorage.getItem("darkmode");
    const bodyTag: HTMLBodyElement = document.getElementsByTagName("body")[0];

    const enableDarkmode = () => {
        setChecked(true);
        bodyTag.classList.add("darkmode");
        localStorage.setItem("darkmode", "active");
    };

    const disableDarkmode = () => {
        setChecked(false);
        bodyTag.classList.remove("darkmode");
        localStorage.setItem("darkmode", "");
    };

    const setTheme = () => {
        darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    };

    useEffect(() => {
        if (darkmode === "active") enableDarkmode();
    }, []);

    return (
        <div className="theme">
            <Icon
                className="theme__sun"
                name="sun"
            />
            <input
                id="theme"
                className="theme__input"
                type="checkbox"
                aria-label="theme"
                checked={checked}
                onChange={() => setTheme()}
            />
            <Icon
                className="theme__moon"
                name="mooncrescent"
            />
        </div>
    );
}

export default ThemeButton;
