import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className=" max-w-screen-xl grid grid-cols-12 grid-rows-2 m-auto px-6 gap-2 lg:px-20 h-[60vh] md:h-[50vh]">
        <Link
          to={"/productListings/furnitures"}
          className="h-full w-full col-span-6 md:col-span-6 md:row-span-2"
        >
          <div className="imgWrapper w-full relative h-full">
            <img
              src="../../../public/img/header/home-img-1.jpg"
              alt="furniture image"
              className="object-cover w-full h-full"
            />
            <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
              <p className="ml-4 mb-4 text-white text-xl  sm:text-3xl  font-bold">
                Live Comfortably
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={"/productListings/skinCare"}
          className="h-full w-full col-span-6 md:col-span-3 md:row-span-2"
        >
          <div className="imgWrapper relative h-full">
            <img
              src="../../../public/img/header/home-img-2.jpg"
              alt="skin care product"
              className="object-cover w-full h-full"
            />
            <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
              <p className="ml-4 mb-4 text-white text-xl  sm:text-3xl font-bold">
                Skin Care
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={"/productListings/kitchen"}
          className="h-full w-full col-span-6 md:col-span-3 md:row-span-1"
        >
          <div className="imgWrapper relative w-full h-full">
            <img
              src="../../../public/img/header/home-img-3.jpg"
              alt="kitchen"
              className="object-cover w-full h-full"
            />
            <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
              <p className="ml-4 mb-4 text-white text-xl  sm:text-3xl font-bold">
                Kitchen
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={"/productListings/electronics"}
          className="h-full w-full col-span-6 md:col-span-3 md:row-span-1"
        >
          <div className="imgWrapper relative w-full h-full">
            <img
              src="../../../public/img/header/home-img-4.jpg"
              alt="electronics"
              className="object-cover w-full   h-full"
            />
            <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
              <p className="ml-4 mb-4 text-white text-xl  sm:text-3xl font-bold">
                Electronics
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default HeroSection;
