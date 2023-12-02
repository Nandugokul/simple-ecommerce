import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="mt-28">
        <div className="bg-[#191919] flex flex-col items-center h-[30vh] justify-center">
          <h1 className="text-4xl text-white font-bold  mb-4">Newsletter</h1>
          <div className="flex items-center flex-wrap justify-center">
            <input
              className="rounded-md px-3 h-10 focus:outline-none my-2"
              type="text"
              placeholder="Mail ID"
              id="subscribeInputBox"
            />
            <button className="w-fit px-2 rounded-md h-10 ml-4 bg-white text-black font-bold  hover:text-white hover:bg-black border-solid border-2 border-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="bg-black  flex flex-col items-center justify-center p-6 lg:p-10">
          <div className="flex flex-wrap justify-center">
            <Link className="text-white mt-4 mb-1 mx-3">About</Link>
            <Link className="text-white mt-4 mb-1 mx-3">Store locator</Link>
            <Link className="text-white mt-4 mb-1 mx-3">FAQs</Link>
            <Link className="text-white mt-4 mb-1 mx-3">News</Link>
            <Link className="text-white mt-4 mb-1 mx-3">Careers</Link>
            <Link className="text-white mt-4 mb-1 mx-3">Contact Us</Link>
          </div>
          <Link className="text-white mt-8">Design by Abderraouf</Link>
        </div>
      </section>
    </>
  );
}
export default Footer;
