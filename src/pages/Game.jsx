import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { BottomBar } from "../components/BottomBar";
import TextContainer from "../components/TextContainer";
import { useCountdown } from "../hooks/useCountdown";

export const Game = () => {
    const firstCountdown = useCountdown(3);
    const secondCountdown = useCountdown(45, () => alert("Game Over"), [firstCountdown], firstCountdown === 0);

    const [wordColor, setWordColor] = useState({ left: '', right: '' });
    const [textColor, setTextColor] = useState({ left: '', right: '' });
    const [answer, setAnswer] = useState(null);

    const colors = ['black', 'blue', 'red', 'yellow'];

    useEffect(() => {
        if (firstCountdown === 0) {
            setWordColor({
                left: colors[Math.floor(Math.random() * colors.length)],
                right: colors[Math.floor(Math.random() * colors.length)]
            });
            setTextColor({
                left: colors[Math.floor(Math.random() * colors.length)],
                right: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }, [firstCountdown]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (firstCountdown !== 0) return;

            if (event.key === 'ArrowRight') {
                setAnswer(wordColor.left === textColor.right ? 'correct' : 'wrong');
            } else if (event.key === 'ArrowLeft') {
                setAnswer(wordColor.left !== textColor.right ? 'correct' : 'wrong');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [firstCountdown, wordColor, textColor]);

    useEffect(() => {
        let timer;
        if (answer !== null) {
            timer = setTimeout(() => {
                setWordColor({
                    left: colors[Math.floor(Math.random() * colors.length)],
                    right: colors[Math.floor(Math.random() * colors.length)]
                });
                setTextColor({
                    left: colors[Math.floor(Math.random() * colors.length)],
                    right: colors[Math.floor(Math.random() * colors.length)]
                });
                setAnswer(null);
            }, 300);
        }

        return () => clearTimeout(timer);
    }, [answer]);

    return (
        <div className="bg-cover h-screen overflow-hidden" style={{ backgroundImage: 'url(images/pexels-fwstudio-172276.jpg)' }}>
            <AppBar secondCountdown={secondCountdown} />
            <BottomBar />
            <TextContainer wordColor={wordColor} textColor={textColor} countdown={firstCountdown} />
            {firstCountdown > 0 &&
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9) font-semibold text-4xl flex items-center justify-center rounded-full h-24 w-24">
                    {firstCountdown}
                </div>
            }

            {answer === 'correct' &&
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src="/images/correctImage.png" alt="Correct" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    {console.log("correct")}
                </div>
            }
            {answer === 'wrong' &&
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src="/images/wrongImage.png" alt="Wrong" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    {console.log("wrong")}
                </div>
            }
        </div>
    );
};
