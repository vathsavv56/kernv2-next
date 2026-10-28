import { cn } from "@/utils/cn";
import { ArrowDown01Icon } from "hugeicons-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className={cn(
        "h-[75vh] min-h-[500px] w-full bg-gray-100 max-w-[90%] mx-auto rounded-3xl overflow-hidden",
        "dark:text-gray-800 dark:bg-gray-50 snap-center"
      )}
    >
      <div className="flex items-center justify-center h-full w-full relative">
        <div className="flex flex-col items-center justify-center z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-pixel text-center inline-block overflow-hidden whitespace-nowrap border-r-4 border-blue-500 dark:border-black animate-typing">
            Ui - Refined
          </h1>
          <div>
            <p className="text-base md:text-lg mt-4 text-center">
              Carefully crafted components for you
            </p>
          </div>
          <Link
            href="/components"
            className=" group mt-6 flex w-fit cursor-pointer items-center rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-blue-600"
          >
            <span>Get started</span>

            <ArrowDown01Icon
              size={16}
              className="ml-0 -rotate-90 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:ml-2 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </Link>
        </div>

        <div
          id="flower1"
          className="w-48 md:w-100 z-[999] absolute top-32 md:top-0 left-0 md:left-0 pointer-events-none"
        >
          <img src="/f3.svg" alt="flower" className="w-full h-auto" />
        </div>

        <div
          id="flower2"
          className="w-32 md:w-70 z-[999] absolute top-40 md:top-0 right-2 md:right-0 pointer-events-none"
        >
          <img src="/f4.svg" alt="flower" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
