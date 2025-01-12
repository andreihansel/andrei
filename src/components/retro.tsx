"use client";
 
import RetroGrid from "@/components/ui/retro-grid";
import TypingAnimation from "./ui/typing-animation";
 
export function RetroGridDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center">
        <TypingAnimation className="text-7xl font-bold leading-none tracking-tighter text-transparent">Brains + Charisma = Andrei.</TypingAnimation> 
      </span>
 
      <RetroGrid />
    </div>
  );
}