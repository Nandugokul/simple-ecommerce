function HarmoniousLiving() {
  return (
    <section className="flex max-w-screen-xl m-auto my-28 h-[40vh] px-20">
      <div className="w-1/2 bg-[#e9e9e9] flex items-start justify-center flex-col p-20">
        <h4 className="font-bold text-4xl mb-6 ">Creative harmonious living</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nihil
          libero repudiandae .
        </p>
        <button className="p-3 text-white bg-black mt-6 font-bold hover:text-black hover:bg-white border-2 border-solid border-black">
          SHOP NOW
        </button>
      </div>
      <div className="w-1/2">
        <img
          src="../../../../public/img/banner/banner1.jpg"
          alt="banner"
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
}
export default HarmoniousLiving;
