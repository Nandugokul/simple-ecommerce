import { items } from "../../../data/AllData.js";
import SingleProduct from "../../../ui/SingleProduct.jsx";

function ProductDisplay() {
  const limitedItems = items.slice(0, 8);
  return (
    <>
      <section className="max-w-screen-xl m-auto mt-28 px-6 lg:px-20">
        <h4 className="text-2xl font-medium mb-10">Products we are proud of</h4>
        <div className="grid min-[320px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {limitedItems.map((item) => (
            <SingleProduct
              key={item.id}
              id={item.id}
              imgSrc={item.img}
              itemName={item.description}
              price={item.price}
              styles={"h-full"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default ProductDisplay;
