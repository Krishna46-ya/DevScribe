import { AppBar } from "@/components/AppBar"
import { Avator } from "@/components/Avator"
import axios from "axios"

type dataType = {
    "id": string,
    "userId": string,
    "title": string,
    "content": string,
    "createdAt": string,
    "author": {
        "name": string,
        "image": string
    }
}

export default async function Blog({ params }: any) {
    const req = await axios.get('http://localhost:3000/api/v1/blogId/' + params.id)
    const data: dataType = req.data

    const formatedDate = new Date(data.createdAt).toLocaleDateString('en-GB', {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    return (
        <>
            <AppBar></AppBar>
            <div className="grid lg:grid-cols-8 pt-[65px] min-h-screen">
                <div className="lg:col-span-6 p-4 md:p-20 border-r border-slate-200">
                    <div className="text-4xl lg:text-6xl font-bold text-slate-900">
                        {data.title}
                    </div>
                    <div className="text-slate-600 font-semibold text-lg py-8 pl-2">
                        {formatedDate}
                    </div>
                    <div className="whitespace-pre-line font-semibold text-xl text-slate-700">
                        {data.content}
                    </div>
                </div>
                <div className="hidden lg:block col-span-2">
                    <div className="flex justify-center mt-36 items-center">
                        <div className="p-3">
                            <Avator name={data.author.name} image={data.author.image}></Avator>
                        </div>
                        <div className="text-xl font-semibold text-slate-800">
                            <div className="text-2xl">
                                Author
                            </div>
                            <div className="font-mono">
                                {data.author.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden  flex justify-center mb-16  items-center">
                <div className="p-3">
                    <Avator name={data.author.name} image={data.author.image}></Avator>
                </div>
                <div className="text-xl font-semibold text-slate-800">
                    <div className="text-2xl">
                        Author
                    </div>
                    <div className="font-mono">
                        {data.author.name}
                    </div>
                </div>
            </div>
        </>
    )
}