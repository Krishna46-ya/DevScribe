import { NEXT_AUTH } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { FancySidePanel } from "./FancySidePanel"
import { UserAvator } from "./UserAvator"

type serverSession = {
    user: {
        name: string,
        email: string,
        image?: string,
        id: string
    }
}

export async function AppBar() {
    const session: serverSession = await getServerSession(NEXT_AUTH) || {
        user: {
            name: "An",
            email: "example@gmail.com",
            id: "0"
        }
    }

    return (
        <>
            <div className="top-0 left-0 fixed bg-white w-full z-30">
                <div className="flex justify-between p-4 px-12 border-b shadow border-slate-950">
                    <Link href={'/home'} className="text-2xl hover:text-slate-950 text-slate-900 font-serif">
                        DevScribe
                    </Link>
                    <div className="flex space-x-7">
                        <div className="flex flex-col justify-center items-center">
                            <Link href={'/create'}><div className="hover:text-slate-950 flex font-semibold text-slate-900" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>Write
                            </div></Link>
                        </div>
                        <div>
                            <UserAvator session={session} name={session.user.name} image={session.user.image}></UserAvator>
                        </div>
                        <div className="flex items-center flex-col justify-center text-slate-900">
                           <FancySidePanel name={session.user.name}></FancySidePanel>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}