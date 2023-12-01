import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function NavBar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [noOfItemsInCart, setNoOfItemsInCart] = useState("0");

  const cartClose = () => {
    setCartOpen(false);
  };

  const getNumberOfItemsInCart = (data) => {
    setNoOfItemsInCart(data);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="shadow-[0_4px_6px_-6px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between max-w-screen-xl m-auto hover:cursor-pointer py-4 mb-8 px-20">
          <Link to={"/"}>
            <img
              src="../../../public/img/newlogo2.png"
              alt="logo"
              className="w-20"
            />
          </Link>
          <div className="flex space-x-8">
            <Link to={"/productListings/category"}>CATEGORIES</Link>
            <Link to={"/productPage/loadFromHome"}>PRODUCT PAGE</Link>
            <div className="relative">
              <img
                onClick={() => {
                  setCartOpen(true);
                }}
                src="../../../public/img/icons/icons8-cart.gif"
                alt="cartIcon"
                className="w-6 h-6  "
              />
              <div
                className={`absolute rounded-full bg-red-700 w-[5px] h-[5px] top-0 right-0 ${
                  noOfItemsInCart > 0 ? "block" : "hidden"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <Cart
          cartOpen={cartOpen}
          cartClose={cartClose}
          numberOfItemsInside={getNumberOfItemsInCart}
        />
      </div>
    </>
  );
}
export default NavBar;
