export function BottomBar() {
    return (
        <div className="fixed bottom-0 z-50 w-full flex justify-center">
            <div className="flex items-center justify-center bg-gray-400 opacity-70 border-r-2 border-black w-auto h-16">
                <div className="text-xl ml-5 font-medium">NO</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-2 mr-2 lucide lucide-arrow-left-square"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m12 8-4 4 4 4" /><path d="M16 12H8" /></svg>
            </div>
            <div className="flex items-center justify-center bg-gray-400 opacity-70 border-l-2 border-black w-auto h-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 ml-2 lucide lucide-arrow-right-square"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 12h8" /><path d="m12 16 4-4-4-4" /></svg>
                <div className="text-xl mr-5 font-medium">YES</div>
            </div>
        </div>
    );
}
