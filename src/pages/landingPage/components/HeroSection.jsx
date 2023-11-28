function HeroSection() {
  return (
    <div className="grid h-[50vh] grid-cols-8 gap-3 w-full max-w-screen-xl m-auto">
      <div className="imgWrapper h-full col-span-4 relative">
        <img
          src="../../../public/img/header/home-img-1.jpg"
          alt=""
          className=" w-full h-[50vh] object-center object-cover"
        />
        <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
          <p className="ml-8 mb-8 text-white text-3xl font-bold">
            Live Comfortably
          </p>
        </div>
      </div>
      <div className="imgWrapper h-full col-span-2 relative">
        <img
          src="../../../public/img/header/home-img-2.jpg"
          alt=""
          className=" w-full h-[50vh] object-center object-cover"
        />
        <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
          <p className="ml-8 mb-8 text-white text-3xl font-bold">Skin care</p>
        </div>
      </div>
      <div className="grid grid-rows-2 col-span-2 gap-3">
        <div className="imgWrapper h-full relative">
          <img
            src="../../../public/img/header/home-img-3.jpg"
            alt=""
            className=" w-full h-full object-center object-cover"
          />
          <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
            <p className="ml-8 mb-8 text-white text-2xl font-bold">Kitchen</p>
          </div>
        </div>
        <div className="imgWrapper h-full relative">
          <img
            src="../../../public/img/header/home-img-4.jpg"
            alt=""
            className=" w-full h-full object-center object-cover"
          />
          <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
            <p className="ml-8 mb-8 text-white text-2xl font-bold">
              Electronics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
