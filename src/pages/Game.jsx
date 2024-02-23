import { AppBar } from "../components/AppBar";
import { BottomBar } from "../components/BottomBar";
import TextContainer from "../components/TextContainer";
import { useCountdown } from "../hooks/useCountdown";

export const Game = () => {
    const countdown = useCountdown(() => alert('Start the game!'));

    return (
        <div className="bg-cover h-screen overflow-hidden" style={{ backgroundImage: 'url(images/pexels-fwstudio-172276.jpg)' }}>
            <AppBar />
            <BottomBar />
            <TextContainer />
            {countdown > 0 &&
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-4xl flex items-center justify-center rounded-full h-24 w-24">
                    {countdown}
                </div>
            }
        </div>
    );
}