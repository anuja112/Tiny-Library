import type {ReactNode} from "react";

export type Book = {
    id: number;
    name: string;
    author: string;
    likes: number;
    image: string;
    category: string;
    dateAdded: string;
}

export type Category = {
    displayName: string
    slug: string
}

export type GetBooksParams = {
    category?: string
}

export type BooksPageProps = {
    searchParams: {
        q?: string
    }
}

export type BookDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

//component props types

export type BookCardProps = {
    book: Book
}

export type BooksGridProps = {
    title: string
    books: Book[]
}

export type PillProps = {
    children: ReactNode
    className?: string
}

export type NavLinkProps = {
    href: string;
    children: ReactNode;
    isActive?: boolean;
};