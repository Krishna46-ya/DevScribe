export default function FullBlogSkelaton() {
    return (<>
        <div className="grid lg:grid-cols-8 min-h-screen animate-pulse">
            <div className="lg:col-span-6 p-4 md:p-20 border-r border-dashed animate-pulse border-slate-500">
                <div className="font-bold">
                    <div className="h-5 lg:h-8 w-3/5 bg-gray-200 rounded-full mb-3"></div>
                    <div className="h-5 lg:h-8 w-4/5 bg-gray-200 rounded-full"></div>
                </div>
                <div className=" pt-8 pb-1 pl-2">
                    <div className="h-4 bg-gray-200 rounded-full w-1/6"></div></div>
                <div>
                   <Paragraph/>
                   <Paragraph/>
                   <Paragraph/>
                </div>
            </div>
            <div className="hidden lg:block col-span-2">
                <div className="flex justify-center mt-36 items-center">
                    <div className="p-3 h-10 w-10 bg-gray-200 rounded-full m-2"></div>
                    <div className="font-semibold">
                        <div className="w-24 rounded-full h-6 bg-gray-200  "></div>
                        <div className="w-36 h-4 rounded-full bg-gray-200  mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:hidden animate-pulse flex justify-center mb-16  items-center">
            <div className="p-3 h-10 w-10 bg-gray-200 rounded-full m-2"> </div>
            <div className="font-semibold">
                <div className="w-24 rounded-full h-6 bg-gray-200  "></div>
                <div className="w-36 h-4 rounded-full bg-gray-200  mt-2"></div>
            </div>
        </div>
    </>)
}

function Paragraph(){
    return(<>
    <div role="status" className="space-y-2.5 w-full pt-7">
    <div className="flex items-center w-4/5">
        <div className="h-2.5 w-2/12 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-3/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-2/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-3/12 ms-2 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-4/12 ms-2 bg-gray-300 rounded-full"></div>
    </div>
    <div className="flex items-center w-11/12">
        <div className="h-2.5 w-3/12 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-2/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-4/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-2/12 ms-2 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-3/12 ms-2 bg-gray-300 rounded-full"></div>
    </div>
    <div className="flex items-center w-full">
        <div className="h-2.5 w-5/12 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-2/12 ms-2 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-3/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-4/12 ms-2 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-2/12 ms-2 bg-gray-300 rounded-full"></div>
    </div>
    <div className="flex items-center w-7/10">
        <div className="h-2.5 w-4/12 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-2/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-3/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-2/12 ms-2 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-4/12 ms-2 bg-gray-300 rounded-full"></div>
    </div>
    <div className="flex items-center w-9/10">
        <div className="h-2.5 w-2/12 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-3/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-2/12 ms-2 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-5/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-3/12 ms-2 bg-gray-200 rounded-full"></div>
    </div>
    <div className="flex items-center w-1/2">
        <div className="h-2.5 w-3/12 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-4/12 ms-2 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-3/12 ms-2 bg-gray-300 rounded-full"></div>
        <div className="h-2.5 w-2/12 ms-2 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 w-5/12 ms-2 bg-gray-300 rounded-full"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

    </>)
}