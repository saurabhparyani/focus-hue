import { useEffect, useState } from "react";

export const useCountdown = (seconds, callback, deps = [], startCondition = true) => {
    const [countdown, setCountdown] = useState(seconds);

    useEffect(() => {
        if (!startCondition) return;

        const intervalId = setInterval(() => {
            setCountdown((countdown) => {
                if (countdown === 1) {
                    clearInterval(intervalId);
                    if (callback) callback();
                }
                return countdown - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, deps);

    return countdown;
};