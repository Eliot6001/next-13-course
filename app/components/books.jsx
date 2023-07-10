import React from "react";
import Link from "next/link";

async function fetchBooks() {
  const res = await fetch("http:localhost:3000/api/books");
  const jsonRes = await res.json();
  return jsonRes;
}

const BooksComponent = async () => {
  const booksRes = await fetchBooks();
  return (
    <div className="flex flex-col">
      {booksRes?.map((book) => (
        <Link href={book?.link ? book.link : ""}>{book.title}</Link>
      ))}
    </div>
  );
};
export default BooksComponent;

