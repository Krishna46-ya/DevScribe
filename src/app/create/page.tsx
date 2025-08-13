import { AppBar } from "@/components/AppBar"
import { ExportBlog } from "@/components/Inputblog"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function CreateBlog() {

    const session: any = await getServerSession()

    if (!session) {
        redirect('/signup')
    }
    return (
        <div>
            <AppBar></AppBar>
            <ExportBlog></ExportBlog>
        </div>
    )
}