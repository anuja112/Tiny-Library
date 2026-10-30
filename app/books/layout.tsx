import type { ReactNode } from "react";

export default function BooksLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Books Layout</h1>
      {children}
    </div>
  );
}
