import prisma from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt';
import z from "zod";
import { NextAuthOptions } from "next-auth";
const userSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
})

export const NEXT_AUTH : NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text', placeholder: 'example@gamil.com' },
                password: { label: 'password', type: 'text', placeholder: '12345678' },
            },
            async authorize(credentials: { email?: string; password?: string } | undefined) {
                if (!credentials) return null
                if (!credentials.password) return null

                const success = userSchema.safeParse(credentials)
                if (!success.success) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email?.toLowerCase()
                    }
                })

                if (!user || !user.password) return null

                const verify = await bcrypt.compare(credentials.password, user.password)

                if (verify) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                } else {
                    return null
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }:any) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }: any) {
            if (token && session.user) {
                (session.user as any).id = token.id 
            }
            return session
        },
    },
    pages:{
        signIn :'/signup',
    },
}