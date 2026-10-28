"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sun02Icon, MoonEclipseIcon } from "hugeicons-react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import LiquidPauseAnimation from "./pixel-perfect/liquid-pause-animation";

const routes = [
  {
    path: "/components",
    text: "components",
  },
  {
    path: "/labs",
    text: "labs",
  },
  {
    path: "/about",
    text: "about",
  },
];

type Theme = "light" | "dark";

const readTheme = (): Theme => {
  if (typeof document === "undefined") return "light";

  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
};

const NavBar = () => {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    const audio = new Audio("/theme-change-sound.mp3");
    audio.play().catch(console.error);
    setTheme((prevTheme) =>
      (prevTheme ?? readTheme()) === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    if (!theme) return;

    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const syncTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    syncTheme();
    window.addEventListener("themeChange", syncTheme);
    return () => window.removeEventListener("themeChange", syncTheme);
  }, []);

  return (
    <header className="h-20 w-full sticky top-10 inset-x-0 z-50 px-4 md:px-0">
      <nav
        className={cn(
          "h-full border border-gray-50/10 w-full md:max-w-5xl mx-auto rounded-2xl flex items-center justify-between px-4 shadow-2xl",
          "bg-white text-bgLight dark:bg-bgLight dark:text-textMain",
          "border border-white shadow-sm dark:border-none z-[999]"
        )}
      >
        <div id="left" className="rounded-2xl size-25 group flex items-center">
          <div
            onClick={() => router.push("/")}
            className="z-[999] hover:cursor-pointer relative"
          >
            <LiquidPauseAnimation />
          </div>
        </div>

        {/* Desktop Nav */}
        <div
          id="right"
          className="hidden md:flex items-center justify-center gap-3 z-[999]"
        >
          {routes.map((item, index) => (
            <Link
              onMouseEnter={() => router.prefetch(item.path)}
              href={item.path}
              key={index}
              className={cn(
                "px-2 py-1 rounded-md duration-300 transition-all",
                "dark:hover:bg-white dark:hover:text-black",
                "hover:text-white hover:bg-black"
              )}
            >
              {item.text}
            </Link>
          ))}

          <div
            className="group cursor-pointer select-none ml-2"
            onClick={toggleTheme}
          >
            <Sun02Icon className="hidden dark:block transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:scale-110 group-active:scale-90" />
            <MoonEclipseIcon className="block dark:hidden transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:scale-110 group-active:scale-90" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 z-[999]">
          <div className="group cursor-pointer select-none" onClick={toggleTheme}>
            <Sun02Icon className="hidden dark:block transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:scale-110 group-active:scale-90 size-5" />
            <MoonEclipseIcon className="block dark:hidden transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:scale-110 group-active:scale-90 size-5" />
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-4 right-4 md:hidden bg-white dark:bg-bgLight border border-gray-200 dark:border-white/10 rounded-2xl p-4 shadow-xl z-[998] flex flex-col gap-2">
          {routes.map((item, index) => (
            <Link
              onMouseEnter={() => router.prefetch(item.path)}
              onTouchStart={() => router.prefetch(item.path)}
              href={item.path}
              key={index}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "px-4 py-2 rounded-xl duration-300 transition-all text-lg",
                "dark:hover:bg-white/10 dark:hover:text-white",
                "hover:bg-black/5 hover:text-black"
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;
