import { signOut } from "next-auth/react"
import { redirect } from "next/navigation"


export function InfoCard({ Data }: { Data: { "name": string, "email": string, "id": string } | null }) {

    return (<>
        <div className="fixed bg-white z-50 top-14 right-6 w-min min-w-40 rounded-sm shadow  border border-slate-800">
            <div className="text-slate-800 font-semibold text-lg px-2 pt-2.5 pb-1">
                {Data?.name || "Guest"}
            </div>
            <div className="text-sm text-slate-400 px-2 pb-2.5 border-b border-b-slate-800">
                {Data?.email || "Anonymous@gmail.com"}
            </div>
            <div className="p-2 text-sm text-slate-800 border-b border-slate-800">
                Id : {Data?.id || "0"}
            </div>
            <div onClick={() => {
                if (Data?.name) {
                    signOut()
                } else {
                    redirect('/signup')
                }
            }} className="p-2 text-slate-800 cursor-pointer hover:bg-slate-800 hover:text-white transition-colors ease-in-out duration-100 text-xl font-mono rounded-b-sm">
                {Data?.name ? "Logout" : "Sign up"}
            </div>
        </div>
    </>)
}