'use server'

import { NEXT_AUTH } from "@/lib/auth"
import prisma from "@/lib/db"
import { getServerSession } from "next-auth"

export async function deleteBlog({ blogId }: { blogId: string }) {
    const session: any = await getServerSession(NEXT_AUTH)
    if (!session) {
        return {
            msg: "not logged in",
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
            await prisma.post.delete({
                where: {
                    id: blogId
                }
            })
            return {
                msg: "post deleted sucessfully",
                status: 200
            }
        } else {
            return {
                msg: "not authorized",
                status: 400
            }
        }
    } catch {
        return {
            msg: "internal server error",
            status: 400
        }
    }

}