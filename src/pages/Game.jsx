import { AppBar } from "../components/AppBar";
import { BottomBar } from "../components/BottomBar";
import TextContainer from "../components/TextContainer";
import { useCountdown } from "../hooks/useCountdown";
import { useState, useEffect } from 'react';

export const Game = () => {
    const countdown = useCountdown(() => { });
    const [wordColor, setWordColor] = useState({ left: '', right: '' });
    const [textColor, setTextColor] = useState({ left: '', right: '' });

    const colors = ['black', 'blue', 'red', 'yellow'];

    useEffect(() => {
        if (countdown === 0) {
            setWordColor({
                left: colors[Math.floor(Math.random() * colors.length)],
                right: colors[Math.floor(Math.random() * colors.length)]
            });
            setTextColor({
                left: colors[Math.floor(Math.random() * colors.length)],
                right: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }, [countdown]);

    return (
        <div className="bg-cover h-screen overflow-hidden" style={{ backgroundImage: 'url(images/pexels-fwstudio-172276.jpg)' }}>
            <AppBar />
            <BottomBar />
            <TextContainer wordColor={wordColor} textColor={textColor} countdown={countdown} />
            {countdown > 0 &&
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9) font-semibold text-4xl flex items-center justify-center rounded-full h-24 w-24">
                    {countdown}
                </div>
            }
        </div>
    );
}
