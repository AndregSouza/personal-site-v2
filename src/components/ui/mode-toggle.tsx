"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import useSound from 'use-sound';
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const [play2] = useSound("/sounds/back.wav");

  const handleClick = () => {
    play2()
    setTheme(isDark ? "light" : "dark")
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleClick} aria-label="Switch Dark/Light Themes" className="w-[3.40rem] h-[3.40rem] relative bg-sidebar-active flex items-center justify-center">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
