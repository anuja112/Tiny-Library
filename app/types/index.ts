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

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive?: boolean;
};