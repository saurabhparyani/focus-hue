import { useEffect, useState } from "react";

export const useCountdown = (fn) => {
    const [timeLeft, setTimeLeft] = useState(3);

    useEffect(() => {
        if (timeLeft === 0) {
            fn();
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                const newTimeLeft = prevTimeLeft - 1;
                if (newTimeLeft === 0) {
                    clearInterval(interval);
                    fn();
                }
                return newTimeLeft;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    return timeLeft;
};
