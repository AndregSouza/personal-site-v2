"use client"
import * as React from "react"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { CameraOutlined, CameraFilled, NotebookOutlined, NotebookFilled, UserOutlined, UserFilled, HomeFilled, HomeOutlined, VolumeOnline, VolumeMuted, CubeFilled, CubeOutlined, Sun, Moon } from "../icons/index";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSound } from 'use-sound';
import { MotionLink } from "./customMotionComponent";

export default function Dock() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isMobile = () => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 768;
        }
        return false;
    };

    const [isSoundEnabled, setIsSoundEnabled] = useState(!isMobile());

    const [playDarkSound] = useSound("/sounds/darkmode.wav", { soundEnabled: isSoundEnabled });
    const [playLightSound] = useSound("/sounds/lightmode.wav", { soundEnabled: isSoundEnabled });
    const [playEnabledSound] = useSound("/sounds/turn-on.wav", { forceSoundEnabled: true });
    const [playDisabledSound] = useSound("/sounds/turn-off.wav", { soundEnabled: isSoundEnabled });
    const [playClickSound] = useSound("/sounds/click.wav", { soundEnabled: isSoundEnabled });

    const handleAudioClick = () => {
        if (isSoundEnabled) {
            playDisabledSound();
        } else {
            playEnabledSound();
        }
        setIsSoundEnabled(!isSoundEnabled);
    };

    const handleThemeClick = () => {
        if (theme === "dark") {
            setTheme("light");
            playLightSound();
        } else {
            setTheme("dark");
            playDarkSound();
        }
    };

    const handleClick = () => {
        playClickSound()
    }

    if (!mounted) return null;

    return (
        <footer className="fixed bottom-6 left-6 right-6 overflow-x-auto sm:overflow-visible rounded-2xl max-w-fit bg-component border mx-auto shadow-[_0_1px_1px_-0.5px_rgba(0,0,0,0.04),_0_3px_3px_-1.5px_rgba(0,0,0,0.04),_0_12px_12px_-6px_rgba(0,0,0,0.04)]">
            <motion.div className="flex w-fit left-0 right-0 z-10 flex h-[3.5rem] items-center gap-2 px-2 py-2">
                <AppIcon
                    href="/"
                    ariaLabel="Home"
                    isActive={pathname === "/"}
                    FilledIcon={HomeFilled}
                    OutlinedIcon={HomeOutlined}
                    onClick={handleClick}
                />
                <AppIcon
                    href="/projects"
                    ariaLabel="Projects"
                    isActive={pathname.startsWith("/projects")}
                    FilledIcon={CubeFilled}
                    OutlinedIcon={CubeOutlined}
                    onClick={handleClick}
                />
                <AppIcon
                    href="/about"
                    ariaLabel="About"
                    isActive={pathname.startsWith("/about")}
                    FilledIcon={UserFilled}
                    OutlinedIcon={UserOutlined}
                    onClick={handleClick}
                />
                <AppIcon
                    href="/notes"
                    ariaLabel="Notes"
                    isActive={pathname.startsWith("/notes")}
                    FilledIcon={NotebookFilled}
                    OutlinedIcon={NotebookOutlined}
                    onClick={handleClick}
                />
                <AppIcon
                    href="/photos"
                    ariaLabel="Photos"
                    isActive={pathname.startsWith("/photos")}
                    FilledIcon={CameraFilled}
                    OutlinedIcon={CameraOutlined}
                    onClick={handleClick}
                />

                <Separator className="mx-1.5" orientation="vertical" />

                <ModeToggle
                    handleClick={handleThemeClick}
                    FilledIcon={Sun}
                    OutlinedIcon={Moon}
                    ariaLabel="Toggle Theme"
                    isActive={theme === "dark"}
                />

                <ModeToggle
                    handleClick={handleAudioClick}
                    FilledIcon={VolumeOnline}
                    OutlinedIcon={VolumeMuted}
                    ariaLabel="Toggle Audio"
                    isActive={isSoundEnabled}
                    className="audio-toggle-button"
                />
            </motion.div>
        </footer>
    );
}

interface AppIconProps {
    href: string;
    ariaLabel: string;
    isActive: boolean;
    FilledIcon: React.ComponentType<{ className: string }>;
    OutlinedIcon: React.ComponentType<{ className: string }>;
    onClick: () => void;
}

function AppIcon({ href, ariaLabel, isActive, FilledIcon, OutlinedIcon, onClick }: AppIconProps) {

    const Icon = isActive ? FilledIcon : OutlinedIcon;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <MotionLink href={href}
                        className={`shrink-0 overflow-hidden flex h-10 bg-component rounded-xl items-center justify-center px-[10px] ${isActive
                            ? "bg-component-active"
                            : "hover:bg-accent"
                            }`}
                        onClick={onClick}
                    >
                        <Icon className="h-5 w-5" />

                        <AnimatePresence>
                            {isActive && (
                                <motion.span
                                    key="label"
                                    initial={{ opacity: 0, width: 0, marginLeft: 4 }}
                                    animate={{
                                        opacity: 1, width: 'auto', marginLeft: 4,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        width: 0,
                                        marginLeft: 0,
                                        transition: {
                                            opacity: { duration: 0.2 },
                                            marginLeft: { delay: 0.2, duration: 0.1 },
                                            width: { duration: 0.3 }
                                        }
                                    }}
                                    transition={{ duration: 0.3 }}

                                    className="text-sm font-medium whitespace-nowrap overflow-hidden text-accent-foreground leading-snug"
                                >
                                    {ariaLabel}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </MotionLink>
                </TooltipTrigger>
                <TooltipContent>
                    <span>{ariaLabel}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

interface ModeToggleProps {
    handleClick: () => void;
    FilledIcon: React.ComponentType<{ className: string }>;
    OutlinedIcon: React.ComponentType<{ className: string }>;
    ariaLabel: string;
    isActive: boolean;
    className?: string;
}

function ModeToggle({ handleClick, FilledIcon, OutlinedIcon, ariaLabel, isActive, className }: ModeToggleProps) {
    const Icon = isActive ? FilledIcon : OutlinedIcon;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleClick}
                        aria-label={ariaLabel}
                        className={`shrink-0 aspect-square w-[2.5rem] h-[2.5rem] mix-blend-normal rounded-xl relative flex items-center justify-center ${className}`}
                    >
                        <Icon className="h-5 w-5" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>{ariaLabel}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

AppIcon.displayName = "AppIcon";
ModeToggle.displayName = "ModeToggle";