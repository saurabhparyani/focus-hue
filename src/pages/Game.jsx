import { AppBar } from "../components/AppBar";
import { BottomBar } from "../components/BottomBar";

export const Game = () => {
    return (
        <div className="bg-cover h-screen" style={{ backgroundImage: 'url(images/pexels-fwstudio-172276.jpg)' }}>
            <AppBar />
            <BottomBar />
        </div>
    );
}