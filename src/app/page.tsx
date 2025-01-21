import Home from "./components/Home"
import BestOfAirMax from "./components/BestOfAirMax";
import FeaturedSection from "./components/FeaturedSection";
import ProductDisplay from "./components/GearUp";
import DontMiss from "./components/DontMiss"; 
import Essential from "./components/Essential";

export default function Page() {
  return (
    <div>
    <Home />
    <BestOfAirMax />
    <FeaturedSection />
      <ProductDisplay />
      <DontMiss />
      <Essential />
    </div>
  );
}
