import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FixedBackground = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="fixed inset-0 -z-50 h-screen w-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                {/* 
          Note: In a real Next.js app we would use <Image />. 
          Since this is Vite, we use <img>.
          Replace src with your actual background image path.
        */}
                <img
                    src={isMobile ? "/images/bg-mobile.jpg" : "/images/bg-desktop.jpg"}
                    alt="Background"
                    className="h-full w-full object-cover transition-opacity duration-500"
                    onError={(e) => {
                        // Fallback if image not found
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />
            </div>

            {/* Overlay for Light Mode: White/90 + mix-blend-overlay */}
            <div className="absolute inset-0 bg-white/90 mix-blend-overlay dark:hidden" />

            {/* Overlay for Dark Mode: Black/80 + mix-blend-multiply (or normal) */}
            <div className="absolute inset-0 hidden bg-black/80 mix-blend-multiply dark:block" />

            {/* Additional gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
        </div>
    );
};

export default FixedBackground;
