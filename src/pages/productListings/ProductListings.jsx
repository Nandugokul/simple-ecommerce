import NavBar from "../../ui/NavBar";
import { items } from "../../data/AllData";
import SingelProduct from "../../ui/SingleProduct";
import { useState } from "react";

function ProductListings() {
  const [category, setCategory] = useState(items);

  const changeCategory = (category) => {};

  return (
    <>
      <NavBar />
      <section className="max-w-screen-xl m-auto relative">
        <button className="font-medium absolute  top-0 left-0">
          {"<"} Home
        </button>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-3xl "> All</h1>
          <div className="space-x-6 my-16">
            <span
              onClick={() => {
                changeCategory("all");
              }}
              className="border-2 border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              All
            </span>
            <span
              onClick={() => {
                changeCategory("furnitures");
              }}
              className="border-2 border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Furnitures
            </span>
            <span
              onClick={() => {
                changeCategory("electronics");
              }}
              className="border-2 border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Electronics
            </span>
            <span
              onClick={() => {
                changeCategory("lamps");
              }}
              className="border-2 border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Lamps
            </span>
            <span
              onClick={() => {
                changeCategory("kitchen");
              }}
              className="border-2 border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Kitchen
            </span>
            <span
              onClick={() => {
                changeCategory("chairs");
              }}
              className="border-2 border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Chairs
            </span>
            <span
              onClick={() => {
                changeCategory("skinCare");
              }}
              className="border-2 border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Skin Care
            </span>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl m-auto grid grid-cols-4 gap-4">
        {category.map((item) => (
          <SingelProduct
            key={item.id}
            id={item.id}
            imgSrc={item.img}
            itemName={item.description}
            price={item.price}
          />
        ))}
      </section>
    </>
  );
}
export default ProductListings;
