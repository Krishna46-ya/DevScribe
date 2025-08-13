import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {

    const session: any = await getServerSession(NEXT_AUTH)
    if (!session) {
        return NextResponse.json({
            msg: "Not Authorized"
        }, { status: 404 })
    }
    try {
        const blogs = await prisma.user.findFirst({
            where: {
                id: session.user.id
            },
            
            select: {
                Post: {
                    orderBy:{
                        createdAt :"desc"
                    },
                    select: {
                        id: true,
                        title: true,
                        createdAt: true
                    }
                }
            }
        })
        return NextResponse.json(blogs, { status: 200 })
    } catch (err) {
        return NextResponse.json({ msg: "Error while fetching data" }, { status: 400 })
    }

}