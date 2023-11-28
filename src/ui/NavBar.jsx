import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex items-center justify-between px-56 hover:cursor-pointer py-4 mb-8 shadow-sm">
      <img src="../../../public/img/newlogo2.png" alt="logo" className="w-20" />
      <div className="flex space-x-8">
        <Link>CATEGORIES</Link>
        <Link>PRODUCT PAGE</Link>
        <img
          src="../../../public/img/icons/icons8-cart.gif"
          alt="cartIcon"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}
export default NavBar;
