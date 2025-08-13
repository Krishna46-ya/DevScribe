import prisma from "@/lib/db";
import { time } from "console";
import { NextRequest, NextResponse } from "next/server";
import { id } from "zod/locales";

export async function GET(req: NextRequest) {

    const param = req.nextUrl.searchParams
    const page = param.get('page') || '1'
    const pageNo = Math.max(1, Number(page) || 1)

    const totalBlogs = await prisma.post.count()
    const totalPages = Math.ceil(totalBlogs / 10)

    const skip = ((Number(pageNo) - 1) * 10)

    const blogs = await prisma.post.findMany({
        skip,
        take: 10,
        orderBy: {
            createdAt:"desc"
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

    const post = blogs.map((blog) => ({
        author: blog.author.name,
        image: blog.author.image,
        authorId: blog.userId,
        blogId: blog.id,
        title: blog.title,
        content: blog.content,
        createdOn: blog.createdAt
    }))

    return NextResponse.json({
        post,
        currentPage: pageNo,
        totalPages,
    })
}