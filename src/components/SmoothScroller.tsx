import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { cancelFrame, frame } from "framer-motion";

interface SmoothScrollerProps {
    children: ReactNode;
}

const SmoothScroller = ({ children }: SmoothScrollerProps) => {
    useEffect(() => {
        // Disable Lenis on touch devices for better UX
        const isTouchDevice =
            "ontouchstart" in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) return;

        const lenis = new Lenis({
            lerp: 0.08,
            duration: 1.2,
            smoothWheel: true,
        });

        function update(data: { timestamp: number }) {
            lenis.raf(data.timestamp);
        }

        // Sync Lenis with Framer Motion
        frame.update(update, true);

        return () => {
            cancelFrame(update);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroller;
