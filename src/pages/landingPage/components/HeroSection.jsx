function HeroSection() {
  return (
    <div className="h-[60vh] w-full max-w-screen-xl m-auto flex justify-center">
      <div className="flex w-3/4">
        <div className="imgWrapper h-full relative grow mr-1">
          <img
            src="../../../public/img/header/home-img-1.jpg"
            alt=""
            className=" w-full h-[60vh] object-center object-cover mr-1"
          />
          <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
            <p className="ml-8 mb-8 text-white text-3xl font-bold">
              Live Comfortably
            </p>
          </div>
        </div>
        <div className="imgWrapper h-full relative mx-1">
          <img
            src="../../../public/img/header/home-img-2.jpg"
            alt=""
            className=" w-full h-[60vh] object-center object-cover"
          />
          <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
            <p className="ml-8 mb-8 text-white text-3xl font-bold">Skin care</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[60vh] ml-1">
        <div className="imgWrapper h-1/2 relative mb-1">
          <img
            src="../../../public/img/header/home-img-3.jpg"
            alt=""
            className="h-full object-center object-cover"
          />
          <div className="maskingDiv absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition duration-300 flex flex-col justify-end ">
            <p className="ml-8 mb-8 text-white text-2xl font-bold">Kitchen</p>
          </div>
        </div>
        <div className="imgWrapper h-1/2 relative mt-1">
          <img
            src="../../../public/img/header/home-img-4.jpg"
            alt=""
            className="object-center h-full object-cover"
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
