'use client'

import { signOut } from "next-auth/react";
import { useState } from "react";
import { InfoCard } from "./InfoCard";

export function UserAvator({ name, image, session }: {
    name?: string,
    image?: string,
    session: {
        user: {
            name: string;
            email: string;
            image?: string | undefined;
            id: string;
        };
    }
}) {
    const [open, setOpen] = useState(false)
    const avatarImage = name === "An" ? "/727399.webp" : image;
    const letter = name?.[0]?.toUpperCase() || 'A'

    return (<>
        <div onClick={() => { setOpen(prev => !prev) }} className="bg-orange-600 cursor-pointer aspect-square h-8 flex justify-center items-center rounded-full text-white overflow-hidden">
            {avatarImage ? (<img src={avatarImage} alt={name || "Avatar"} className="w-full bg-white h-full object-cover" />)
                : (letter)}
        </div>
        <div>
            {open && <InfoCard Data={session.user.name==="An"?null:session.user}></InfoCard>}
        </div>

    </>)
}