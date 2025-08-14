'use client'

import { editBlog } from "@/actions/editBlog"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

export function EditBlog({ title, content, blogId }: {
    title: string,
    content: string,
    blogId: string,
}) {
    const [newTitle, setNewTitle] = useState(title)
    const [newContent, setNewContent] = useState(content)
    const [err, setErr] = useState(false)
    const reference = useRef(false)
    const router = useRouter()

    const eventHandler = async () => {
        if (!newTitle.trim() || !newContent.trim()) {
            alert("Title and Content are required feilds")
            return
        }
        if (newTitle.trim() === title && newContent.trim() === content) {
            if (reference.current) return
            reference.current = true
            router.push('/blog/' + blogId)
        }
        try {
            if (reference.current) return;
            reference.current = true
            const res = await editBlog({ title: newTitle.trim(), content: newContent.trim(), blogId: blogId })
            console.log(res)
            if (res.status === 200) {
                router.push('/blog/' + blogId)
            } else if (res.status === 400) {
                setErr(true)
                router.push('/home')
            }
        } catch {
            reference.current = false
        }
    }

    return (<>
        <div className="bg-gradient-to-b from-white via-blue-100 to-blue-50">
            <div className="items-center flex justify-center h-screen">
                <div className="w-[800px] pt-14 px-2">
                    <div>
                        <input value={newTitle} className="p-3 w-full mb-2 bg-white text-2xl border border-slate-500 outline-0" placeholder="Title" onChange={(e) => { setNewTitle(e.target.value) }}></input>
                    </div>
                    <div>
                        <textarea value={newContent} onChange={(e) => { setNewContent(e.target.value) }} className="p-3 text-xl block w-full border-slate-500 outline-none text-gray-800 bg-white border " rows={12} placeholder="Write your story"></textarea>
                    </div>
                    <div className="w-full flex justify-end py-2">
                        <button onClick={async () => {
                            eventHandler()
                        }} className="bg-blue-500 text-white px-4.5 py-1.5 rounded cursor-pointer shadow shadow-slate-700 hover:bg-blue-700 active:ring-4 active:ring-offset-0 active:ring-blue-300" >Publish</button>
                    </div>
                </div>
            </div>
        </div>
        {err && <div className="bg-black/40 fixed z-50 inset-0 w-full h-full">
            <div className="flex justify-center h-screen items-center">
                <div className="bg-slate-400 p-10 font-semibold text-lg text-slate-200 m-3 shadow  rounded-md">
                    Permission Denied Redirecting...
                </div>
            </div>
        </div>}
    </>)
}