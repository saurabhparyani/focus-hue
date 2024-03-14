import React from 'react';

const TextContainer = ({ wordColor, textColor, countdown }) => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-center text-3xl my-16 text-slate-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]">
                Does the meaning match the text color?
            </div>
            <div className="flex justify-center items-center relative">
                <div className="flex flex-col relative">
                    <div className="bg-white h-60 w-96 rounded-xl shadow-2xl p-4 m-5 relative flex items-center justify-center">
                        {countdown === 0 && <p className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9) text-7xl font-bold" style={{ color: textColor.left }}>{wordColor.left}</p>}
                    </div>

                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-800 px-2 py-1 rounded-md shadow-md opacity-80">
                        <div className="relative">
                            <div className="absolute w-6 h-6 bg-gray-200 border-t-4 border-l-4 border-r-4 border-gray-200 -top-3 left-1/2 transform -translate-x-1/2 rotate-45"></div>
                            <div className="pt-2 font-semibold">meaning</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col relative">
                    <div className="bg-white h-60 w-96 rounded-xl shadow-2xl p-4 m-5 relative flex items-center justify-center">
                        {countdown === 0 && <p className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9) text-7xl font-bold" style={{ color: textColor.right }}>{wordColor.right}</p>}
                    </div>

                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-800 px-2 py-1 rounded-md shadow-md opacity-80">
                        <div className="relative">
                            <div className="absolute w-6 h-6 bg-gray-200 border-t-4 border-l-4 border-r-4 border-gray-200 -top-3 left-1/2 transform -translate-x-1/2 rotate-45"></div>
                            <div className="pt-2 font-semibold">text color</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextContainer;