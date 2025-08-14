export function InputBoxSkelaton(){
    return(<>
    <div className="bg-gradient-to-b from-white  via-blue-100 to-blue-50">
            <div className="items-center flex justify-center h-screen">
                <div className="w-[800px] pb-6 px-2">
                    <div>
                        <div className="p-3 w-full mb-2 bg-gray-100 text-gray-200 animate-pulse text-2xl border border-slate-500  border-dashed outline-0">Loadding...</div>
                    </div>
                    <div>
                        <div className="p-3 border-dashed text-xl block w-full animate-pulse border-slate-500 outline-none text-gray-200 bg-gray-100 border h-80 ">Loading...</div>
                    </div>
                    <div className="w-full flex justify-end py-2">
                        <div className="bg-gray-200 animate-pulse text-gray-300 px-4.5 py-1.5 rounded-lg">Publish</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}