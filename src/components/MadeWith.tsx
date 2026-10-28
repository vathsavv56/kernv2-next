import type { CSSProperties } from "react";

const stackItems = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    color: "#646CFF",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    color: "#CA4245",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    color: "#E902B5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
];

const LogoImage = ({ src, color }: { src: string; color: string }) => {
  return (
    <div
      style={{ "--hover-color": color } as CSSProperties}
      className="
        group flex h-24 min-w-0 flex-1
        items-center justify-center
        rounded-xl border border-black/10
        bg-transparent p-5

        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:rotate-2
        hover:border-black/30
        hover:shadow-[6px_8px_0px_var(--hover-color)]

        dark:border-white/10
        dark:bg-bgLight
        dark:hover:border-white/30
      "
    >
      <img
        src={src}
        alt="logo"
        className="
          size-full object-contain
          transition-transform duration-300 ease-out
          group-hover:scale-110
          dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
        "
      />
    </div>
  );
};

const MadeWith = () => {
  return (
    <section className="px-4 py-20 border-y border-black/10 dark:border-white/10 mt-12 mb-12 ">
      <div className="mx-auto max-w-5xl ">
        <div className="mb-12">
          <span className="font-pixel text-sm uppercase tracking-[0.3em] text-black dark:text-textMain">
            The stack
          </span>

          <h1 className="font-pixel text-4xl text-black sm:text-5xl text-left dark:text-white">
            Made with
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex w-full gap-4">
          {stackItems.map((item, index) => (
            <LogoImage src={item.src} color={item.color} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MadeWith;
