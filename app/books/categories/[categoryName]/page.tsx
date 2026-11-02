import BooksGrid from "@/app/components/BooksGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getBooks } from "@/app/lib/models"
import type { CategoryPageProps } from "@/app/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categoryName } = await params

    const category = getCategoryBySlug(categoryName)
    const books = await getBooks({ category: categoryName })

    return (
        <BooksGrid
            title={category.displayName}
            books={books}
        />
    )
}