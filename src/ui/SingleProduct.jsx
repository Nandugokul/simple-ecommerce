/* eslint-disable react/prop-types */
function SingleProduct(props) {
  return (
    <div
      className={`border-solid border-2 border-black/30  hover:border-black duration-300 flex flex-col justify-between cursor-pointer ${props.styles}`}
    >
      <img src={props.imgSrc} alt="" className="w-full" />
      <div className="pl-2 pb-2">
        <p className="mt-4">{props.itemName}</p>
        <p className="font-bold mt-2 text-2xl">{`${props.price}$`}</p>
      </div>
    </div>
  );
}
export default SingleProduct;
