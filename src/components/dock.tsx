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
            stop();
        } else {
            playDisabledSound({ forceSoundEnabled });
        }
        setIsSoundEnabled(!isSoundEnabled);
    };

    const handleThemeClick = () => {
        playThemeSound();
        setTheme(theme === "dark" ? "light" : "dark");
    };


    const navigationItems = [
        {
            ariaLabel: "Home",
            href: "/",
            isActive: pathname === "/",
            FilledIcon: HomeFilled,
            OutlinedIcon: HomeOutlined
        },
        {
            ariaLabel: "Projects",
            href: "/projects",
            isActive: pathname.startsWith("/projects"),
            FilledIcon: CubeFilled,
            OutlinedIcon: CubeOutlined
        },
        {
            ariaLabel: "About me",
            href: "/about",
            isActive: pathname.startsWith("/about"),
            FilledIcon: UserFilled,
            OutlinedIcon: UserOutlined
        },
        {
            ariaLabel: "Notes",
            href: "/notes",
            isActive: pathname.startsWith("/notes"),
            FilledIcon: NotebookFilled,
            OutlinedIcon: NotebookOutlined
        },
        {
            ariaLabel: "Photos",
            href: "/photos",
            isActive: pathname.startsWith("/photos"),
            FilledIcon: CameraFilled,
            OutlinedIcon: CameraOutlined
        },
        {
            ariaLabel: "Toggle Theme",
            isActive: false,
            FilledIcon: Sun,
            OutlinedIcon: Moon,
            onClick: handleThemeClick
        },
        {
            ariaLabel: "Toggle Audio",
            isActive: false,
            FilledIcon: VolumeOnline,
            OutlinedIcon: VolumeMuted,
            onClick: handleAudioClick
        }
    ];

    return (
        <motion.div className="fixed bottom-6 w-fit left-0 right-0 mx-auto z-10 flex h-[4rem] items-center gap-2 rounded-2xl border bg-sidebar px-4 py-2">
        {navigationItems.map((item, index) => (
            <React.Fragment key={item.ariaLabel}>
                <AppIcon
                    href={item.href}
                    ariaLabel={item.ariaLabel}
                    isActive={item.isActive}
                    FilledIcon={item.FilledIcon}
                    OutlinedIcon={item.OutlinedIcon}
                    onClick={item.onClick}
                />
                {index === navigationItems.length - 3 && (
                    <Separator className="mx-1.5" orientation="vertical" />
                )}
            </React.Fragment>
        ))}
    </motion.div>
    );
}

function AppIcon({ href, ariaLabel, isActive, FilledIcon, OutlinedIcon, onClick }: { href?: string, ariaLabel: string, isActive: boolean, FilledIcon: React.ComponentType<{ className: string }>, OutlinedIcon: React.ComponentType<{ className: string }>, onClick?: () => void; }) {
    const Icon = isActive ? FilledIcon : OutlinedIcon;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        asChild={!onClick}
                        variant="ghost"
                        size="icon"
                        className={`aspect-square w-[2.5rem] h-[2.5rem] mix-blend-normal rounded-xl relative flex items-center justify-center ${isActive ? 'bg-sidebar-active' : ''}`}
                        aria-label={ariaLabel}
                        onClick={onClick}
                    >
                        {href && !onClick ? (
                            <Link href={href}>
                                <Icon className="h-5 w-5" />
                            </Link>
                        ) : (
                            <Icon className="h-5 w-5" />
                        )}

                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>{ariaLabel}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}