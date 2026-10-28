"use client";

import type { PointerEvent, ReactNode } from "react";
import {
  PanelRightIcon,
  PanelLeftIcon,
  LinkCircleIcon,
  CodeFolderIcon,
  LinerIcon,
} from "hugeicons-react";
import { Maximize, Minimize } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ComponentPageProps {
  previewLink: string;
  code: string;
  about: string;
  component: ReactNode;
}

const routesArr = [
  {
    path: "/v1/kern101",
    name: "Kern-One",
  },
  {
    path: "/v1/kernfile",
    name: "Kern-file",
  },
  {
    path: "/v1/kern-inspiration",
    name: "Kern-Inspiration",
  },
  {
    path: "/v1/kern-footer",
    name: "Kern-Footer",
  },
];

const ComponentPage = ({
  previewLink,
  code,
  about,
  component,
}: ComponentPageProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isDetailsPanelOpen, setIsDetailsPanelOpen] = useState(false);
  const [isCodePanelOpen, setIsCodePanelOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(0);

  const dragStartY = useRef(0);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const deltaY = e.clientY - dragStartY.current;

    if (deltaY < 0) {
      setDragY(0);
      return;
    }

    setDragY(deltaY);
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    if (dragY > 150) {
      setIsCodePanelOpen(false);
    }

    setDragY(0);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-neutral-50 dark:bg-[#080808]">
      <div className="absolute bottom-0 left-0 h-[50%] w-full md:relative md:h-full md:w-1/2 overflow-y-auto p-6 md:p-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-pixel text-black dark:text-white text-center">
              About this component
            </h2>
          </div>

          <div className="rounded-xl p-5">
            <p className="whitespace-pre-wrap text-sm leading-7 text-black/80 dark:text-white/80">
              {about}
            </p>
          </div>
        </div>
      </div>

      <div
        id="options"
        className="
          absolute top-4 right-4 md:top-10 md:right-10 z-[999]
          flex h-[42px] w-[128px]
          items-center justify-center gap-1
          rounded-[18px]
          border border-black/10 dark:border-white/[0.06]
          bg-white dark:bg-[#181818]
          px-1.5
          shadow-[0_4px_20px_rgba(0,0,0,0.35)]
        "
      >
        <div className="group relative">
          <button
            onClick={() => setIsDetailsPanelOpen((p) => !p)}
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              bg-white dark:bg-[#242424]
              text-neutral-900 dark:text-white
              transition-all duration-300
              hover:cursor-pointer
              hover:bg-neutral-100 dark:hover:bg-[#2c2c2c]
            "
          >
            {isDetailsPanelOpen ? (
              <Minimize size={17} />
            ) : (
              <Maximize size={17} />
            )}
          </button>

          <span
            className="
              pointer-events-none
              absolute -bottom-8 left-1/2
              -translate-x-1/2
              scale-95
              whitespace-nowrap
              rounded-md
              bg-white dark:bg-[#242424]
              px-2 py-1
              text-xs text-neutral-900 dark:text-white
              opacity-0
              transition-all duration-150
              group-hover:scale-100
              group-hover:opacity-100
            "
          >
            Maximize view
          </span>
        </div>

        <div className="group relative">
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              bg-white dark:bg-[#242424]
              text-neutral-900 dark:text-white
              transition
              hover:cursor-pointer
              hover:bg-neutral-100 dark:hover:bg-[#2c2c2c]
            "
          >
            <LinkCircleIcon size={17} />
          </a>

          <span
            className="
              pointer-events-none
              absolute -bottom-8 left-1/2
              -translate-x-1/2
              scale-95
              whitespace-nowrap
              rounded-md
              bg-white dark:bg-[#242424]
              px-2 py-1
              text-xs text-neutral-900 dark:text-white
              opacity-0
              transition-all duration-150
              group-hover:scale-100
              group-hover:opacity-100
            "
          >
            Preview
          </span>
        </div>

        <div className="group relative">
          <button
            onClick={() => setIsCodePanelOpen((p) => !p)}
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              bg-white dark:bg-[#242424]
              text-neutral-900 dark:text-white
              transition
              hover:cursor-pointer
              hover:bg-neutral-100 dark:hover:bg-[#2c2c2c]
            "
          >
            <CodeFolderIcon size={17} />
          </button>

          <span
            className="
              pointer-events-none
              absolute -bottom-8 left-1/2
              -translate-x-1/2
              scale-95
              whitespace-nowrap
              rounded-md
              bg-white dark:bg-[#242424]
              px-2 py-1
              text-xs text-neutral-900 dark:text-white
              opacity-0
              transition-all duration-150
              group-hover:scale-100
              group-hover:opacity-100
            "
          >
            Source code
          </span>
        </div>
      </div>

      <button
        id="panel"
        onClick={() => setIsPanelOpen((p) => !p)}
        className="
          absolute top-4 left-4 md:top-10 md:left-10 z-[999]
          flex h-8 w-8 shrink-0
          items-center justify-center
          rounded-full
          bg-white dark:bg-[#242424]
          text-neutral-900 dark:text-white
          transition
          hover:cursor-pointer
          hover:bg-neutral-100 dark:hover:bg-[#2c2c2c]
        "
      >
        {isPanelOpen ? <PanelLeftIcon /> : <PanelRightIcon />}
      </button>

      <div
        className={cn(
          `
            absolute top-0 right-0
            flex items-center justify-center
            rounded-2xl
            
            bg-white dark:bg-[#121212]
            transition-all duration-300
          `,
          isDetailsPanelOpen ? "h-[50%] md:h-full w-full md:w-[50%]" : "h-full w-full"
        )}
      >
        {component}
      </div>

      <div
        className={cn(
          `
            absolute top-1/2 left-2 md:left-6
            z-[199]
            h-[95%] w-[90%] md:w-[20%]
            -translate-y-1/2
            rounded-2xl
            bg-white dark:bg-[#121212] text-neutral-900 dark:text-white
            transition-transform duration-300 
          `,
          isPanelOpen
            ? "translate-x-0"
            : "translate-x-[-110%] md:translate-x-[-150%]"
        )}
      >
        <div className="flex flex-col h-full w-full py-8 px-2 gap-1 overflow-y-auto">
          {routesArr.map((route, idx) => (
            <div key={idx} className="w-full">
              <Link
                href={route.path}
                className="
                  group flex items-center w-full px-4 py-2.5 
                  text-neutral-500 dark:text-white/60 
                  transition-all duration-200 ease-in-out
                  hover:translate-x-1 hover:text-blue-500
                "
              >
                <LinerIcon
                  size={20}
                  className="rotate-41 mr-3 transition-all duration-300 group-hover:text-blue-500 group-hover:ml-5"
                />
                <span className="text-base font-medium">{route.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-1/2 z-[500] w-[95%] md:w-[45%] -translate-x-1/2",
          !isCodePanelOpen && "pointer-events-none"
        )}
      >
        <div
          id="code"
          className={cn(
            `
              h-[85vh] md:h-[90vh] w-full
              rounded-t-2xl
              border border-black/10 dark:border-white/10
              bg-white dark:bg-[#121212]
              shadow-2xl transition-all duration-300
            `,
            !isCodePanelOpen &&
              "pointer-events-none translate-y-full opacity-0",
            isCodePanelOpen && !isDragging && "translate-y-0 opacity-100",
            isDragging && "translate-y-0 opacity-100 transition-none"
          )}
          style={{
            transform: isDragging ? `translateY(${dragY}px)` : undefined,
          }}
        >
          <div
            className="
              flex h-10 w-full
              touch-none
              select-none
              cursor-grab
              items-center justify-center
              active:cursor-grabbing
            "
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <div className="h-1 w-8 rounded-full bg-black/20 dark:bg-white/40" />
          </div>

          <div className="h-[calc(100%-40px)] overflow-auto">
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              customStyle={{
                margin: 0,
                minHeight: "100%",
                background: "rgba(15, 15, 20, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "14px",
                padding: "1.25rem 1.5rem",
                fontSize: "13px",
                lineHeight: "1.7",
                fontFamily:
                  "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
                overflow: "auto",
                boxShadow:
                  "0 10px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.03)",
              }}
              codeTagProps={{
                style: {
                  fontFamily:
                    "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
                },
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
