import { AppBar } from "@/components/AppBar"
import { EditBlog } from "@/components/EditBlog"
import { ExportBlog } from "@/components/Inputblog"
import axios from "axios"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

export default async function editBlog({ params }: any) {

    const session: any = await getServerSession()
    if (!session) {
        redirect('/signup')
    }

    const res = await axios.get('https://devscribe-ten.vercel.app/api/v1/blogId/' + params.id)
    const data = res.data
    return (
        <div>
            <AppBar></AppBar>
            <EditBlog title={data.title} content={data.content} blogId={data.id}></EditBlog>
        </div>
    )
}