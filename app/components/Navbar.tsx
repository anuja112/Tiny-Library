"use client";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import { usePathname } from "next/navigation";
import TLLogo from "@/public/tinylibrary-logo.png";

export default function Navbar() {
    const pathname = usePathname();

    return (
    <header className="w-full bg-white">
        <nav className="flex justify-between px-6 py-2 pr-2">
            <Link href="/">
            <div className="relative cursor-pointer">
                {/* Desktop Logo */}
                <img
                src={TLLogo.src}
                alt="Tiny Library Logo"
                className="w-[150px] h-auto hidden md:block"
                />
                {/* Mobile Logo */}
                <img
                src={TLLogo.src}
                alt="Tiny Library Logo"
                className="w-[80px] h-auto block md:hidden"
                />
            </div>
            </Link>
            <ul className="flex items-center gap-1.5">
            <NavLink href="/books" isActive={pathname.startsWith("/books")}>Books</NavLink>
            <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
            </ul>
        </nav>
    </header>
    )
}

