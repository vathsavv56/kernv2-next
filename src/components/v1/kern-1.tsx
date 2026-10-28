"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

import type React from "react";

const buttonVariants = cva(
  "px-4 py-2 rounded-lg font-pixel w-auto max-w-[120px] border-black/10 dark:border-white/20 transition-all duration-300 border shadow-sm bg-white active:translate-y-0.5 active:shadow-sm hover:cursor-pointer active:scale-105 whitespace-nowrap",
  {
    variants: {
      variant: {
        normal: "bg-gray-200  border-black/30",
        warn: "bg-red-500 text-red-50",
        playful: "bg-blue-500 text-white",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "playful",
      size: "md",
    },
  }
);

interface KernOneProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  name: string;
  bgcolor?: string;
  icon?: React.ReactNode;
}

const KernOne = ({
  variant,
  size,
  className,
  name,
  bgcolor,
  icon,
  ...props
}: KernOneProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }), bgcolor)}
      {...props}
    >
      {name}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

const KernOnecode = `
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

const buttonVariants = cva(
  "px-4 py-2 rounded-lg font-pixel w-auto min-w-[120px] border-black/10 dark:border-white/20 transition-all duration-300 shadow-sm bg-white active:translate-y-1 active:shadow-sm hover:cursor-pointer",
  {
    variants: {
      variant: {
        destructive: "bg-red-500 text-red-300",
        playful: "bg-blue-800 text-black",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "destructive",
      size: "md",
    },
  }
);

interface KernOneProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  name: string;
  bgcolor?: string;
}

const KernOne = ({
  variant,
  size,
  className,
  name,
  bgcolor,
  ...props
}: KernOneProps) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, className }),
        bgcolor
      )}
      {...props}
    >
      {name}
    </button>
  );
};

export { KernOne };
`;

const KernOneAbout = `
KernOne is a small, reusable button component built with React, TypeScript, and Class Variance Authority.

The idea behind it is simple: instead of writing the same button styles again and again, you can use one component and change its appearance through props.

It supports three visual variants:
- normal: A simple, neutral-looking button.
- warn: A button for actions that need a little more attention, such as deleting or removing something.
- playful: A more colorful button for regular actions where you want the interface to feel a little more lively.

It also supports three sizes:
- sm: A compact button for smaller actions.
- md: The default size for most situations.
- lg: A larger button when you want the action to stand out.

The name prop is used to display the button's text, while the optional icon prop lets you place an icon alongside it. This makes it useful for things like Send, Save, Delete, or other actions where a small visual cue helps.

The bgcolor prop gives you a little extra flexibility. You can pass a Tailwind CSS background class to customize the button's color without having to create another variant.

Under the hood, Class Variance Authority (CVA) handles the different combinations of variants and sizes, while cn merges the generated classes with any additional className you pass.

Because KernOne extends React's native button attributes, you can still use familiar props like onClick, disabled, type, and aria-label just like you would with a regular HTML button.

The goal is to keep the component simple, flexible, and easy to reuse across the project, while still giving you enough control to make each button fit the context it's used in.
`;

export { KernOne, KernOnecode, KernOneAbout };
