import Hero from "@/components/Hero";
import MadeWith from "@/components/MadeWith";
import ComponentsShowcase from "@/components/ComponentsShowcase";
import Inspiration from "@/components/Inspiration";

const Landing = () => {
  return (
    <div className="h-full w-full">
      <Hero />
      <MadeWith />
      <ComponentsShowcase />
      <Inspiration />
    </div>
  );
};

export default Landing;
