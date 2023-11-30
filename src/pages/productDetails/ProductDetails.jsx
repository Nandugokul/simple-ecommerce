/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import NavBar from "../../ui/NavBar.jsx";
import { items } from "../../data/AllData.js";
import ProductCarousel from "../landingPage/components/ProductCarousel.jsx";
import Footer from "../../ui/Footer.jsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/Store.jsx";

function SingleProductDisplay() {
  const cartDispatch = useDispatch();
  const { productId } = useParams();
  let productToDisplay;
  if (productId === "loadFromHome") {
    productToDisplay = items[8];
  } else {
    productToDisplay = items.find((obj) => obj.id === Number(productId));
  }

  const [imageChangeOnHover, setImageChangeOnHover] = useState(
    productToDisplay.img
  );
  const [priceChange, setpriceChange] = useState({
    price: productToDisplay.price,
    quantity: 1,
  });

  const handleAddToCart = () => {
    cartDispatch(
      cartSliceActions.getItemToCart({
        productImage: productToDisplay.img,
        quantity: priceChange.quantity,
        price: priceChange.price,
        productName: productToDisplay.description,
        productId: productToDisplay.id,
        productPrice: productToDisplay.price,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setImageChangeOnHover(productToDisplay.img);
    setpriceChange({ quantity: 1, price: productToDisplay.price });
  }, [productToDisplay.id]);

  const handleImageChangeOnMouseOver = (e) => {
    setImageChangeOnHover(e.target.src);
  };
  const handlePriceAndQuantityChange = (func) => {
    if (func === "inc") {
      setpriceChange((prevPriceChange) => ({
        ...prevPriceChange,
        quantity: prevPriceChange.quantity + 1,
        price: productToDisplay.price * (prevPriceChange.quantity + 1),
      }));
    } else if (func === "dec" && priceChange.quantity > 1) {
      setpriceChange((prevPriceChange) => ({
        ...prevPriceChange,
        quantity: prevPriceChange.quantity - 1,
        price: productToDisplay.price * (prevPriceChange.quantity - 1),
      }));
    }
  };
  return (
    <>
      <NavBar />

      <section className="max-w-screen-xl m-auto ">
        <div className="grid lg:grid-cols-2 ">
          <div className="grid grid-rows-[40vh_1fr]">
            <img
              src={imageChangeOnHover}
              alt=""
              className="object-contain h-full w-3/4 mx-auto"
            />
            <div className="grid grid-cols-3 gap-4 mt-4 ">
              <img
                src={productToDisplay.img}
                alt=""
                className="object-contain w-full h-[10vh] m-auto hover:blur-sm"
                onMouseOver={handleImageChangeOnMouseOver}
              />
              <img
                src={productToDisplay.otherImgs[0]}
                alt=""
                className="object-contain w-full h-[10vh] m-auto hover:blur-sm"
                onMouseOver={handleImageChangeOnMouseOver}
              />
              <img
                src={productToDisplay.otherImgs[1]}
                alt=""
                className="object-contain w-full h-[10vh] m-auto hover:blur-sm"
                onMouseOver={handleImageChangeOnMouseOver}
              />
            </div>
          </div>
          <div className="bg-[#e5e5e5]  px-16 py-28">
            <h2 className="font-bold text-4xl mb-6">
              {productToDisplay.description}
            </h2>
            <p>{productToDisplay.specs}</p>
            <div className="grid md:grid-cols-3 my-12">
              <h4 className="text-3xl font-semibold text-center ">Quantity</h4>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    handlePriceAndQuantityChange("dec");
                  }}
                  className="border-2 border-solid border-black px-4 py-2 bg-white hover:bg-transparent"
                >
                  -
                </button>
                <span className="border-2 border-solid border-black px-4 p-2 border-x-0">
                  {priceChange.quantity}
                </span>
                <button
                  onClick={() => {
                    handlePriceAndQuantityChange("inc");
                  }}
                  className="border-2 border-solid border-black px-4 py-2  bg-white hover:bg-transparent"
                >
                  +
                </button>
              </div>
              <span className="text-3xl font-semibold text-center">
                {priceChange.price}$
              </span>
            </div>
            <div className="grid grid-cols-2 ">
              <button
                onClick={handleAddToCart}
                className="border-2 border-solid border-black hover:bg-black hover:text-white font-medium  py-4 mr-2"
              >
                ADD TO CART
              </button>
              <button className="border-2 border-solid border-red-600 bg-red-600 text-white hover:text-red-600 hover:bg-transparent font-medium  py-4 ml-2">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16 my-28">
          <div className="bg-[#e5e5e5] py-6 px-8">
            <h4 className="font-bold text-xl">Texture:</h4>
            <p className="mt-2">{productToDisplay.texture}</p>
          </div>
          <div className="bg-[#e5e5e5] py-6 px-8">
            <h4 className="font-bold text-xl">Weight:</h4>
            <p className="mt-2">{productToDisplay.weight}</p>
          </div>
          <div className="bg-[#e5e5e5] py-6 px-8">
            <h4 className="font-bold text-xl">Size:</h4>
            <p className="mt-2">{productToDisplay.size}</p>
          </div>
        </div>
      </section>

      <ProductCarousel />
      <Footer />
    </>
  );
}
export default SingleProductDisplay;
