"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const MainContainer = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-screen w-full bg-white text-bgLight dark:bg-bgMain dark:text-textMain font-grosek grid grid-rows-[auto_1fr_auto] selection:text-blue-500 selection:bg-blue-300/40">
      <NavBar />

      <main className="flex flex-col w-full h-full">{children}</main>

      {isHomePage && <Footer />}
    </div>
  );
};

export default MainContainer;
