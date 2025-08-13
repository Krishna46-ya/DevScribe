import { AppBar } from "@/components/AppBar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <AppBar></AppBar>
            {children}
        </>
    )
}