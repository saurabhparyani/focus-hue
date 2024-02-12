export const Home = () => {
    return (
        <div className="bg-cover flex justify-center h-screen" style={{ backgroundImage: 'url(images/pexels-fwstudio-172276.jpg)' }}>
            <div className="flex flex-col justify-center">
                <div className="text-center text-slate-200 text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> Focus Hue </div>
                <div className="text-slate-50 italic text-center text-3xl pt-7 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> A cognitive flexibility game that tests your</div>
                <div className="text-slate-50 italic text-center text-3xl pt-2 pb-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> response inhibition ability </div>
                <div className="flex flex-col">

                    <div className="border-2 border-slate-200 rounded-lg w-max h-max flex flex-col text-center justify-center">
                        <div className="text-slate-100 text-xl pt-1 pb-3 font-medium underline decoration-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> Rules</div>
                        <div className="flex flex-row">
                            <div className="text-slate-100 text-center text-xl pl-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> If the </div>
                            <div className="text-slate-100 px-1.5 underline underline-offset-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> meaning </div>
                            <div className="text-slate-100 text-center  text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> of the </div>
                            <div className="text-slate-100 text-center  px-1.5 underline underline-offset-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> color </div>
                            <div className="text-slate-100 text-center  text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> in the </div>
                            <div className="text-slate-100 text-center  px-1.5 underline underline-offset-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> left box </div>
                            <div className="text-slate-100 text-center  pr-4 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> is same as </div>
                        </div>
                        <div className="flex flex-row pl-6">
                            <div className="text-slate-100 text-center  text-xl pl-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> the </div>
                            <div className="text-slate-100 text-center  px-1.5 underline underline-offset-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> color </div>
                            <div className="text-slate-100 text-center  text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> of the </div>
                            <div className="text-slate-100 text-center  px-1.5 underline underline-offset-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> text </div>
                            <div className="text-slate-100 text-center  text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> in the </div>
                            <div className="text-slate-100 text-center  px-1.5 underline underline-offset-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> right box </div>
                            <div className="text-slate-100 text-center  pr-4 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]"> then hit the </div>
                        </div>
                        <div className="text-slate-100 text-center px-1.5 underline underline-offset-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]" > Right Arrow Key </div>
                        <div className="text-slate-100 text-center px-1.5  text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]" > Otherwise, hit the </div>
                        <div className="text-slate-100 text-center pb-4 px-1.5 underline underline-offset-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]" > Left Arrow Key </div>
                    </div>

                    <div className="pt-10 flex justify-center">
                        <div className="mr-14">
                            <button type="button" className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9) bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-semibold rounded-full text-2xl px-9 py-3 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Play!</button>
                        </div>
                    </div>
                </div>
            </div>
            <img src="images\imageedit_8_7147552842.png" className="float-right pt-36 h-fit" style={{ width: '600px' }}></img>
        </div>
    );
}
