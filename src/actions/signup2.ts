'use server'
import prisma from "@/lib/db"
import z from "zod"
import bcrypt from 'bcrypt';

export async function SignUp2({ username, password, email }: { username: string, password: string, email: string }) {
    const userSchema = z.object({
        username: z.string().min(3),
        email: z.email(),
        password: z.string().min(6)
    })

    const result = userSchema.safeParse({ username, email, password })

    if (result.success) {
        const hash = await bcrypt.hash(password, 10)
        try {
            const user = await prisma.user.create({
                data: {
                    name: username,
                    password: hash,
                    email: email
                }
            })
            return {
                msg : "User Create Sucessfully",
                status : 200
            };
        }
        catch (error) {
            return {
                msg: "try using a different email",
                status: 400
            }
        }
    }
    else {
        return {
            msg: "invalid Inputs",
            status : 400
        }
    }
}