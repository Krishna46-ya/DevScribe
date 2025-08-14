import { HomePageBlogs } from "./HomePgeBlogs";

export function HomeBodySkelaton() {
    return (<>
        <div className="flex-1 flex-col overflow-y-clip">
            <div className="grid md:grid-cols-4 lg:grid-cols-6">
                <div className="hidden h-full lg:block col-span-1 min-h-max">
                    <div className="grid place-items-center h-full animate-pulse border-r border-dashed border-slate-500">
                        <div className="flex items-center h-full justify-center w-full bg-gray-300 rounded-sm ">
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div>
                        <HomePageBlogs></HomePageBlogs>
                        <HomePageBlogs></HomePageBlogs>
                        <HomePageBlogs></HomePageBlogs>
                        <div className="hidden 2xl:block">
                            <HomePageBlogs></HomePageBlogs>
                        </div>
                        <div className="hidden xl:block"> 
                            <HomePageBlogs></HomePageBlogs>
                        </div>


                    </div>
                </div>
                <div className="hidden h-full md:block  md:col-span-1 lg:col-span-2">
                    <div className="h-full w-full border-l border-dashed animate-pulse border-slate-500">
                        <div className="flex h-full justify-center items-center">
                            <div className="flex h-full items-center justify-center w-full bg-gray-300">
                                <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}