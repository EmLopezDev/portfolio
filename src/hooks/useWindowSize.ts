import { useState, useEffect } from "react";

function useWindowSize() {
    const [isMobile, setIsMobile] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        function windowSize() {
            const windowWidth = window.innerWidth;
            if (windowWidth > 850) {
                setIsDesktop(true);
                setIsMobile(false);
            } else {
                setIsMobile(true);
                setIsDesktop(false);
            }
        }

        windowSize();

        window.addEventListener("resize", windowSize);

        return () => window.removeEventListener("resize", windowSize);
    }, []);

    return { isMobile, isDesktop };
}

export default useWindowSize;
