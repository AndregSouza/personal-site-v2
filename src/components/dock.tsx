"use client"
import React, { useRef, useEffect } from "react";
import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { Linkedin, Menu, Instagram, Home, Camera, Package, User, Github, Twitter, Notebook, ArrowUpRight, X, Volume2 } from "lucide-react";
import { Logo } from "./logo"
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";

export default function Dock() {
    let mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            className="absolute bottom-4 w-fit left-0 right-0 mx-auto  z-10 flex h-[5.2rem] items-center gap-[1.05rem] rounded-3xl border bg-sidebar px-4 py-2"
        >
            <AppIcon mouseX={mouseX} href="/">
                <Home className="h-4 w-4" />
            </AppIcon>

            <AppIcon mouseX={mouseX} href="/projects">
                <Package className="h-4 w-4" />
            </AppIcon>

            <AppIcon mouseX={mouseX} href="/about">
                <User className="h-4 w-4" />
            </AppIcon>

            <AppIcon mouseX={mouseX} href="/notes">
                <Notebook className="h-4 w-4" />
            </AppIcon>

            <AppIcon mouseX={mouseX} href="/photos">
                <Camera className="h-4 w-4" />
            </AppIcon>

            <Separator className="mx-1.5" orientation="vertical" />

            <AppIcon mouseX={mouseX}>
                <ModeToggle />
            </AppIcon>

            <AppIcon mouseX={mouseX}>
                <Volume2 className="h-4 w-4" />
            </AppIcon>

        </motion.div>
    );
}

function AppIcon({ mouseX, children, href }: { mouseX: MotionValue, children?: React.ReactNode, href?: string }) {
    const pathname = usePathname();
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    const isActive = href ? (href === "/" ? pathname === href : pathname.startsWith(href)) : false;

    return (
        <div className="flex flex-col gap-1.5 items-center">
            <Button 
                asChild 
                variant="ghost" 
                size="icon" 
                className={`aspect-square w-[3.40rem] h-[3.40rem] mix-blend-normal border rounded-xl bg-sidebar-active relative flex items-center justify-center ${isActive ? 'border-2 border-foreground border-none' : 'border-none'}`}
            >
                {href ? (
                    <Link href={href}>
                        {children}
                    </Link>
                ) : (
                    children
                )}
            </Button>
        </div>
    );
}