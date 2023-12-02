import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function NavBar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [navBarShrink, setNavBarShrink] = useState(false);
  const [noOfItemsInCart, setNoOfItemsInCart] = useState("0");

  const cartClose = () => {
    setCartOpen(false);
  };

  const getNumberOfItemsInCart = (data) => {
    setNoOfItemsInCart(data);
  };
  const handleScroll = () => {
    console.log(window.scrollY);
    window.scrollY > 10 ? setNavBarShrink(true) : setNavBarShrink(false);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="shadow-[0_4px_6px_-6px_rgba(0,0,0,0.3)] sticky top-0 z-50 bg-white">
        <div
          className={`flex items-center justify-between max-w-screen-xl m-auto mb-8 px-20 transition-all duration-100 ${
            navBarShrink ? "py-0" : "py-4 "
          }`}
        >
          <Link to={"/"}>
            <img
              src="../../../public/img/newlogo2.png"
              alt="logo"
              className="w-20 cursor-pointer"
            />
          </Link>
          <div className="flex space-x-8">
            <Link to={"/productListings/All"}>CATEGORIES</Link>
            <Link to={"/productPage/loadFromHome"}>PRODUCT PAGE</Link>
            <div className="relative">
              <img
                onClick={() => {
                  setCartOpen(true);
                }}
                src="../../../public/img/icons/icons8-cart.gif"
                alt="cartIcon"
                className="w-6 h-6 cursor-pointer"
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
