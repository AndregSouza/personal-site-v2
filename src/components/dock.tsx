"use client"
import React from "react";
import { motion } from "framer-motion";
import { CameraOutlined, CameraFilled, NotebookOutlined, NotebookFilled, UserOutlined, UserFilled, HomeFilled, HomeOutlined, VolumeOnline, VolumeMuted, CubeFilled, CubeOutlined, Sun, Moon } from "./icons/index";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import useSound from 'use-sound';

export default function Dock() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);
    const [forceSoundEnabled, setForceSoundEnabled] = React.useState(true);

    const [playThemeSound] = useSound("/sounds/back.wav", { soundEnabled: isSoundEnabled });
    const [playEnabledSound] = useSound("/sounds/back.wav", { soundEnabled: isSoundEnabled });
    const [playDisabledSound] = useSound("/sounds/back.wav", { soundEnabled: isSoundEnabled });

    const handleAudioClick = () => { 
        if (isSoundEnabled) {
            playEnabledSound();
            stop();  // Stops sound if sound is disabled
        } else {
            playDisabledSound({forceSoundEnabled});  // Plays sound if sound is enabled
        }
        setIsSoundEnabled(!isSoundEnabled);
    };

    const handleThemeClick = () => {
        playThemeSound();
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <motion.div
            className="fixed bottom-6 w-fit left-0 right-0 mx-auto z-10 flex h-[4rem] items-center gap-2 rounded-2xl border bg-sidebar px-4 py-2"
        >
            <AppIcon
                href="/"
                ariaLabel="Home"
                isActive={pathname === "/"}
                FilledIcon={HomeFilled}
                OutlinedIcon={HomeOutlined}
            />

            <AppIcon
                href="/projects"
                ariaLabel="Projects"
                isActive={pathname.startsWith("/projects")}
                FilledIcon={CubeFilled}
                OutlinedIcon={CubeOutlined}
            />

            <AppIcon
                href="/about"
                ariaLabel="About me"
                isActive={pathname.startsWith("/about")}
                FilledIcon={UserFilled}
                OutlinedIcon={UserOutlined}
            />

            <AppIcon
                href="/notes"
                ariaLabel="Notes"
                isActive={pathname.startsWith("/notes")}
                FilledIcon={NotebookFilled}
                OutlinedIcon={NotebookOutlined}
            />

            <AppIcon
                href="/photos"
                ariaLabel="Photos"
                isActive={pathname.startsWith("/photos")}
                FilledIcon={CameraFilled}
                OutlinedIcon={CameraOutlined}
            />

            <Separator className="mx-1.5" orientation="vertical" />

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={handleThemeClick} aria-label="Switch Dark/Light Themes" className="aspect-square w-[2.5rem] h-[2.5rem] mix-blend-normal rounded-xl relative flex items-center justify-center">
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span>Toggle theme</span>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={handleAudioClick} aria-label="Toggle Audio" className="aspect-square w-[2.5rem] h-[2.5rem] mix-blend-normal rounded-xl relative flex items-center justify-center">

                            {isSoundEnabled ? (
                                <VolumeOnline className="h-5 w-5" />
                            ) : (
                                <VolumeMuted className="absolute h-5 w-5" />
                            )}

                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span>Toggle audio</span>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </motion.div>
    );
}

function AppIcon({ href, ariaLabel, isActive, FilledIcon, OutlinedIcon }: { href: string, ariaLabel: string, isActive: boolean, FilledIcon: React.ComponentType<{ className: string }>, OutlinedIcon: React.ComponentType<{ className: string }> }) {
    const Icon = isActive ? FilledIcon : OutlinedIcon;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className={`aspect-square w-[2.5rem] h-[2.5rem] mix-blend-normal rounded-xl relative flex items-center justify-center ${isActive ? 'bg-sidebar-active' : ''}`}
                        aria-label={ariaLabel}
                    >
                        <Link href={href}>
                            <Icon className="h-5 w-5" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>{ariaLabel}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}