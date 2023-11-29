import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="mt-28">
        <div className="bg-[#191919] flex flex-col items-center h-[30vh] justify-center">
          <h1 className="text-4xl text-white font-bold  mb-6">Newsletter</h1>
          <div>
            <input
              className="rounded-sm px-3 py-2 focus:outline-none"
              type="text"
              placeholder="Mail ID"
              id="subscribeInputBox"
            />
            <button className="w-fit px-2 py-1 ml-4 bg-white text-black font-bold  hover:text-white hover:bg-black border-solid border-2 border-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="h-[20vh] bg-black  flex flex-col items-center justify-center">
          <div className="space-x-12">
            <Link className="text-white">About</Link>
            <Link className="text-white">Store locator</Link>
            <Link className="text-white">FAQs</Link>
            <Link className="text-white">News</Link>
            <Link className="text-white">Careers</Link>
            <Link className="text-white">Contact Us</Link>
          </div>
          <Link className="text-white mt-8">Design by Abderraouf</Link>
        </div>
      </section>
    </>
  );
}
export default Footer;
