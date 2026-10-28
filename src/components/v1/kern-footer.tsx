"use client";

import { ArrowRight01Icon } from "hugeicons-react";

export const KernFooter = () => {
  return (
    <footer className="w-full px-4 pb-4 pt-20">
      <div className="w-full max-w-7xl mx-auto bg-[#5521b5] rounded-[3rem] p-8 md:p-14 text-white flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-16">
          {/* Left side */}
          <div className="flex flex-col gap-8 w-full max-w-md">
            <h2 className="text-5xl md:text-6xl font-grosek">
              Drop us <span className="font-pixel">a line</span>
            </h2>
            <div className="flex w-full mt-2">
              <a
                href="mailto:inavoluvathsav@gmail.com?subject=Hello from the website!&body=Hi Vathsav,%0D%0A%0D%0AI would like to connect about..."
                className="bg-white/10 hover:bg-white/20 transition-colors rounded-full px-8 py-4 flex items-center justify-center gap-3 text-base font-medium w-full sm:w-max"
              >
                Email me
                <ArrowRight01Icon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Big Text */}
        <div className="mt-20 md:mt-32 w-full flex justify-center items-center overflow-hidden">
          <h1 className="text-[25vw] md:text-[18rem] leading-none font-pixel text-center tracking-tight">
            KERN
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/60 font-grosek">
          <p>© 2026. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export const KernFooterCode = `import { ArrowRight01Icon } from "hugeicons-react";

export const KernFooter = () => {
  return (
    <footer className="w-full px-4 pb-4 pt-20">
      <div className="w-full max-w-7xl mx-auto bg-[#5521b5] rounded-[3rem] p-8 md:p-14 text-white flex flex-col justify-between">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-16">
          
          {/* Left side */}
          <div className="flex flex-col gap-8 w-full max-w-md">
            <h2 className="text-5xl md:text-6xl font-grosek">
              Drop us <span className="font-pixel">a line</span>
            </h2>
            <div className="flex w-full mt-2">
              <a 
                href="mailto:inavoluvathsav@gmail.com?subject=Hello from the website!&body=Hi Vathsav,%0D%0A%0D%0AI would like to connect about..."
                className="bg-white/10 hover:bg-white/20 transition-colors rounded-full px-8 py-4 flex items-center justify-center gap-3 text-base font-medium w-full sm:w-max"
              >
                Email me
                <ArrowRight01Icon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Big Text */}
        <div className="mt-20 md:mt-32 w-full flex justify-center items-center overflow-hidden">
          <h1 className="text-[25vw] md:text-[18rem] leading-none font-pixel text-center tracking-tight">
            KERN
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/60 font-grosek">
          <p>© 2026. All rights reserved</p>
         
        </div>

      </div>
    </footer>
  );
};
`

export const AboutKernFooter = `KernFooter is a massive, attention-grabbing footer component.

### Details
It features huge typography with a distinct pixel font to match the Kern aesthetic. It provides clear call-to-action buttons for email contact and is completely responsive, scaling the massive KERN text beautifully on any device screen size.`
