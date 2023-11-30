import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

function NavBar() {
  const [cartOpen, setCartOpen] = useState(false);

  const cartClose = () => {
    setCartOpen(false);
  };

  return (
    <>
      <div className="shadow-[0_4px_6px_-6px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between max-w-screen-xl m-auto hover:cursor-pointer py-4 mb-8 ">
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
            <img
              onClick={() => {
                setCartOpen(true);
              }}
              src="../../../public/img/icons/icons8-cart.gif"
              alt="cartIcon"
              className="w-6 h-6"
            />
          </div>
        </div>
        <Cart cartOpen={cartOpen} cartClose={cartClose} />
      </div>
    </>
  );
}
export default NavBar;
