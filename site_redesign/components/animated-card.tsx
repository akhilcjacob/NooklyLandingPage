"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  step: string;
  title: string;
  description: string;
  color: string;
  className?: string;
}

export function AnimatedCard({ step, title, description, color, className }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "transform transition-all duration-700 opacity-0 translate-y-8 card-animation",
        className
      )}
    >
      <div className={`${color} rounded-2xl p-6 relative shadow-sm`}>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-4">
          <span className="text-[#2d4751] font-semibold">{step}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#2d4751]">{title}</h3>
        <p className="text-[#2d4751]/70">{description}</p>
      </div>
    </div>
  );
}
