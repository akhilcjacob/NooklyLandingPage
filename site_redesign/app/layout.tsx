import "@/app/globals.css";
import { MyFirebaseProvider } from "@/components/firebase-providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { ReactNode } from "react";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nookly | Vercel Next.JS Firebase Shadcn/ui Tailwind Boilerplate",
  description:
    "nookly is a Vercel Next.JS Firebase Shadcn/ui Tailwind Boilerplate project to help you get started with your next project.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(font.className)}>
        <MyFirebaseProvider>
          {children}
          <Toaster />
        </MyFirebaseProvider>
      </body>
    </html>
  );
}
