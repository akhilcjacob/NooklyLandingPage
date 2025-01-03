"use client";

import { Badge } from "@/components/ui/badge";
import { BookOpen, ListChecks, Search, UserPlus } from "lucide-react";
import { StickyScroll } from "./sticky-scroll";

const steps = [
  {
    title: "Find Local Pros",
    description:
      "Browse through our network of verified local service providers. Filter by service type, location, and ratings to find the perfect match for your needs.",
    icon: <Search className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600">
        <Search className="w-32 h-32 text-white/90" strokeWidth={1.2} />
      </div>
    ),
  },
  {
    title: "Book Instantly",
    description:
      "Schedule your service with just a few clicks. Choose your preferred time slot and get instant confirmation. No more waiting for callbacks or playing phone tag.",
    icon: <BookOpen className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-violet-500 to-violet-600",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-violet-600">
        <BookOpen className="w-32 h-32 text-white/90" strokeWidth={1.2} />
      </div>
    ),
  },
  {
    title: "Get Service",
    description:
      "Your pro arrives on time and completes the job to your satisfaction. Track their arrival in real-time and communicate directly through our platform.",
    icon: <UserPlus className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-fuchsia-500 to-fuchsia-600">
        <UserPlus className="w-32 h-32 text-white/90" strokeWidth={1.2} />
      </div>
    ),
  },
  {
    title: "Rate & Review",
    description:
      "Share your experience with the community. Your feedback helps maintain our high service standards and assists other users in making informed decisions.",
    icon: <ListChecks className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600">
        <ListChecks className="w-32 h-32 text-white/90" strokeWidth={1.2} />
      </div>
    ),
  },
];

export const StepsSection = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="relative">
        <div className="container">
          <div className="text-center py-24">
            <Badge 
              className="px-4 py-2 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 
                text-blue-700 hover:to-cyan-500/20 transition-colors border-0 rounded-full"
            >
              The Process
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-6 bg-gradient-to-br from-zinc-800 to-zinc-500 bg-clip-text text-transparent">
              How Nookly Works
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
              We've simplified home services booking into four easy steps
            </p>
          </div>
        </div>

        <StickyScroll 
          content={steps}
          contentClassName="aspect-[4/5]"
        />
      </div>
    </section>
  );
};
