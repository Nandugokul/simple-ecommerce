import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import logo from "../../public/img/newlogo2.png";
import cartIconGif from "../../public/img/icons/icons8-cart.gif";
import cartIconStatic from "../../public/img/icons/cartIconStatic.png";
import burgerMenu from "../../public/img/icons/circleMenu2.svg";
import closeIcon from "../../public/img/icons/closeIcon.svg";

function NavBar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [navBarShrink, setNavBarShrink] = useState(false);
  const [noOfItemsInCart, setNoOfItemsInCart] = useState("0");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const cartClose = () => {
    setCartOpen(false);
  };

  const getNumberOfItemsInCart = (data) => {
    setNoOfItemsInCart(data);
  };
  const handleScroll = () => {
    window.scrollY >= 40 ? setNavBarShrink(true) : setNavBarShrink(false);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="shadow-[0_4px_6px_-6px_rgba(0,0,0,0.3)] sticky top-0 z-30 bg-white">
        <div
          className={`flex items-center justify-between max-w-screen-xl m-auto mb-8 px-6 lg:px-20 transition-all duration-100 ${
            navBarShrink ? "py-0" : "py-4 "
          }`}
        >
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-20 cursor-pointer" />
          </Link>
          <div className="space-x-8 hidden sm:flex">
            <Link
              to={"/productListings/All"}
              className="hover:underline underline-offset-4"
            >
              CATEGORIES
            </Link>
            <Link
              to={"/productPage/loadFromHome"}
              className="hover:underline underline-offset-4"
            >
              PRODUCT OF THE DAY
            </Link>
            <div className="relative">
              <img
                onClick={() => {
                  setCartOpen(true);
                }}
                src={`${noOfItemsInCart > 0 ? cartIconGif : cartIconStatic}`}
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
          <div className="sm:hidden flex space-x-8">
            <div className="relative">
              <img
                onClick={() => {
                  setCartOpen(true);
                }}
                src={`${noOfItemsInCart > 0 ? cartIconGif : cartIconStatic}`}
                alt="cartIcon"
                className="w-6 h-6 cursor-pointer"
              />
              <div
                className={`absolute rounded-full bg-red-700 w-[5px] h-[5px] top-0 right-0 ${
                  noOfItemsInCart > 0 ? "block" : "hidden"
                }`}
              ></div>
            </div>
            <img
              src={burgerMenu}
              alt="burger menu"
              className="w-5"
              onClick={() => {
                setHamburgerOpen(true);
              }}
            />
          </div>
        </div>

        <Cart
          cartOpen={cartOpen}
          cartClose={cartClose}
          numberOfItemsInside={getNumberOfItemsInCart}
        />
      </div>
      <div
        className={`flex flex-col space-y-4 top-0 fixed w-[70vw] h-full z-50 bg-white items-start  pt-6 ${
          hamburgerOpen ? "block" : "hidden"
        }`}
      >
        <div className="shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)] w-full">
          <Link
            onClick={() => {
              setHamburgerOpen(false);
            }}
            to={"/"}
          >
            <img
              src={logo}
              alt="logo"
              className="w-20 cursor-pointer ml-6 mb-6"
            />
          </Link>
        </div>
        <Link
          onClick={() => {
            setHamburgerOpen(false);
          }}
          className="pl-6"
          to={"/"}
        >
          HOME
        </Link>
        <Link
          onClick={() => {
            setHamburgerOpen(false);
          }}
          className="pl-6"
          to={"/productListings/All"}
        >
          CATEGORIES
        </Link>
        <Link
          onClick={() => {
            setHamburgerOpen(false);
          }}
          className="pl-6"
          to={"/productPage/loadFromHome"}
        >
          PRODUCT OF THE DAY
        </Link>
        <div
          onClick={() => {
            setHamburgerOpen(false);
            setCartOpen(true);
          }}
          className="pl-6"
        >
          CART
        </div>
        <img
          src={closeIcon}
          alt="close icon"
          className="w-6 absolute top-[-0.5rem] right-[0.5rem]"
          onClick={() => {
            setHamburgerOpen(false);
          }}
        />
      </div>
      <div
        onClick={() => {
          setHamburgerOpen(false);
        }}
        className={`bg-black/50 w-full h-full top-0 fixed z-40 ${
          hamburgerOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
}
export default NavBar;
