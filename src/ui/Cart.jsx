/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function Cart(props) {
  const [cartOpen, setCartOpen] = useState(props.cartOpen);

  useEffect(() => {
    setCartOpen(props.cartOpen);
  }, [props.cartOpen]);

  return (
    <>
      <section className={`${cartOpen ? "block" : "hidden"} `}>
        <div
          onClick={() => {
            setCartOpen(false);
            props.cartClose(false);
          }}
          className="fixed right-0 top-0 h-[100vh] w-full bg-black/50 z-10"
        ></div>

        <div className="fixed right-0 top-0 h-[100vh] w-1/2 bg-white p-8 z-20">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">
              Your shoping cart{"("}0{")"}
            </h1>
            <img
              onClick={() => {
                setCartOpen(false);
                props.cartClose(false);
              }}
              className="w-[1.5rem]"
              src="../../public/img/icons/closeIcon.svg"
              alt="close Icon"
            />
          </div>
          <div className="w-full h-[90vh] flex flex-col justify-center items-center">
            <img
              className="w-1/3"
              src="../../public/img/cart/empty-cart.png"
              alt=""
            />
            <h4 className="text-xl font-medium my-8">Your cart is empty</h4>
            <button
              onClick={() => {
                setCartOpen(false);
                props.cartClose(false);
              }}
              className=" text-xl font-semibold px-6 py-3 bg-transparent text-black hover:bg-black hover:text-white border-2 border-solid border-black"
            >
              Keep shoping
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cart;
