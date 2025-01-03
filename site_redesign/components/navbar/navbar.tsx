"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      {isLandingPage && (
        <div className="bg-white/80 backdrop-blur-md py-2 text-center text-sm text-[#2d4751] flex items-center justify-center space-x-2 border-b border-[#2d4751]/5">
          <span>✨</span>
          <span>We will be launching later this year! Be on the lookout</span>
          <span>🚀</span>
        </div>
      )}

      {/* Main Navbar */}
      <nav 
        className={`
          ${isLandingPage ? "bg-[#f9f5ec]" : "bg-white"} 
          transition-all duration-200
          ${scrolled ? "bg-opacity-80 backdrop-blur-md shadow-sm" : "bg-opacity-100"}
        `}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-semibold text-xl text-[#2d4751]">NOOKLY</span>
          </Link>

          {/* Navigation Links - Only show on landing page */}
          {isLandingPage ? (
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#how-it-works" 
                className="text-[#2d4751]/70 hover:text-[#2d4751] transition-colors"
              >
                How It Works
              </a>
              <a 
                href="#services" 
                className="text-[#2d4751]/70 hover:text-[#2d4751] transition-colors"
              >
                Services
              </a>
              <a 
                href="#benefits" 
                className="text-[#2d4751]/70 hover:text-[#2d4751] transition-colors"
              >
                Benefits
              </a>
              <Button 
                className="bg-[#2d4751] text-white hover:bg-[#2d4751]/90 transition-colors"
              >
                Join Waitlist
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              {/* Non-landing page navigation items */}
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          )}

          {/* Mobile menu button - only show on landing page */}
          {isLandingPage && (
            <button className="md:hidden p-2 text-[#2d4751]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
