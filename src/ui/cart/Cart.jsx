/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleItemInCart from "./components/SingleItemInCart";
import { v4 as uuidv4 } from "uuid";

function Cart(props) {
  const [itemsInsideCart, setItemsInsideCart] = useState([]);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const cartUpdate = useSelector((state) => state.cartUpdate);
  const [cartOpen, setCartOpen] = useState(props.cartOpen);

  useEffect(() => {
    setCartOpen(props.cartOpen);
  }, [props.cartOpen]);

  useEffect(() => {
    if (cartUpdate.quantity > 0) {
      const updatedCartItem = { ...cartUpdate, uniqueId: uuidv4() };
      setItemsInsideCart((prevItems) => [...prevItems, updatedCartItem]);
    }
  }, [cartUpdate]);

  useEffect(() => {
    let totalValue = 0;
    itemsInsideCart.forEach((item) => {
      totalValue = totalValue + item.price;
    });
    setTotalCartValue(totalValue);
    props.numberOfItemsInside(itemsInsideCart.length);
  }, [itemsInsideCart]);

  const handleItemRemoval = (uniqueId) => {
    let FilteredArray = itemsInsideCart.filter(
      (item) => item.uniqueId !== uniqueId
    );
    setItemsInsideCart(FilteredArray);
  };

  const handleQuantityChange = (func, uniqueId) => {
    if (func === "inc") {
      let newArray = itemsInsideCart.map((item) =>
        item.uniqueId === uniqueId
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.productPrice,
            }
          : item
      );
      setItemsInsideCart(newArray);
    }
    if (func === "dec") {
      let newArray = itemsInsideCart.map((item) =>
        item.uniqueId === uniqueId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.productPrice,
            }
          : item
      );
      setItemsInsideCart(newArray);
    }
  };
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

        <div className="fixed right-0 top-0 h-[100vh] w-[50vw] bg-white p-8 z-20">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">
              Your shoping cart{"("}
              {itemsInsideCart.length}
              {")"}
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
          <div
            className={`w-full h-[90vh] flex flex-col justify-center items-center ${
              itemsInsideCart.length > 0 ? "hidden" : "block"
            }`}
          >
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
          <div className={`${itemsInsideCart.length > 0 ? "block" : "hidden"}`}>
            <div className="h-[70vh] overflow-y-scroll p-4">
              {itemsInsideCart.map((item) => (
                <SingleItemInCart
                  key={item.uniqueId}
                  cartItemData={item}
                  dataToBeRemoved={handleItemRemoval}
                  QuantityChange={handleQuantityChange}
                />
              ))}
            </div>
            <div className="border-dashed border-t-2 border-black flex justify-between p-8">
              <div>
                <h4 className="text-2xl font-bold mt-2 ">Subtotal</h4>
                <h4 className="text-3xl font-bold mt-1">{totalCartValue}$</h4>
              </div>
              <button className="border-2 border-black py-3 p-10 h-fit text-xl font-medium hover:text-white hover:bg-black">
                Check out
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cart;
