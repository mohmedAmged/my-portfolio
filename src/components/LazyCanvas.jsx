import React, { useRef, useState, useEffect } from "react";
const LazyCanvas = ({ children, rootMargin = "200px" }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref} className="w-full h-full">
            {isVisible ? children : (
                <div className="w-full h-[500px] flex justify-center items-center text-white text-sm">
                    Loading scene when visible...
                </div>
            )}
        </div>
    );
};

export default LazyCanvas;
