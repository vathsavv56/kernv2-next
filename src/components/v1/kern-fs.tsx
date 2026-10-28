"use client";

import { ArrowDown01Icon, Folder01Icon, File02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { cn } from "@/utils/cn";
export type File = {
    id: string;
    name: string;
    isFolder: boolean;
    child?: File[];
};

export const startData: File[] = [
    {
        id: "1",
        name: "kern-app",
        isFolder: true,
        child: [
            {
                id: "2",
                name: "src",
                isFolder: true,
                child: [
                    {
                        id: "3",
                        name: "components",
                        isFolder: true,
                        child: [
                            {
                                id: "4",
                                name: "Button.tsx",
                                isFolder: false
                            },
                            {
                                id: "5",
                                name: "Navbar.tsx",
                                isFolder: false
                            }
                        ]
                    },
                    {
                        id: "6",
                        name: "App.tsx",
                        isFolder: false
                    }
                ]
            },
            {
                id: "7",
                name: "public",
                isFolder: true,
                child: [
                    {
                        id: "8",
                        name: "logo.svg",
                        isFolder: false
                    }
                ]
            },
            {
                id: "9",
                name: "package.json",
                isFolder: false
            },
            {
                id: "10",
                name: "README.md",
                isFolder: false
            }
        ]
    }
];

export const Node = ({
    name,
    isFolder,
    child,
}: File) => {
    const [expand, setExpand] = useState<boolean>(false);

    return (

        <div className="w-full ">
            <div className="flex h-6 w-full items-center gap-1 rounded-md px-1 hover:bg-black/10 dark:hover:bg-white/10">
                {isFolder && child && (
                    <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        className={cn(
                            "size-4 cursor-pointer transition-transform",
                            expand && "rotate-0",
                            !expand && "-rotate-90"
                        )}
                        onClick={() => setExpand(prev => !prev)}
                    />
                )}

                {isFolder ? (
                    <HugeiconsIcon icon={Folder01Icon} className="size-5" />
                ) : (
                    <HugeiconsIcon icon={File02Icon} className="size-4" />
                )}

                <p className="min-w-0 truncate">
                    {name}
                </p>
            </div>

            {isFolder && child && expand && (
                <KernFile list={child} />
            )}
        </div>
    )
};

export const KernFile = ({ list }: { list: File[] }) => {
    return (
        <div className="text-neutral-800 dark:text-white pl-8">
            {list.map(file => (
                <Node
                    key={file.id}
                    {...file}
                />
            ))}
        </div>
    )
};

export const KernFileCode = `

  <div className="w-full ">
            <div className="flex h-6 w-full items-center gap-1 rounded-md px-1 hover:bg-black/10 dark:hover:bg-white/10">
                {isFolder && child && (
                    <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        className={cn(
                            "size-4 cursor-pointer transition-transform",
                            expand && "rotate-0",
                            !expand && "-rotate-90"
                        )}
                        onClick={() => setExpand(prev => !prev)}
                    />
                )}

                {isFolder ? (
                    <HugeiconsIcon icon={Folder01Icon} className="size-5" />
                ) : (
                    <HugeiconsIcon icon={File02Icon} className="size-4" />
                )}

                <p className="min-w-0 truncate">
                    {name}
                </p>
            </div>

            {isFolder && child && expand && (
                <KernFile list={child} />
            )}
        </div>


`


export const AboutKernFile = `
KernFile is a slick, recursive file tree component that makes it super easy to display your project structure. 

### How it works under the hood
It takes a simple nested data structure that looks like this:
\`\`\`ts
type File = {
  id: string;
  name: string;
  isFolder: boolean;
  child?: File[];
}
\`\`\`
The component automatically figures out what's a folder and what's a file based on this type. The whole thing is built with recursion, meaning a folder can contain files and more folders infinitely deep without needing messy nested code in your UI.

### Icons & Interaction
Whenever you click on a folder, it smoothly toggles open or closed to give you that familiar code editor feel. The visuals are powered by the awesome Hugeicons library. Specifically, it uses:
- \`Folder01Icon\` for the directories
- \`File02Icon\` for individual files
- \`ArrowDown01Icon\` as a neat little chevron that animates when you expand or collapse a folder

It's perfect if you're building a web-based IDE, a file manager, or just want to show off your project's architecture!
`
