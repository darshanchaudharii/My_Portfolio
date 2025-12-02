import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Cursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 15, stiffness: 1000, mass: 0.3 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Only show custom cursor on non-touch devices
        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

        if (!isTouchDevice) {
            window.addEventListener("mousemove", moveCursor);
            document.body.addEventListener("mouseenter", handleMouseEnter);
            document.body.addEventListener("mouseleave", handleMouseLeave);
            setIsVisible(true);

            // Hide default cursor
            document.documentElement.style.cursor = "none";
        }

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.documentElement.style.cursor = "auto";
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full bg-white mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        />
    );
};

export default Cursor;
