'use client'
import { MyblogsPage } from "@/components/MyblogsPage"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export type post = {
    Post: {
        id: string,
        title: string,
        createdAt: string
    }[]
}

export default function MyBlogs() {
    const router = useRouter()
    const session = useSession()
    const [data, setData] = useState<post>({
        Post: []
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (session.status === "unauthenticated") {
            router.push('/signup')
            return
        }
        else if (session.status === "authenticated") {
            const call = async () => {
                const res = await axios.get('http://localhost:3000/api/v1/myblogs')
                setData(res.data)
                setLoading(false)
            }
            call()
        }
    }, [session.status, router])

    return (<>
        {!loading && <div className="grid md:grid-cols-4 lg:grid-cols-6 pt-[65px]">
            <div className="hidden lg:block col-span-1 min-h-screen">
                <div className="grid place-items-center bg-gradient-to-b from-[#EEEEEE] via-[#EEEEEE] to-white  min-h-full border-r border-slate-400">
                    <img className="object-cover" src={'/kitty.jpg'}></img>
                </div>
            </div>
            <div className="col-span-3">
                <div>
                    {data.Post.length > 0 && (
                        data.Post.map((post) => (
                            <MyblogsPage
                                key={post.id}
                                name={session.data?.user?.name}
                                image={session.data?.user?.image}
                                post={post}
                            />
                        ))
                    )}
                    {data.Post.length === 0 && <NoBlog></NoBlog>}
                </div>
            </div>
            <div className="relative hidden md:block md:col-span-1 lg:col-span-2">
                <div className="absolute bottom-0">
                    <div className="fixed h-screen w-full bottom-0">
                        <img src={'/guitar.jpg'} className="object-cover h-screen"></img>
                    </div>
                </div>
            </div>
        </div>}
    </>)
}

function NoBlog() {
    const router = useRouter()
    return (<>
        <div className="flex bg-slate-100/40 justify-center items-center h-screen">
            <div>
                <div className="font-semibold font-mono text-slate-800 text-2xl">No Blogs? Write one</div>
                <div onClick={() => { router.push('/create') }} className="flex justify-center text-lg font-semibold text-slate-800 mt-3">
                    <div className="flex items-center shadow shadow-black/20 cursor-pointer hover:text- hover:bg-white transition-colors duration-100 ease-in-out py-1.5 backdrop-blur-sm pr-4 pl-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <div>Create</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
} 