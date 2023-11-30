/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function SingleItemInCart(props) {
  const [cartItem, setCartItem] = useState(props.cartItemData);
  const [cartItemEdited, setCartItemEdited] = useState(false);
  const [priceAndQuantityChange, setPriceAndQuantityChange] = useState({
    price: cartItem.price,
    quantity: 1,
  });

  useEffect(() => {
    setCartItem(props.cartItemData);
  }, [props.cartItemData]);

  const handlePriceAndQuantityChange = (func) => {
    if (func === "inc") {
      setPriceAndQuantityChange((prevPriceChange) => ({
        ...prevPriceChange,
        quantity: prevPriceChange.quantity + 1,
        price: cartItem.price * (prevPriceChange.quantity + 1),
      }));
      setCartItemEdited(true);
    } else if (func === "dec" && priceAndQuantityChange.quantity > 1) {
      setPriceAndQuantityChange((prevPriceChange) => ({
        ...prevPriceChange,
        quantity: prevPriceChange.quantity - 1,
        price: cartItem.price * (prevPriceChange.quantity - 1),
      }));
      setCartItemEdited(true);
    }
  };

  return (
    <>
      <div className="flex w-full border-black border-2 mt-8  justify-between h-[15vh]">
        <img className="h-full p-4" src={cartItem.productImage} alt="" />
        <div className=" flex-grow p-4 items-center relative bg-[#e5e5e5] flex justify-between">
          <div>
            <h4 className="font-medium text-xl mb-4">{cartItem.productName}</h4>
            <div className="border-2 border-black w-fit ">
              <button
                onClick={() => {
                  handlePriceAndQuantityChange("dec");
                }}
                className="py-1 px-3 text-black hover:text-white hover:bg-red-300 border-e-2 border-black"
              >
                -
              </button>
              <span className="py-1 px-3">
                {cartItemEdited
                  ? priceAndQuantityChange.quantity
                  : cartItem.quantity}
              </span>
              <button
                onClick={() => {
                  handlePriceAndQuantityChange("inc");
                }}
                className="py-1 px-3 text-black hover:text-white hover:bg-red-300 border-s-2 border-black"
              >
                +
              </button>
            </div>
          </div>
          <h1 className="font-bold text-3xl mr-[15%]">
            {cartItemEdited ? priceAndQuantityChange.price : cartItem.price}$
          </h1>

          <img
            className="w-[1rem] absolute top-2 right-2"
            src="../../../../public/img/icons/closeIcon.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
export default SingleItemInCart;
