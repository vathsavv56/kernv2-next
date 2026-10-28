import type { ReactNode } from "react";

const ComponentContainerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full bg-neutral-50 dark:bg-[#080808] text-black dark:text-white">
      {children}
    </div>
  );
};

export default ComponentContainerLayout;
