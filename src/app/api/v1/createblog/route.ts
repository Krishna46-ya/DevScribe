import { NEXT_AUTH } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const data = z.object({
    title: z.string(),
    content: z.string()
})

export async function POST(req: NextRequest) {

    const session: any = await getServerSession(NEXT_AUTH)


    if (!session) {
        return NextResponse.json({ msg: "authorization failed" }, { status: 401 })
    }

    const body: z.infer<typeof data> = await req.json()
    const verify = data.safeParse(body)
    if (!verify.success) {
        return NextResponse.json({ msg: "invalid inputs" }, { status: 400 })
    }

    try {
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                userId: session.user.id
            }
        })
        return NextResponse.json({ blog })
    } catch (error) {
        return NextResponse.json({ msg: "error while blog creation" }, { status: 400 })
    }
} 