import Image from "next/image";
import HeroImageSquare from "@/public/hero-image-square.png"
import { Layers, Globe, Flag } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main>
            <section className="max-w-6xl px-6 py-10 mx-auto">
                <div className="grid items-center gap-12 md:grid-cols-2">

                    <div className="h-[400px] w-full">
                        <Image
                            src={HeroImageSquare}
                            alt="Tiny Library"
                            width={1799}
                            height={1799}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="mb-5 text-sm tracking-wide text-gray-700 uppercase">
                            About Tiny Library
                        </p>

                        <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
                            Small shelf, big impact
                        </h1>

                        <p className="text-lg leading-relaxed text-gray-800">
                            Tiny Library started as a simple idea: make it easier
                            for curious readers to actually find books they'll love,
                            not just scroll endless lists. Every title here is
                            chosen with care, not algorithms.
                        </p>

                        <div className="flex justify-center mt-12">
                            <Link
                                href="/about/contact"
                                className="px-6 py-3 text-sm transition border-2 border-black hover:bg-black hover:text-white"
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-8 border-t border-gray-200">
                <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-3 md:gap-0">

                    <article className="md:pr-8">
                        <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold">
                            <Layers size={23} strokeWidth={1.8} />
                            Curated, not crowded
                        </h3>
                        <p className="text-gray-600">
                            Tiny Library keeps the catalogue intentionally small
                            so every book feels like a recommendation.
                        </p>
                    </article>

                    <article className="md:px-8 md:border-x md:border-gray-300">
                        <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold">
                            <Globe size={23} strokeWidth={1.8} />
                            Easy to browse
                        </h3>
                        <p className="text-gray-600">
                            Clear categories and simple descriptions make it quick
                            to choose what you actually want to read next.
                        </p>
                    </article>

                    <article className="md:pl-8">
                        <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold">
                            <Flag size={23} strokeWidth={1.8} />
                            Readers first
                        </h3>
                        <p className="text-gray-600">
                            Every part of Tiny Library is designed to help you spend
                            less time searching and more time reading.
                        </p>
                    </article>

                </div>
            </section>

                <hr className="border-gray-200" aria-hidden="true" />

                <section className="max-w-2xl px-6 py-10 mx-auto">
                <h2 className="mb-3 text-4xl font-semibold">
                    Our ethos
                </h2>

                <p className="mb-5 text-lg leading-relaxed text-gray-800">
                    At Tiny Library, we believe a good book shouldn’t be hard to
                    find. Our ethos is to create a small, carefully curated space
                    where every title earns its place on the shelf and readers can
                    trust that anything they pick up is worth their time.
                </p>

                <div className="w-40 h-px mx-auto my-6 bg-gray-400" />

                <p className="text-lg leading-relaxed text-gray-800">
                    Instead of overwhelming you with thousands of options,
                    Tiny Library focuses on a modest collection that feels
                    personal and approachable. We want readers to feel like
                    they’ve stepped into a cosy, well-loved library where
                    someone has already done the hard work of sorting through
                    the noise.
                </p>

                <div className="flex justify-center mt-12">
                    <img
                        src="/tinylibrary-logo.png"
                        alt="Tiny Library Logo"
                        className="w-32 h-auto object-contain"
                    />
                </div>
            </section>
        </main>
    )
}
