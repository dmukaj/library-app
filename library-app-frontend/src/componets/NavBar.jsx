import { useContext, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsBook as Catalog } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../FavoritesContext";
import { FaHeart } from "react-icons/fa";

function NavBar() {
  const { getTotalQuantity } = useContext(FavoritesContext);
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="hidden md:flex border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-grey-400 space-x-2">
          <NavLink
            to="/profile"
            className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            <CgProfile className="w-5 h-5 mr-2 text-gray-500 dark:text-blue-500" />
            Profile
          </NavLink>

          <NavLink
            to="/"
            className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            <AiFillHome className="w-5 h-5 mr-2 text-gray-500 dark:text-blue-500" />
            Home
          </NavLink>

          <NavLink
            to="/books"
            className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            <Catalog className="w-5 h-5 mr-2 text-gray-500 dark:text-blue-500" />
            Catalog
          </NavLink>

          <NavLink
            to="/favoriteBooks"
            className="relative inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            <FaHeart className="w-5 h-5 mr-2 text-gray-500 dark:text-blue-500" />
            Favorites
            {getTotalQuantity() > 0 ? (
              <div className="absolute transition-opacity inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1 dark:border-gray-900">
                {getTotalQuantity()}
              </div>
            ) : (
              ""
            )}
          </NavLink>
        </ul>
      </div>
      <div className="md:hidden lg:hidden">
        {!toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setToggle(!toggle)}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="m-2 w-6 h-6 cursor-pointer stroke-width-1.5 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setToggle(!toggle)}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="m-2 w-6 h-6 cursor-pointer stroke-width-1.5 float-right dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        {toggle ? (
          <div className=" dark:text-white font-medium">
            <ul className="mt-8 p-2">
              <NavLink
                to="/profile"
                className="p-3 transition-all hover:scale-110 cursor-pointer"
              >
                Profile
              </NavLink>

              <NavLink
                to="/"
                className="p-3  transition-all hover:scale-110 cursor-pointer"
              >
                Home
              </NavLink>

              <NavLink
                to="/books"
                className="p-3 transition-all hover:scale-110 cursor-pointer"
              >
                Catalog
              </NavLink>
              <NavLink
                to="/favoriteBooks"
                className="p-3 transition-all hover:scale-110 cursor-pointer"
              >
                Check Out
              </NavLink>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default NavBar;
