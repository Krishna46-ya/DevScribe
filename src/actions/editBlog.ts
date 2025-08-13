'use server'
import prisma from '@/lib/db'

import { NEXT_AUTH } from "@/lib/auth"
import { getServerSession } from "next-auth"

export async function editBlog({ title, content, blogId }: {
    title: string,
    content: string,
    blogId: string,
}) {
    const session: any = await getServerSession(NEXT_AUTH)

    if (!session) {
        return {
            msg: "not authorized",
            status: 400
        }
    }

    try {

        const post = await prisma.post.findUnique({
            where: {
                id: blogId
            }
        })
        if (post?.userId === session.user.id) {
            const blog = await prisma.post.update({
                where: {
                    id: blogId
                },
                data: {
                    title,
                    content,
                }
            })
            return { 
                msg: "updated sucessfully",
                status :200
            }
        }
        else {
            return { msg: "permision denied", status: 400 }
        }


    } catch (error) {
        return {
            msg: "update unsucessful",
            status: 500
        }
    }

}