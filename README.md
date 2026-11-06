# 📚 Tiny Library

A small, curated library web app for discovering books. Browse the collection, search by title or author, filter by category, and open a details page for any book.

Built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## ✨ Features

- **Browse all books** in a responsive card grid
- **Search** by book title or author (powered by URL query params)
- **Filter by category** — Fiction, Non-Fiction, Romance, Fantasy, Thriller, Horror, Historical, Biography, Self-Help
- **Book details page** showing cover, author, category, likes, and date added
- **Home, About, and Contact pages** with a shared navigation bar
- **Responsive design** that works on mobile and desktop
- **Accessibility touches** such as ARIA labels on book cards and like counts
- **Typed data models** for books, categories, and component props

---

## 🛠️ Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Turbopack in dev) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| UI library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via PostCSS |
| Icons | [React Icons](https://react-icons.github.io/react-icons/), [Lucide React](https://lucide.dev/) |
| Fonts | Google Fonts through `next/font` (Inter, Playfair Display, Geist) |
| Data | Local JSON files (`books.json`, `categories.json`) |
| Linting | ESLint with `eslint-config-next` |

**Tools:** Node.js, npm, Git & GitHub, create-next-app

---

## 📁 Project Structure

```
tiny-library/
├── app/
│   ├── about/
│   │   ├── page.tsx                 
│   │   └── contact/page.tsx        
│   ├── books/
│   │   ├── page.tsx                 
│   │   ├── layout.tsx               
│   │   ├── [id]/page.tsx          
│   │   └── categories/
│   │       └── [categoryName]/page.tsx   
│   ├── components/                
│   ├── data/                    
│   ├── lib/                 
│   ├── types/               
│   ├── globals.css          
│   ├── layout.tsx          
│   └── page.tsx            
├── public/                 
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/anuja112/Tiny-Library.git

# Move into the project folder
cd Tiny-Library

# Install dependencies
npm install
```

> If the app lives in a nested `tiny-library` folder in your clone, `cd` into that folder before running `npm install`.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Run ESLint |

---

## 🗺️ Routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/books` | All books, with search (`/books?q=term`) |
| `/books/[id]` | Details for a single book |
| `/books/categories/[categoryName]` | Books in a given category |
| `/about` | About Tiny Library |
| `/about/contact` | Contact information |

---

## 🔮 Future Improvements

- Real book cover images instead of the placeholder
- User accounts with liked or saved books
- A database or API in place of local JSON
- Sorting (most liked, newest) and pagination
- Working contact form

---

## 📄 License

This project is for learning and portfolio purposes. Add a license of your choice if you plan to share or reuse it.
