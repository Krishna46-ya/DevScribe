import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
export async function GET(req: NextRequest, { params }:any) {
    const blogId = params.id
    const blog = await prisma.post.findUnique({
        where: {
            id: blogId
        },
        include: {
            author: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })
    if (!blog) {
        return NextResponse.json({ msg: "404 not found" }, { status: 404 })
    }
    return NextResponse.json(blog)
}
