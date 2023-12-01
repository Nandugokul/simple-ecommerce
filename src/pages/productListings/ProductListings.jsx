import NavBar from "../../ui/NavBar";
import Footer from "../../ui/Footer.jsx";
import { items } from "../../data/AllData";
import SingelProduct from "../../ui/SingleProduct";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductListings() {
  const itemCategoryList = items;
  const [category, setCategory] = useState(itemCategoryList);
  const [categoryName, setCategoryName] = useState("All");
  const categoryToDisplay = useParams();

  useEffect(() => {
    changeCategory(categoryToDisplay.category);
  }, []);

  const changeCategory = (category) => {
    setCategoryName(category);
    switch (category) {
      case "all":
        setCategory(items);
        break;
      case "furnitures":
        setCategory(items.filter((item) => item.category === "furniture"));
        break;
      case "electronics":
        setCategory(items.filter((item) => item.category === "electronic"));
        break;
      case "lamps":
        setCategory(items.filter((item) => item.category === "lamp"));
        break;
      case "kitchen":
        setCategory(items.filter((item) => item.category === "kitchen"));
        break;
      case "chairs":
        setCategory(items.filter((item) => item.category === "chair"));
        break;
      case "skinCare":
        setCategory(items.filter((item) => item.category === "skin-care"));
        break;
    }
  };

  return (
    <>
      <NavBar />
      <section className="max-w-screen-xl m-auto relative px-20">
        <Link to={"/"}>
          <button className="font-medium absolute  top-0 left-20">
            {"<"} Home
          </button>
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-3xl uppercase"> {categoryName}</h1>
          <div className="space-x-3 my-16">
            <span
              onClick={() => {
                changeCategory("all");
              }}
              className="border-2 cursor-pointer border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300 "
            >
              All
            </span>
            <span
              onClick={() => {
                changeCategory("furnitures");
              }}
              className="border-2 cursor-pointer border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Furnitures
            </span>
            <span
              onClick={() => {
                changeCategory("electronics");
              }}
              className="border-2 cursor-pointer border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Electronics
            </span>
            <span
              onClick={() => {
                changeCategory("lamps");
              }}
              className="border-2 cursor-pointer border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Lamps
            </span>
            <span
              onClick={() => {
                changeCategory("kitchen");
              }}
              className="border-2 cursor-pointer border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Kitchen
            </span>
            <span
              onClick={() => {
                changeCategory("chairs");
              }}
              className="border-2 cursor-pointer border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Chairs
            </span>
            <span
              onClick={() => {
                changeCategory("skinCare");
              }}
              className="border-2 cursor-pointer border-solid border-black/20 px-3 py-1 hover:border-black/60 transition duration-300"
            >
              Skin Care
            </span>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl m-auto grid grid-cols-4 gap-4 px-20">
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
      <Footer />
    </>
  );
}
export default ProductListings;
