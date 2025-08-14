'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

export type blogDefault = {
    "blog": {
        "id": string,
        "userId": string,
        "title": string,
        "content": string,
        "createdAt": string
    }
}

export function ExportBlog() {
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const reference = useRef(false)

    const eventHandler = async () => {
        if (!title.trim() || !content.trim()) {
            alert("Title and Content are required feilds")
            return
        }
        if (reference.current) return;
        reference.current = true
        try {
            const blog = await axios.post('http://devscribe-ten.vercel.app/api/v1/createblog', {
                title: title.trim(),
                content: content.trim()
            })
            const blogData: blogDefault = blog.data
            router.push(`/blog/${blogData.blog.id}`)
        } catch (err) {
            console.log(err)
            reference.current = false
        }
    }

    return (
        <div className="bg-gradient-to-b from-white  via-blue-100 to-blue-50">
            <div className="items-center flex justify-center h-screen">
                <div className="w-[800px] pt-14 px-2">
                    <div>
                        <input className="p-3 w-full mb-2 bg-white text-2xl border border-slate-500 outline-0" placeholder="Title" onChange={(e) => {
                            setTitle(e.target.value)
                        }}></input>
                    </div>
                    <div>
                        <textarea className="p-3 text-xl block w-full border-slate-500 outline-none text-gray-800 bg-white border " rows={12} placeholder="Write your story" onChange={(e) => {
                            setContent(e.target.value)
                        }}></textarea>
                    </div>
                    <div className="w-full flex justify-end py-2">
                        <button className="bg-blue-500 text-white px-4.5 py-1.5 rounded cursor-pointer shadow shadow-slate-700 hover:bg-blue-700 active:ring-4 active:ring-offset-0 active:ring-blue-300" onClick={
                            eventHandler
                        }>Publish</button>
                    </div>
                </div>
            </div>
        </div>

    )
}