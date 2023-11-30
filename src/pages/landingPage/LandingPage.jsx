import NavBar from "../../ui/NavBar";
import ProductDisplay from "./components/ProductDisplay";
import HeroSection from "./components/HeroSection";
import HarmoniousLiving from "./components/HarmoniousLiving";
import ProductCarousel from "./components/ProductCarousel";
import ComfortableAndElegent from "./components/ComfortableAndElegent";
import Footer from "../../ui/Footer";

function LandingPage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProductDisplay />
      <HarmoniousLiving />
      <ProductCarousel />
      <ComfortableAndElegent />
      <Footer />
    </>
  );
}
export default LandingPage;
