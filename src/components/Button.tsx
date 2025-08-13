import { signIn } from "next-auth/react"

export function Button({ title, onClick }: {
    title: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <div>
            <button onClick={onClick} className="hover:bg-black cursor-pointer shadow bg-slate-950 rounded-md w-full text-white py-2 mt-3" >{title}</button>
        </div>
    )
}

export function GoogleButton({ title }: { title: string }) {
    return (
        <button onClick={async () => {
            await signIn('google',{
                callbackUrl :'/home'
            })
        }} className="flex items-center justify-center w-full border rounded-md py-1.5 mt-3.5 font-mono tracking-tight text-slate-950 border-slate-950 hover:border-black hover:text-black cursor-pointer">
            <svg className="size-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                <path d="M12.005,10.239v3.821h5.44c-0.604,1.971-2.094,3.464-4.249,3.866c-3.429,0.638-6.864-1.856-7.199-5.328 c-0.347-3.596,2.477-6.63,6.008-6.63c1.496,0,2.865,0.549,3.92,1.454c0,0,2.813-2.813,2.813-2.813 c-2.216-2.021-5.353-3.061-8.694-2.421c-3.986,0.763-7.174,3.99-7.882,7.986C1.042,16.498,5.881,22,12.005,22 c8.395,0,10.246-7.85,9.422-11.747L12.005,10.239z"></path>
            </svg>
            <div className="pl-2 text-lg">
                {title}
            </div>
        </button>
    )
}