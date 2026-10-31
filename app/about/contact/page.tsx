export default function ContactPage() {
    return (
        <main>
            <section className="max-w-2xl px-6 py-10 mx-auto">
                <p className="mb-5 text-sm tracking-wide text-gray-700 uppercase">
                    Ways to reach us
                </p>
                <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
                    Contact
                </h1>
                <ul className="mb-4 space-y-1 text-lg leading-relaxed text-gray-800 list-disc pl-8">
                    <li>
                        Book suggestions: Tell us what we should add to the shelf.
                    </li>
                    <li>
                        Corrections: Spotted an error? Let us know so we can fix it.
                    </li>
                    <li>
                        Careers: Interested in joining Tiny Library? Send a short note and we'll get back to you.
                    </li>
                </ul>
                <p className="mb-7 text-lg text-gray-800">
                    Email: hello@tinylibrary.example
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                    We're a small team, so we don't list a phone
                    number—email is best.
                </p>
            </section>
            <footer className="flex justify-center py-6 border-t border-gray-200">
                <img
                    src="/tinylibrary-logo.png"
                    alt="Tiny Library"
                    className="w-36 h-auto object-contain"
                />
            </footer>
        </main>
    );
}