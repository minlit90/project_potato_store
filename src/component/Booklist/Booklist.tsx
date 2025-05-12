import { useState, useEffect } from "react";
import Like from "../Like/Like";
import Bookadd from "./Bookadd";

type Book = {
  id: number;
  title: String;
  author: String;
  year: number;
};

export default function Booklist() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const res = await fetch("/api/books");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //삭제
  // const handleDelete = async (id: number) => {
  //   try {
  //     const res = await fetch(`/api/books/${id}`, {
  //       method: "DELETE",
  //     });

  //     if (res.ok) {
  //       setBooks((prev) => prev.filter((book) => book.id !== id));
  //     } else {
  //       alert("삭제 실패 !");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} ({book.year})
            <Like />
            {/* <button
              onClick={() => handleDelete(book.id)}
              className="border border-black px-1 rounded-md text-xs"
            >
              삭제
            </button> */}
          </li>
        ))}
      </ul>
      <Bookadd onCreated={fetchBooks} />
    </>
  );
}
