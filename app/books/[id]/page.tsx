import { FaRegHeart } from "react-icons/fa6"
import Pill from "@/app/components/Pill"
import type { BookDetailPageProps } from "@/app/types"
import { getBookById } from "@/app/lib/models"
import placeholderImg from "@/public/placeholder.png"
import Image from "next/image"

export default async function BookDetailPage({ params }: BookDetailPageProps){
  const { id } = await params
  const book = await getBookById(id)

  return (
    <div className="container max-w-6xl px-4 py-2 mx-auto">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <Image
            src={placeholderImg}
            alt={`Cover of ${book.name}`}
            fill
            className="object-contain p-4"
          />
        </figure>

        {/* Content Section */}
        <section className="flex flex-col justify-center h-full">
          <div
            className="flex items-center mb-2 text-2xl text-gray-600"
            role="status"
            aria-label="Likes count"
          >
            <FaRegHeart
              className="w-5 h-5 mr-2"
              aria-hidden="true"
            />
            <span className="font-light" aria-label={`${book.likes} likes`}>{book.likes}</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold">{book.name}</h1>

          <Pill
            className="mb-6 w-fit"
            aria-label="Category"
          >
            {book.category}
          </Pill>

          <div className="mb-6 prose prose-lg max-w-none">
            <p className="leading-relaxed text-gray-700">
              {book.author}
            </p>
          </div>

          <footer className="text-sm text-gray-500">
            <time dateTime={book.dateAdded}>
              Added on {new Date(book.dateAdded).toLocaleDateString()}
            </time>
          </footer>
        </section>
      </article>
    </div>
  )
}