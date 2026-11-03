import Form from "next/form"
import ModelsGrid from "@/app/components/BooksGrid"
import { getBooks } from "@/app/lib/models"
import type { BooksPageProps } from "@/app/types"

export default async function BooksPage({ searchParams }: BooksPageProps) {
    const books = await getBooks()

    const query = (await searchParams)?.q?.toLowerCase() || ""

    const filteredBooks = query
        ? books.filter(book =>
            book.name.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        )
        : books
    return (
        <><Form action="/books" className="w-full px-5 md:px-0 md:max-w-7xl">
              <input
                  type="text"
                  name="q"
                  placeholder="Search books..."
                  autoComplete="off"
                  defaultValue={query}
                  className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
              />
          </Form>
        <ModelsGrid title="All" books={filteredBooks} />
        </>
        
    )
}