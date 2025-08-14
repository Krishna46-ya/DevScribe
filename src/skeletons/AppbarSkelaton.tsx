export function AppbarSkelaton() {
    return (<>
        <div className="h-[65px] w-full px-12 border-b border-dashed border-slate-500 animate-pulse bg-white">
            <div className="flex justify-between h-full items-center">
                <div className="text-2xl">
                    <div className="h-6 bg-gray-200 w-24 rounded-full md:w-48"></div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="hidden md:block h-6 bg-gray-200 rounded-full w-32"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-8"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-8"></div>
                </div>
            </div>
        </div>
    </>)
}