"use client";

import { LinkSquare01Icon } from "hugeicons-react";

export const KernInspiration = () => {
  return (
    <section className="px-4 py-20 w-full flex justify-center mb-12">
      <div className="w-full max-w-5xl bg-accent border border-black/10 dark:border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="rounded-full bg-blue-500 size-12 flex items-center justify-center">
            <span className="text-white font-pixel text-xl">S</span>
          </div>
          <h2 className="text-4xl font-pixel text-foreground">Skiper-UI</h2>
        </div>

        <div className="text-lg text-foreground max-w-2xl mx-auto space-y-4">
          <p>
            The inspiration and ideas for building this website and component
            library came from <strong>Skiper-UI</strong>, created by Guri.
          </p>
          <p>Mr. Guri, thank you for inspiring me to take these steps!</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href="https://skiper-ui.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background  text-foreground border border-black/10 dark:border-white/10 rounded-full transition-all font-medium shadow-sm hover:scale-110 duration-300"
          >
            <span>Visit Skiper-UI</span>
            <LinkSquare01Icon size={18} />
          </a>
          <a
            href="https://gxuri.me/?ref=insposite"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background  text-foreground border border-black/10 dark:border-white/10 rounded-full transition-all font-medium shadow-sm hover:scale-110 duration-300"
          >
            <span>Guri&apos;s Portfolio</span>
            <LinkSquare01Icon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export const KernInspirationCode = `import { LinkSquare01Icon } from "hugeicons-react";

export const KernInspiration = () => {
  return (
    <section className="px-4 py-20 w-full flex justify-center mb-12">
      <div className="w-full max-w-5xl bg-accent border border-black/10 dark:border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center gap-6 text-center">
        
        <div className="flex items-center justify-center gap-3">
          <div className="rounded-full bg-blue-500 size-12 flex items-center justify-center">
            <span className="text-white font-pixel text-xl">S</span>
          </div>
          <h2 className="text-4xl font-pixel text-foreground">Skiper-UI</h2>
        </div>

        <div className="text-lg text-foreground max-w-2xl mx-auto space-y-4">
          <p>
            The inspiration and ideas for building this website and component library came from <strong>Skiper-UI</strong>, created by Guri.
          </p>
          <p>
            Mr. Guri, thank you for inspiring me to take these steps!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href="https://skiper-ui.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background  text-foreground border border-black/10 dark:border-white/10 rounded-full transition-all font-medium shadow-sm hover:scale-110 duration-300"
          >
            <span>Visit Skiper-UI</span>
            <LinkSquare01Icon size={18} />
          </a>
          <a
            href="https://gxuri.me/?ref=insposite"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background  text-foreground border border-black/10 dark:border-white/10 rounded-full transition-all font-medium shadow-sm hover:scale-110 duration-300"
          >
            <span>Guri's Portfolio</span>
            <LinkSquare01Icon size={18} />
          </a>
        </div>
        
      </div>
    </section>
  );
};
`

export const AboutKernInspiration = `KernInspiration is a beautiful shoutout component block.

### Details
It displays an elegant card with a link to another portfolio or inspiration source. It's fully responsive, supports both dark and light modes effortlessly, and includes a nice hover animation to draw attention.`
