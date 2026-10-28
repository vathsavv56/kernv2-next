import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kern-v2-alpha.vercel.app";

const description =
  "Carefully crafted UI components for developers who care about the details.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "kernUI-v2 — Refined UI components for React",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "kernUI-v2",
    title: "kernUI-v2",
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "kernUI-v2 — Refined UI components for React",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "kernUI-v2",
    description,
    images: [
      {
        url: "/og.png",
        alt: "kernUI-v2 — Refined UI components for React",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme !== "light" && theme !== "dark") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    document.documentElement.classList.add(theme);
  } catch (error) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
