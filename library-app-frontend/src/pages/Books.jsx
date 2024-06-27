import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Books() {
  const [books, setBooks] = useState();
  const [favorite, setFavorite] = useState(false);
  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleFavorite = (book) => {
    console.log(book);
    addToCart(book);
    setFavorite((prevState) => !prevState);
    removeFromCart(book);
  };

  useEffect(() => {
    apiClient.get("/books").then((res) => setBooks(res.data));
  }, []);
  console.log(books);
  return (
    <section className="py-6 dark:bg-gray-900">
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className=" grid grid-cols-4 gap-16 p-4 mt-20 mx-auto md:grid-cols-4">
          {books?.map((book) => (
            <div
              key={book._id}
              className="overflow-hidden bg-blue-400 cursor-pointer rounded-xl relative group"
            >
              <div className="flex flex-col items-center pt-30 text-white bg-gray-900 bg-opacity-90 space-y-3 text-2xl pb-10 transform w-fullrounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2">
                <h5>{book.title}</h5>

                <button onClick={() => handleFavorite(book)}>
                  {favorite ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              <img
                alt=""
                className="object-cover group-hover:scale-110 cursor-pointer duration-300 ease-in-out transition-all w-full h-full"
                src={
                  book?.imageLink
                    ? `/src/assets/${book.imageLink}`
                    : "/src/assets/images/default.jpg"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Books;
