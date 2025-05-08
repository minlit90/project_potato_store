"use client";

import { useState } from "react";

interface Dbtest {
  onCreated: () => void;
}

export default function Dbtest({ onCreated }: Dbtest) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleClick = async () => {
    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        author,
        year: parseInt(year),
      }),
    });
    if (res.ok) {
      setTitle("");
      setAuthor("");
      setYear("");
      onCreated();
    }
  };

  return (
    <div className="mt-2.5 flex items-center gap-1.5">
      <input
        type="text"
        placeholder="도서 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-black rounded-sm h-10 px-2 focus:outline-none"
      />
      <input
        type="text"
        placeholder="저자"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border border-black rounded-sm h-10 px-2 focus:outline-none"
      />
      <input
        type="number"
        placeholder="출간 연도"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border border-black rounded-sm h-10 px-2 focus:outline-none"
      />
      <button
        onClick={handleClick}
        className="bg-black px-4 h-10 rounded-sm text-white cursor-pointer"
      >
        도서 생성
      </button>
    </div>
  );
}
