import Link from "next/link"
import { Avator } from "./Avator"

export type blogData = {
    author: string,
    image: string,
    authorId: string,
    blogId: string,
    title: string,
    content: string,
    createdOn: string
}

export function Blog(props: blogData) {
    const formatedDate = new Date(props.createdOn).toLocaleDateString('en-GB', {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    return (
        <Link href={'http://localhost:3000/blog/'+props.blogId}>
            <div className="border-b p-5 border-slate-300">
                <div className="flex items-center text-slate-800 font-semibold text-lg gap-2">
                    <Avator image={props.image} name={props.author}></Avator>
                    <div>{props.author}</div>
                    <div className="border-2 rounded-full"></div>
                    <div>{formatedDate}</div>
                </div>
                <div className="text-3xl py-1 font-bold">
                    {props.title.slice(0, 150)}
                </div>
                <div className="text-slate-700 pt-1 pb-4 text-lg font-semibold">
                    {props.content.slice(0, 200)}...
                </div>
                <div className="pb-6 text-slate-600 font-semibold">
                    {Math.ceil(props.content.length / 500)} minute read
                </div>
            </div>
        </Link>

    )
}