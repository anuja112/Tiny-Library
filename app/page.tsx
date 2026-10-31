import Link from "next/link"
import HeroImage from "@/public/hero-image.png"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row md:gap-10 max-w-7xl">
        <div className="flex-1 max-w-3xl space-y-6">
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Your next great read starts here
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Discover Stories. Explore Worlds.
          </h1>
          <p className="text-lg text-gray-600">
                Explore a world of books across different genres and categories. Discover timeless classics, hidden gems, and stories worthgetting lost in. Your next favorite book is waiting.
          </p>

          <div className="flex gap-4">
            <Link
              href="/books"
              className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              Explore Books
            </Link>
          </div>
        </div>
        <Image src={HeroImage} width={1254} height={1254} className="w-full max-w-[450px] h-auto" alt="Hero Image" />
      </section>
    </main>
  )
}
