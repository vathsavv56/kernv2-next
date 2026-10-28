import { Loader2Icon } from "lucide-react";

const About = () => {
  return (
    <div className="text-4xl md:text-6xl lg:text-9xl flex items-center justify-center mt-40 px-4 text-center">
      <p className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-3">
        Coming soon{" "}
        <Loader2Icon className="w-16 h-16 md:w-[100px] md:h-[100px] animate-spin duration-500" />
      </p>
    </div>
  );
};

export default About;
