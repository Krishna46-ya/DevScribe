'use client'
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Home() {
    const { status } = useSession();
    const router = useRouter()
    const AuthenticationHandler = (redirectIfAuth: string, redirectIfNoAuth: string) => {
        if (status === 'loading') return;
        if (status === 'authenticated') {
            router.push(redirectIfAuth)
        } else {
            router.push(redirectIfNoAuth)
        }
    }

    return (
        <>
            <div className="bg-[#E8E8E6] h-screen">
                <div className="flex justify-between p-4 border-b border-slate-700 md:px-16 items-center fixed top-0 left-0 w-full z-50 bg-[#E8E8E6] shadow">
                    <div className="text-2xl text-slate-900 font-serif">
                        DevScribe
                    </div>
                    <div className="flex justify-between font-semibold md:space-x-8">
                        <button onClick={() => {
                            AuthenticationHandler('/create', '/signup')
                        }} className="cursor-pointer hidden md:block">Write</button>
                        <button onClick={() => {
                            AuthenticationHandler('/home','/signup')
                        }} className="cursor-pointer pr-3 md:p-0">Sign Up</button>
                        <button onClick={() => {
                            AuthenticationHandler('/home','/signin')
                        }} className="cursor-pointer">Login</button>
                        <button className="cursor-pointer hover:bg-black rounded-full shadow px-4 text-sm bg-slate-950 text-white py-2 hidden md:block" onClick={() => {
                            AuthenticationHandler('/home', '/signup')
                        }}>Get Started</button>
                    </div>
                </div>
                <div className="flex flex-col h-screen justify-center">
                    <div className="flex">
                        <div className="p-7 md:p-0 md:ml-16 w-4xl">
                            <div className="font-serif font-light text-[clamp(2rem,8vw,7rem)] lg:text-7xl">Your Daily Dose of Tech, Code, and Creativity</div>
                            <div className="my-10  font-sans lg:text-2xl text-[clamp(0.5rem,10vw,2rem)]   ">Join a community of learner diving into the latest in web, tech, and tools.</div>
                            <button onClick={() => {
                            router.push('/home')
                        }} className="cursor-pointer hover:bg-black rounded-full shadow px-12 tracking-wide text-lg bg-slate-950 text-white py-2.5 font-semibold" >Start reading</button>
                        </div>
                        <div className="hidden xl:block">
                            <img className="fixed bottom-0 right-0 max-w-3/10" src="Ryo.png"></img>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
