import Link from "next/link"
import { Avator } from "./Avator"
import { useState } from "react"
import { deleteBlog } from "@/actions/delete"
import { useRouter } from "next/navigation"



export function MyblogsPage({ post, image, name }: {
    post: {
        id: string,
        title: string,
        createdAt: string
    }, image?: any, name: any
}) {
    const formatedDate = new Date(post.createdAt).toLocaleDateString('en-GB', {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    const [open, setOpen] = useState(false)
    const router = useRouter();

    return (<>
        <Link href={'/blog/' + post.id}>
            <div className="border-b p-5 border-slate-300">
                <div className="flex items-center text-slate-800 font-semibold text-lg gap-2">
                    <Avator image={image} name={name}></Avator>
                    <div>{name}</div>
                    <div className="border-2 rounded-full"></div>
                    <div>{formatedDate}</div>
                </div>
                <div className="text-3xl py-1 font-bold">
                    {post.title.slice(0, 150)}
                </div>
                <div className="pl-5 mt-4 mb-3 flex justify-end  font-semibold gap-x-2">
                    <button onClick={(e)=>{
                        e.preventDefault()
                        router.push('/edit/'+post.id)
                    }} className="hover:bg-slate-300 hover:text-slate-950 text-slate-800 shadow transition-colors duration-100 ease-in-out bg-slate-200 py-1 rounded-sm w-20">Edit</button>
                    <button className="hover:bg-slate-300 hover:text-slate-950 text-slate-800 shadow transition-colors duration-100 ease-in-out bg-slate-200 py-1 rounded-sm w-20" onClick={(e) => {
                        e.preventDefault()
                        setOpen(true)
                    }}>Delete</button>
                </div>
            </div>
        </Link>

        {open && <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
            <div className="bg-slate-100 m-3 p-6 py-10 rounded-md shadow-lg w-96 text-center">
                <div className="mb-4 font-semibold text-slate-800 text-lg">Confirm deletion of Blog
                </div>
                <button
                    onClick={() => setOpen(false)}
                    className="bg-slate-800 hover:bg-slate-900 font-semibold text-white px-4 py-1.5 shadow transition-colors duration-100 ease-in-out shadow-slate-400 rounded"
                >
                    Cancel
                </button>
                <button
                    onClick={
                        async () => {
                            const res = await deleteBlog({ blogId: post.id })
                            setOpen(false)
                            console.log(res)
                            if (res.status === 200) {
                                window.location.reload();
                            }
                        }}
                    className="hover:bg-red-300 hover:text-slate-200 font-semibold px-4 py-1.5 shadow transition-colors duration-100 ease-in-out shadow-slate-400 rounded mx-3"
                >
                    Delete blog
                </button>
            </div>
        </div>}
    </>)
}