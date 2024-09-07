"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface LinkItem {
    href: string;
    text: string;
}

interface ContentNavigateProps {
    links: LinkItem[];
}

const cn = (...classes: (string | undefined)[]): string => classes.filter(Boolean).join(' ');

export const ContentNavigate: React.FC<ContentNavigateProps> = ({ links }) => {
    const pathname = usePathname();

    return (
        <aside className="fixed w-64 max-w-lg top-24 left-80">
            <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                {links.map(({ text, href }, index) => (
                    <NavItem key={index} href={href} isActive={pathname === href}>
                        {text}
                    </NavItem>
                ))}
            </nav>
        </aside>
    );
}

interface NavItemProps {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, isActive, children }) => {
    return (
        <React.Fragment>
            {href.startsWith("#") ? (
                <a
                    href={href}
                    className={cn(
                        "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start",
                        isActive ? 'bg-muted hover:bg-muted' : 'hover:bg-transparent hover:underline'
                    )}
                >
                    {children}
                </a>
            ) : (
                <Link href={href} passHref legacyBehavior>
                    <a
                        className={cn(
                            "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start",
                            isActive ? 'bg-muted hover:bg-muted' : 'hover:bg-transparent hover:underline'
                        )}
                    >
                        {children}
                    </a>
                </Link>
            )}
        </React.Fragment>
    );
}
