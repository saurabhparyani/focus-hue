export function AppBar() {
    return (
        <div>
            <div className="flex flex-row justify-start pl-3 pt-3">
                <button type="button" className="rounded-full bg-gray-400 p-2 mr-2 opacity-70">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>
                </button>

                <button type="button" className="rounded-full bg-gray-400 p-2 opacity-70">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                </button>
            </div>
            <div className="flex flex-row fixed left-0 top-0 z-50 justify-end h-8 me-9 ml-96">
                <div className="flex pt-1 w-36 ml-96 mr-2 bg-gray-400 opacity-70 rounded-sm shadow-md">
                    <div className="flex-grow text-left px-2 font-medium">TIME</div>
                    <div className="text-right px-2 font-medium">0:45</div>
                </div>
                <div className="flex pt-1 w-56 mr-2 bg-gray-400 opacity-70 rounded-sm shadow-md">
                    <div className="flex-grow text-left px-2 font-medium">SCORE</div>
                    <div className="text-right px-2 font-medium">0</div>
                </div>
                <div className="flex pt-1 w-48 bg-gray-400 opacity-70 rounded-sm shadow-md">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="pt-1 lucide lucide-circle"><circle cx="15" cy="15" r="9" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="pt-1 lucide lucide-circle"><circle cx="15" cy="15" r="9" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="pt-1 lucide lucide-circle"><circle cx="15" cy="15" r="9" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="pt-1 lucide lucide-circle"><circle cx="15" cy="15" r="9" /></svg>
                    </div>
                    <div className="flex-grow text-right px-2 font-medium">x1</div>
                </div>
            </div>
        </div>
    );
}
