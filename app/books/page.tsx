import Form from "next/form"
import ModelsGrid from "@/app/components/BooksGrid"
import { getBooks } from "@/app/lib/models"

export default async function BooksPage() {
  const books = await getBooks()

    return (
        <ModelsGrid title="All" books={books} />
    )
}