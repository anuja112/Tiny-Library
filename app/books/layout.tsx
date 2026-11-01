import type { ReactNode } from "react";

export default function BooksLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
