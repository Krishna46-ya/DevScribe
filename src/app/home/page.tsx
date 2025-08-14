import { AppBar } from "@/components/AppBar"
import { Blog, blogData } from "@/components/Blog"
import axios from "axios"
import Link from "next/link"

type info = {
    post: blogData[],
    currentPage: number,
    totalPages: number
}

export default async function Home({ searchParams }: any) {

    const page = await searchParams.page || "1"

    const res = await axios.get('http://localhost:3000/api/v1/bulk?page=' + page)
    const blog: info = res.data

    return (<>
        <AppBar></AppBar>
        <div className="grid md:grid-cols-4 lg:grid-cols-6 pt-[65px]">
            <div className="hidden lg:block col-span-1 min-h-screen">
                <div className="grid place-items-center bg-gradient-to-b from-[#EEEEEE] via-[#EEEEEE] to-white  min-h-full border-r border-slate-400">
                    <img className="object-cover" src={'/kitty.jpg'}></img>
                </div>
            </div>
            <div className="col-span-3">
                <div>
                    {blog.post.map((e: blogData) => (
                        <Blog key={e.blogId} {...e}></Blog>
                    ))}
                </div>
                <div className="p-5 flex gap-x-2 justify-center items-center">
                    {blog.currentPage > 1 && (
                        <Page placeholder={"< First"} to={1} current={false} />
                    )}

                    {Array.from({ length: Math.min(blog.totalPages, 5) },
                        (_, i) => {
                            const start = Math.max(1, blog.currentPage - 2)
                            const end = Math.min(blog.currentPage + 2, blog.totalPages)
                            const pageNo = start + i
                            if (end < pageNo) return null;
                            return (
                                <Page key={pageNo} to={pageNo} placeholder={`${pageNo}`} current={pageNo === blog.currentPage}></Page>
                            )
                        })}
                    {blog.currentPage < blog.totalPages && (
                        <Page placeholder={"Last >"} to={blog.totalPages} current={false} />
                    )}
                </div>

            </div>
            <div className="relative hidden md:block md:col-span-1 lg:col-span-2">
                <div className="absolute bottom-0">
                    <div className="fixed h-screen w-full bottom-0">
                        <img src={'/guitar.jpg'} className="object-cover h-screen"></img>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

function Page({ to, placeholder, current }: { to: number, placeholder: string, current: boolean }) {

    return (<>
        <Link className={`text-lg font-semibold ${current ? "bg-slate-300 hover:bg-slate-500" : "bg-slate-100 hover:bg-slate-300"} border border-slate-500  transition-colors duration-100 ease-in-out  px-2 py-1 shadow  rounded-sm`} href={'/home?page=' + to}>
            <div className="">
                {placeholder}
            </div>
        </Link>
    </>)
}