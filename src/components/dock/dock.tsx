"use client"
import * as React from "react"
import {useState, useEffect} from "react"
import { AnimatePresence, motion } from "framer-motion";
import { CameraOutlined, CameraFilled, NotebookOutlined, NotebookFilled, UserOutlined, UserFilled, HomeFilled, HomeOutlined, VolumeOnline, VolumeMuted, CubeFilled, CubeOutlined, Sun, Moon } from "../icons/index";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {useSound} from 'use-sound';
import { MotionLink } from "./customMotionComponent";

export default function Dock() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const [isSoundEnabled, setIsSoundEnabled] = useState(true);

    const [playDarkSound] = useSound("/sounds/darkmode.wav", { soundEnabled: isSoundEnabled });
    const [playLightSound] = useSound("/sounds/lightmode.wav", { soundEnabled: isSoundEnabled });
    const [playEnabledSound] = useSound("/sounds/enable.wav", { forceSoundEnabled: true });
    const [playDisabledSound] = useSound("/sounds/disable.wav", { soundEnabled: isSoundEnabled });
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
        <motion.div
            className="fixed bottom-6 left-6 right-6 w-fit left-0 right-0 mx-auto z-10 flex h-[4rem] items-center gap-2 rounded-2xl border bg-sidebar px-4 py-2"
        >
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
            />
        </motion.div>
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
                        animate={{
                            gap: isActive ? '0.5rem' : '0rem'
                        }}
                        className={`overflow-hidden flex h-10 rounded-xl items-center justify-center px-[10px] ${isActive
                            ? " bg-sidebar-active"
                            : "bg-sidebar hover:bg-sidebar-hover"
                            }`}
                        transition={{ duration: 0.3 }}
                        onClick={onClick}
                    >
                        <Icon className="h-5 w-5" />

                        <AnimatePresence>
                            {isActive && (
                                <motion.span
                                    key="label"
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 'auto' }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
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
}

function ModeToggle({ handleClick, FilledIcon, OutlinedIcon, ariaLabel, isActive }: ModeToggleProps) {
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
                        className="aspect-square w-[2.5rem] h-[2.5rem] mix-blend-normal rounded-xl relative flex items-center justify-center"
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