import NavBar from "../../ui/NavBar";

function SingleProductDisplay() {
  return (
    <>
      <NavBar />
      <section className="max-w-screen-xl m-auto">
        <div className="grid lg:grid-cols-2">
          <div className="grid grid-rows-4">
            <img
              src="./../../../public/img/products/10.jpg"
              alt=""
              className="row-span-3"
            />
            <div className="grid grid-cols-3">
              <img
                src="../../../public/img/products/otherProducts/other1.jpg"
                alt=""
              />
              <img
                src="../../../public/img/products/otherProducts/other2.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
              <img src="../../../public/img/products/10.jpg" alt="" />
            </div>
          </div>
          <div className="bg-[#e5e5e5]  px-16 py-28">
            <h2 className="font-bold text-4xl mb-6">Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              tenetur quam, reiciendis aliquam natus, nihil tempore ipsa
              doloribus at rerum accusamus, nobis nam molestias! Quas quidem
              suscipit enim laborum totam.
            </p>
            <div className="grid md:grid-cols-3 my-12">
              <h4 className="text-3xl font-semibold text-center ">Quantity</h4>
              <div className="flex justify-center">
                <button className="border-2 border-solid border-black px-3 py-1">
                  -
                </button>
                <span className="border-2 border-solid border-black px-3 p-1">
                  1
                </span>
                <button className="border-2 border-solid border-black px-3 py-1">
                  +
                </button>
              </div>
              <span className="text-3xl font-semibold text-center">120$</span>
            </div>
            <div className="grid grid-cols-2 ">
              <button className="border-2 border-solid border-black hover:bg-black hover:text-white font-medium px-4 py-2 mr-2">
                ADD TO CART
              </button>
              <button className="border-2 border-solid border-red-600 bg-red-600 text-white hover:text-red-600 hover:bg-transparent font-medium px-4 py-2 ml-2">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SingleProductDisplay;
