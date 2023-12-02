import { Link } from "react-router-dom";

function ComfortableAndElegent() {
  return (
    <>
      <section className="max-w-screen-xl h-auto lg:h-[50vh] m-auto mt-28 block lg:flex mb-28 px-6 lg:px-20">
        <div className="w-full lg:w-1/2 h-[30vh] lg:h-full">
          <img
            src="../../../../public/img/banner/banner2.jpg"
            alt="banner"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-[#e9e9e9] flex flex-col justify-center p-6 md:p-10 lg:p-12">
          <h4 className="text-4xl font-semibold mb-6">
            Comfortabel & Elegent Living
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, rem nemo. Natus perferendis mollitia non.
          </p>
          <Link to={"/productListings/All"}>
            <button className="w-fit px-4 py-3 bg-black text-white font-bold mt-6 hover:text-black hover:bg-white border-solid border-2 border-black">
              SHOP NOW
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
export default ComfortableAndElegent;
