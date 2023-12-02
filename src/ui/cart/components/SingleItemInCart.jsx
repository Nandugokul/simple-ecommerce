/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../../store/Store";

function SingleItemInCart(props) {
  const cartDispatch = useDispatch();
  const [cartItem, setCartItem] = useState(props.cartItemData);

  useEffect(() => {
    setCartItem(props.cartItemData);
  }, [props.cartItemData]);

  const handleRemoveItem = (e) => {
    cartDispatch(cartSliceActions.removeItem(e.target.id));
  };
  const handleQuantityChange = (func, id) => {
    cartDispatch(cartSliceActions.changeQuantity({ func: func, uniqueId: id }));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:flex w-full border-black border-2 mt-8 justify-between h-fit md:h-[20vh]">
        <img
          className="h-auto w-1/2 md:w-auto md:h-full p-4 m-auto"
          src={cartItem.productImage}
          alt="product image"
        />
        <div className=" flex-grow w-full p-4 items-center relative bg-[#e5e5e5] flex justify-between">
          <div>
            <h4 className="font-medium text-xl mb-4">{cartItem.productName}</h4>
            <div className="border-2 border-black w-fit">
              <button
                value={cartItem.uniqueId}
                onClick={(e) => {
                  handleQuantityChange("dec", e.target.value);
                }}
                className="py-1 px-3 text-black hover:text-white hover:bg-red-300 border-e-2 border-black"
              >
                -
              </button>
              <span className="py-1 px-3">{cartItem.quantity}</span>
              <button
                value={cartItem.uniqueId}
                onClick={(e) => {
                  handleQuantityChange("inc", e.target.value);
                }}
                className="py-1 px-3 text-black hover:text-white hover:bg-red-300 border-s-2 border-black"
              >
                +
              </button>
            </div>
          </div>
          <h1 className="font-bold text-3xl mr-[15%]">
            {cartItem.productPrice * cartItem.quantity}$
          </h1>

          <img
            className="w-[1rem] absolute top-2 right-2"
            src="../../../../public/img/icons/closeIcon.svg"
            alt="close icon"
            id={cartItem.uniqueId}
            onClick={handleRemoveItem}
          />
        </div>
      </div>
    </>
  );
}
export default SingleItemInCart;
