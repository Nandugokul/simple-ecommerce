import NavBar from "../../ui/NavBar/NavBar";

function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="flex h-[80vh] overflow-hidden">
        <div className="object-cover w-[48%]  mr-3">
          <img src="../../../public/img/header/home-img-1.jpg" alt="image 1" />
        </div>
        <div className="object-cover w-[32%] mr-3">
          <img src="../../../public/img/header/home-img-2.jpg" alt="image 2" />
        </div>
        <div className="w-[30%]">
          <img src="../../../public/img/header/home-img-3.jpg" alt="image 3" />
          <img src="../../../public/img/header/home-img-4.jpg" alt="image 4" />
        </div>
      </div>
    </>
  );
}
export default LandingPage;
