import { items } from "../../../data/AllData.js";
import SingleProduct from "../../../ui/SingleProduct.jsx";

function ProductDisplay() {
  const limitedItems = items.slice(0, 8);
  return (
    <>
      <div className="max-w-screen-xl m-auto mt-28">
        <h4 className="text-2xl font-medium mb-10">Products we are proud of</h4>
        <div className="grid grid-cols-4 gap-4 ">
          {limitedItems.map((item) => (
            <SingleProduct
              key={item.id}
              id={item.id}
              imgSrc={item.img}
              itemName={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default ProductDisplay;
