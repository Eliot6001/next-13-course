import React from "react";
import Link from "next/link";
async function fetchBooks() {
  const res = await fetch("http:localhost:3000/api/books");
  const jsonRes = await res.json();
  return jsonRes;
}
const BooksComponent = async () => {
  const booksData = await fetchBooks();
  console.log(...booksData);
  // Component implementation
  return (
    <div className="flex gap-3 w-full flex-wrap items-stretch justify-stretch">
      {booksData?.map((book) => {
        const { name, description, author, price, link } = book;
        return (
            <Link href={link ? link : ""} className="flex flex-col w-1/4 max-sm:w-full border py-5 px-6">
              <span>{name}</span>
              <span>{description}</span>
              <span>{author}</span>
              <span>{price}</span>
            </Link>
        );
      })}
    </div>
  );
};

export default BooksComponent;
