import React from "react";

type LoaderType = {
    text?: string;
    type?: "spinning" | "dots";
    size?: "small" | "medium" | "large";
    className?: string;
};

function Loader({
    text,
    type = "spinning",
    className = "",
    size = "medium",
}: LoaderType) {
    return (
        <div className={`loader__container ${className}`}>
            {text && (
                <div className={`loader__container--text ${size}`}>{text}</div>
            )}
            <div className="loader">
                {type === "spinning" ? (
                    <div className={`loader__spinning ${size}`}></div>
                ) : (
                    <>
                        <div className={`loader__dot ${size}`}></div>
                        <div className={`loader__dot ${size}`}></div>
                        <div className={`loader__dot ${size}`}></div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Loader;
