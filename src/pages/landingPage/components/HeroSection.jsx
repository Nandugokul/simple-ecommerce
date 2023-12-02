import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="sm:h-auto md:h-auto lg:h-[60vh] w-full max-w-screen-xl m-auto sm:block md:block lg:flex justify-center px-20">
      <div className="sm:flex sm:h-[30vh] md:h-[30vh] lg:h-auto md:flex lg:flex sm:w-full md:w-full lg:w-3/4">
        <Link
          to={"/productListings/furnitures"}
          className="sm:w-full md:w-full lg:grow"
        >
          <div className="imgWrapper sm:h-auto md:h-auto lg:h-full relative mr-1">
            <img
              src="../../../public/img/header/home-img-1.jpg"
              alt=""
              className="sm:w-full md:w-full sm:h-[30vh] md:h-[30vh] lg:w-full lg:h-full object-center object-cover mr-1"
            />
            <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
              <p className="ml-8 mb-8 text-white text-3xl font-bold">
                Live Comfortably
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/productListings/skinCare"}>
          <div className="imgWrapper h-full relative mx-1">
            <img
              src="../../../public/img/header/home-img-2.jpg"
              alt=""
              className="h-full w-full object-center object-cover"
            />
            <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
              <p className="ml-8 mb-8 text-white text-3xl font-bold">
                Skin care
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-rows-2 gap-2 h-[60vh] ml-1">
        <Link to={"/productListings/kitchen"}>
          <div className="imgWrapper h-full relative ">
            <img
              src="../../../public/img/header/home-img-3.jpg"
              alt=""
              className="h-full object-center object-cover"
            />
            <div className="maskingDiv absolute top-0 left-0 w-full h-full  bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
              <p className="ml-8 mb-8 text-white text-2xl font-bold">Kitchen</p>
            </div>
          </div>
        </Link>
        <Link to={"/productListings/electronics"}>
          <div className="imgWrapper h-full relative ">
            <img
              src="../../../public/img/header/home-img-4.jpg"
              alt=""
              className="object-center h-full object-cover"
            />
            <div className="maskingDiv absolute top-0 left-0 w-full h-full  bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
              <p className="ml-8 mb-8 text-white text-2xl font-bold">
                Electronics
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default HeroSection;
