import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RigtSidebar from "@/components/shared/RigtSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Threads',
    description: 'A Next.js Thread App'
}

export default function RootLayout({children}:
{
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={inter.className}>
            <Topbar />
            <main>
                <LeftSidebar />
                <section className="main-container">
                    <div className="w-full max-w-4xl">{children}</div>
                </section>
                <RigtSidebar />
            </main>
            <Bottombar />
            </body>
            </html>
        </ClerkProvider>
    )
}