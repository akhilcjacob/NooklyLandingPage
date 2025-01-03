"use client";
import React, { useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    iconBg?: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll();
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!ref.current) return;
    
    const { top, height } = ref.current.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    const scrollableHeight = height - screenHeight;
    
    // Calculate progress within the section
    const sectionProgress = Math.max(0, Math.min(1, -top / scrollableHeight));
    const sectionSize = 1 / cardLength;
    const activeIndex = Math.min(cardLength - 1, Math.floor(sectionProgress / sectionSize));
    
    if (top <= 0 && top >= -scrollableHeight) {
      setActiveCard(activeIndex);
    }
  });

  return (
    <div 
      ref={ref} 
      className="relative h-[400vh]"
    >
      <div className="sticky top-24 h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-[1.1fr,1fr] md:gap-20 lg:gap-24">
          {/* Left side: Content cards */}
          <div className="relative self-center space-y-8 py-12">
            {content.map((item, index) => (
              <motion.div
                key={item.title + index}
                className={cn(
                  "group relative rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300",
                  activeCard === index 
                    ? "border-zinc-300 shadow-lg ring-1 ring-zinc-200/50" 
                    : "hover:border-zinc-300 hover:bg-white/80"
                )}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                  scale: activeCard === index ? 1 : 0.98,
                  y: activeCard === index ? 0 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex items-start gap-6">
                  {item.icon && (
                    <div className={cn(
                      "rounded-xl p-3.5 shadow-md transition-transform group-hover:scale-105",
                      item.iconBg || "bg-gradient-to-br from-blue-500 to-blue-600"
                    )}>
                      {item.icon}
                    </div>
                  )}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-semibold text-zinc-800">
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side: Visual content */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className={cn(
                "overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-zinc-200/50",
                contentClassName
              )}
              style={{
                maxHeight: "min(70vh, 600px)",
                width: "100%",
              }}
              animate={{
                scale: [0.96, 1],
                opacity: [0.5, 1],
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              key={activeCard}
            >
              <div className="relative h-full w-full">
                {content[activeCard].content}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
