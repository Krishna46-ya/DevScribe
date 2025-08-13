'use client'

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function FancySidePanel({ name }: {
    name: string,

}) {
    var user: boolean
    if (name === "An") {
        user = false
    } else {
        user = true
    }
    const router = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <>
            <div onClick={() => { setOpen(prev => !prev) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div>
                <div className={`z-40 transition-all shadow-lg  backdrop-blur-sm duration-300 ${open ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'} ease-in-out fixed right-0 top-[65px] bottom-0 w-48 md:w-1/4 lg:w-1/6 rounded-l-sm px-5`}>
                    <div className="font-serif text-3xl pb-8 pt-10">
                        DevScribe
                    </div>
                    <div className="text-xl font-mono">
                        <div onClick={() => { router.push('/home') }} className="cursor-pointer py-2 pl-1 transition-colors duration-100 ease-in-out hover:bg-slate-800 hover:text-white flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>Home
                        </div>
                        <div onClick={() => { router.push('/create') }} className="cursor-pointer py-2 pl-1 transition-colors duration-100 ease-in-out hover:bg-slate-800 hover:text-white flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>Create
                        </div>
                        <div onClick={() => { router.push('/myblogs') }} className={`${user?"block":"hidden"} cursor-pointer py-2 pl-1 transition-colors duration-100 ease-in-out hover:bg-slate-800 hover:text-white flex items-center gap-x-2.5`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
                            </svg>My Blogs
                        </div>
                        <div onClick={() => { router.push('/') }} className="cursor-pointer py-2 pl-1 transition-colors duration-100 ease-in-out hover:bg-slate-800 hover:text-white flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                            </svg>Hero Page
                        </div>
                        <div onClick={() => { router.push('/blog/cme8v31qm000htyqso5uhsji9') }} className="cursor-pointer py-2 pl-1 transition-colors duration-100 ease-in-out hover:bg-slate-800 hover:text-white flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>About
                        </div>
                        <div onClick={() => { user ? signOut() : router.push('/signup') }} className="cursor-pointer py-2 pl-1 transition-colors duration-100 ease-in-out hover:bg-slate-800 hover:text-white flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                            </svg>{user ? "Logout" : "Sign up"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
