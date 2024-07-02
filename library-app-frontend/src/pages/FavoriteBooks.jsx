import apiClient from "../api/api-client";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavoritesContext } from "../auth/FavoritesContext";

function FavoriteBooks() {
  const [favorites, setFavorites] = useState([]);

  const { items, getTotalQuantity, removeFromFavorites } =
    useContext(FavoritesContext);

  const handleRemove = (book) => {
    removeFromFavorites(book);
    getTotalQuantity(favorites);

    apiClient
      .post("/favorites", {
        _id: book._id,
        favorited: false,
      })
      .then((res) => {
        setFavorites((prevFavorites) =>
          prevFavorites.filter((favBook) => favBook._id !== book._id)
        );
      });
  };

  useEffect(() => {
    apiClient.get("/favorites").then((res) => setFavorites(res.data));
  }, []);

  return (
    <section className="py-6 dark:bg-gray-900">
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className=" grid grid-cols-4 gap-16 p-4 mt-20 mx-auto md:grid-cols-4">
          {favorites?.map((book) => (
            <div
              key={book._id}
              className="overflow-hidden bg-blue-400 cursor-pointer rounded-xl relative group"
            >
              <div className="flex flex-col items-center pt-30 text-white bg-gray-900 bg-opacity-90 space-y-3 text-2xl pb-10 transform w-fullrounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2">
                <h5>{book.title}</h5>
                <button onClick={() => handleRemove(book)}>
                  {book.favorited === true ? <FaHeart /> : <FaRegHeart />}
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

export default FavoriteBooks;
