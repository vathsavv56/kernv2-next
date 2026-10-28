"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/badge";
import { cn } from "@/utils/cn";

export interface ComponentBlockProps {
  component?: ReactNode;
  image?: string;
  to: string;
  version: string;
  name: string;
  codeName: string;
}

const ComponentBlock = ({
  component,
  version,
  to,
  name,
  codeName,
  image,
}: ComponentBlockProps) => {
  const nav = useRouter();

  return (
    <div
      className={cn(
        "w-full h-70 border border-muted shadow-md rounded-[20px] p-3 relative flex items-center justify-center group hover:bg-muted-foreground/10 hover:cursor-pointer"
      )}
      onClick={() => nav.push(to)}
    >
      <div className="absolute top-5 right-10 z-99 ">
        <Badge>{version}</Badge>
      </div>
      <div
        className={cn(
          "absolute inset-0 m-auto  rounded-2xl h-[95%] w-[95%] bg-white",
          "dark:bg-accent flex items-center justify-center overflow-hidden"
        )}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-[85%] h-[85%] object-cover rounded-xl"
          />
        ) : (
          component
        )}
      </div>

      <div className="absolute bottom-5 left-8 z-99 flex flex-col items-start pointer-events-none">
        <span className="text-lg font-bold tracking-tight text-foreground">
          {name}
        </span>
        <span className="text-xs text-muted-foreground font-jetbrains">
          {codeName}
        </span>
      </div>
    </div>
  );
};

export default ComponentBlock;
