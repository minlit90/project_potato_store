import { useState, useEffect } from "react";
import Like from "../Like/Like";
import Bookadd from "./Bookadd";

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
};

export default function Booklist() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const res = await fetch("/api/books");
      if (!res.ok) throw new Error("Failed to fetch books");
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Error loading books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} ({book.year})
            <Like />
          </li>
        ))}
      </ul>
      <Bookadd onCreated={fetchBooks} />
    </>
  );
}
