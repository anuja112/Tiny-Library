"use client";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import { usePathname } from "next/navigation";
import TLLogo from "@/public/tinylibrary-logo.png";

export default function Navbar() {
    const pathname = usePathname();

    return (
    <header className="sticky top-0 z-50 w-full bg-white ">
        <nav className="flex justify-between items-center px-6 py-1 pr-2">
            <Link href="/">
            <div className="relative cursor-pointer">
                {/* Desktop Logo */}
                <img
                src={TLLogo.src}
                alt="Tiny Library Logo"
                className="w-[120px] h-auto hidden md:block"
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
            <NavLink href={pathname === "/about/contact" ? "/about/contact" : "/about"}
                isActive={pathname === "/about" || pathname === "/about/contact"}>
                {pathname === "/about/contact" ? "ABOUT : CONTACT" : "ABOUT"}</NavLink>
            </ul>
        </nav>
    </header>
    )
}

