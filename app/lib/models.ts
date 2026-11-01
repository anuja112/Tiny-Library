import booksData from "../data/books.json"
import type { Book, GetBooksParams } from "../types"

export async function getBooks({category}: GetBooksParams={}): Promise<Book[]> {
    let filteredBooks:Book[]=booksData;
    if (category) {
        filteredBooks = filteredBooks.filter(
            (book:Book) => book.category === category
        );
    }
    return filteredBooks
}

export async function getBookById(id: string | number): Promise<Book> {

    const foundBook = booksData.find(
        (book: Book) => book.id.toString() === id.toString()
    )
    if (!foundBook) {
        throw new Error(`Book with id ${id} not found`)
    }
    return foundBook
}