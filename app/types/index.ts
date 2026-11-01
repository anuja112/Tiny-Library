import type {ReactNode} from "react";


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