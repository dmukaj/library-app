import { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { FavoritesContext } from "../FavoritesContext";
import { Link } from "react-router-dom";
import apiClient from "../services/api-client";

function CheckOut() {
  const { items, setItems, removeFromCart, cartTotal } =
    useContext(FavoritesContext);
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const handleQuantityChange = (item, quantity) => {
    const newQuantity = Math.max(quantity, 1);
    const existingItemIndex = items.findIndex(
      (cartItem) => cartItem._id === item._id
    );
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity = newQuantity;
      setItems(updatedItems);
    }
    console.log(item, quantity);
  };

  const handlePurchase = async () => {
    try {
      const purchaseData = {
        products: items.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
      };

      const response = await apiClient.post("/purchases", purchaseData);

      setItems([]);
      setIsPurchaseComplete(true);

      console.log(response);
    } catch (error) {
      console.error("Error during purchase:", error);
    }
  };

  return (
    <section className="container mx-auto border-2 shadow-xl mt-10 rounded-md">
      <div className="flex flex-col p-6 space-y-4 sm:p-10 dark:text-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold">Your cart</h2>

        {items.map((item) => (
          <ul key={item._id} className="flex flex-col divide-y divide-gray-700">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-fit w-15 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={item.image}
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex w-full pb-2 space-x-2">
                    <div>
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="text-md font-semibold">${item.price}</p>
                      <p className="text-sm line-through dark:text-gray-600">
                        $19.99
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <BsTrash />
                      <span>Remove</span>
                    </button>
                    <ul className="flex">
                      <li key={item._id}>
                        Quantity: {item.quantity}
                        {""}
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 space-x-1"
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                        >
                          <AiOutlinePlusCircle />
                        </button>
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 space-x-1"
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                        >
                          <AiOutlineMinusCircle />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ))}

        <div className="space-y-1 text-right text-lg">
          <p>
            Total amount: ${cartTotal(items)}
            <span className="font-semibold">{}</span>
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link
            to="/books"
            className="px-6 py-2 border-2 rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400 hover:bg-gray-200 hover:font-bold hover:border-black"
          >
            Back to shop
          </Link>
          <div>
            <button
              type="button"
              onClick={() => handlePurchase()}
              disabled={isPurchaseComplete}
              className="px-6 py-2 border-2 rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400 hover:bg-gray-200 hover:font-bold hover:border-black"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
