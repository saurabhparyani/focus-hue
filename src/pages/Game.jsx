import { AppBar } from "../components/AppBar";
import { BottomBar } from "../components/BottomBar";
import TextContainer from "../components/TextContainer";

export const Game = () => {
    return (
        <div className="bg-cover h-screen overflow-hidden" style={{ backgroundImage: 'url(images/pexels-fwstudio-172276.jpg)' }}>
            <AppBar />
            <BottomBar />
            <TextContainer />
        </div>
    );
}