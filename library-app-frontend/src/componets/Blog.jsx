import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

export default function Blog() {
  const [books, setBooks] = useState();
  useEffect(() => {
    apiClient.get("/books").then((res) => setBooks(res.data));
  }, []);
  console.log(books);

  return (
    <div>
      <h2 className="text-white text-5xl font-bold text-center mt-10 p-4">
        Your Favourite Books
      </h2>
      <div className=" px-20 relative w-full flex space-x-20 gap-4 py-6 overflow-x-auto scroll-m-0">
        {books?.map((book) => {
          return (
            <img
              className="h-48 aspect-video rounded-sm object-cover object-center"
              src={
                book?.imageLink
                  ? `/src/assets/${book.imageLink}`
                  : "/src/assets/images/default.jpg"
              }
              key={book._id}
            />
          );
        })}
      </div>
    </div>
  );
}
