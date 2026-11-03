"use client"

import NavLink from "@/app/components/NavLink"
import { usePathname } from "next/navigation"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"

export default function CategoriesNav() {
    const pathname = usePathname()
    const categories: Category[] = getAllCategories()

    return (
        <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:left-0 md:w-72 md:top-1/2 md:-translate-y-1/2 md:border-none md:px-4">

            <div className="relative">
                <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">

                    <ul className="flex px-4 py-3 whitespace-nowrap gap-x-2 md:flex-col md:p-0 md:gap-x-0 md:gap-y-5">

                        <NavLink
                            href="/books"
                            isActive={pathname === "/books"}
                        >
                            All
                        </NavLink>

                        {categories.map(item => (
                            <NavLink
                                href={`/books/categories/${item.slug}`}
                                key={item.slug}
                                isActive={pathname === `/books/categories/${item.slug}`}
                            >
                                {item.displayName}
                            </NavLink>
                        ))}

                    </ul>
                </nav>

                <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
            </div>
        </aside>
    )
}
