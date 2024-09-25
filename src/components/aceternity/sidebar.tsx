"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Menu, Instagram, Home, Camera, Package, User, Github, Twitter, Notebook, ArrowUpRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Links {
  id: number;
  label: string;
  href: string;
  icon: React.ReactNode;
  type: "internal" | "external";
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = React.createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = (
  {
    children, open: openProp, setOpen: setOpenProp, animate = true,
  }: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
  }
) => {
  const [openState, setOpenState] = React.useState(false);

  const open = openProp ?? openState;
  const setOpen = setOpenProp ?? setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children, open, setOpen, animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <aside className="hidden md:block h-svh min-w-72 bg-sidebar">
        <motion.div
          className={cn(
            "h-svh pl-4 pr-2 hidden md:flex md:gap-4 md:flex-col bg-sidebar flex-shrink-0",

            className
          )}
          animate={{
            width: animate ? (open ? "288px" : "60px") : "288px",
          }}
          /* onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)} */
          {...props}
        >
          {children}
        </motion.div>
      </aside>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();

  return (
    <>
      <div
        className={cn(
          "px-4 py-2 z-[100] h-auto flex flex-row md:hidden items-center justify-between bg-sidebar w-full"
        )}
        {...props}
      >
        <div className="flex justify-start z-20 w-full">
          <Button variant="outline" size="icon" onClick={() => setOpen(!open)}>
            <Menu
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100"
            />
          </Button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-sidebar p-4 pt-0 z-[100] flex flex-col gap-8",
                className
              )}
            >
              <div
                className="absolute left-4 top-2 z-50">
                <Button variant="outline" size="icon" onClick={() => setOpen(!open)}>
                  <X
                    className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100"
                  />
                </Button>
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLinks = ({ className, ...props }: { className?: string; props?: LinkProps; }) => {
  const tabs = [
    { id: 0, label: "Home", href: "/", icon: <Home className="h-4 w-4" />, type: "internal" },
    { id: 1, label: "Projects", href: "/projects", icon: <Package className="h-4 w-4" />, type: "internal" },
    { id: 2, label: "About", href: "/about", icon: <User className="h-4 w-4" />, type: "internal" },
    { id: 3, label: "Notes", href: "/notes", icon: <Notebook className="h-4 w-4" />, type: "internal" },
    { id: 4, label: "Photos", href: "/photos", icon: <Camera className="h-4 w-4" />, type: "internal" },

    /* { id: 9, label: "3D", href: "/3d", icon: <Camera className="h-4 w-4" />, type: "internal" } */

    { id: 5, label: "Twitter", href: "https://x.com/andregsweb", icon: <Twitter className="h-4 w-4" />, type: "external" },
    { id: 6, label: "Instagram", href: "https://www.instagram.com/andregsweb/", icon: <Instagram className="h-4 w-4" />, type: "external" },
    { id: 7, label: "Github", href: "https://github.com/andregsweb", icon: <Github className="h-4 w-4" />, type: "external" },
    { id: 8, label: "Linkedin", href: "https://www.linkedin.com/in/andregsweb/", icon: <Linkedin className="h-4 w-4" />, type: "external" }
  ]

  const { open, setOpen } = useSidebar();
  const pathname = usePathname();

  let initialtab = 0

  tabs.map((item => {
    // Check if the pathname starts with the href (for subdirectories)
    // or if it's an exact match (for root and single-level paths)
    if (pathname.startsWith(item.href) || pathname === item.href) {
      initialtab = item.id;
    }
  }))

  let [activeTab, setActiveTab] = React.useState(pathname === "/" ? tabs[0].id : tabs[initialtab].id)

  React.useEffect(() => {
    const activeItem = tabs.find((item) => {
      if (item.href === "/") {
        // Only match Home for exact "/"
        return pathname === item.href;
      } else {
        // For other paths, use startsWith
        return pathname.startsWith(item.href);
      }
    });
    if (activeItem) {
      setActiveTab(activeItem.id);
    }
  }, [pathname]);

  const handleLinkClick = () => {
    setOpen(false)
  };

  return (
    <>
      {tabs.filter((item) => item.type == "internal").map((item => (
        <Link
          key={item.id}
          className={
            cn(`relative text-sm flex items-center gap-3 font-medium rounded-lg px-3 h-auto py-4 text-muted-foreground hover:text-foreground hover:bg-component-hover sm:py-2 }`,
              className)}{...props}
          href={item.href}
          target={item.type === "external" ? "_blank" : "_self"}
          onClick={() => handleLinkClick()}>
          <span className={activeTab === item.id ? "relative flex z-20 items-center text-foreground gap-3" : "relative z-20 flex items-center gap-3"}>
            {item.icon}
            <span className={activeTab === item.id ? "font-medium " : ""}>
              {item.label}
            </span>
          </span>
          {item.type === "external" && <ArrowUpRight className="h-4 w-4 ml-auto" />}
          {activeTab === item.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-sidebar-active"
              style={{ borderRadius: 6 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
      )))}
      <div className=" text-sm mt-4 py-2 px-3 font-medium text-muted-foreground">Online</div>
      {tabs.filter((item) => item.type == "external").map((item => (
        <Link
          key={item.id}
          className={
            cn(`relative text-sm flex items-center gap-3 font-medium rounded-lg px-3 h-auto py-4 text-muted-foreground hover:text-foreground hover:bg-sidebar-hover sm:py-2 }`,
              className)}{...props}
          href={item.href}
          target={item.type === "external" ? "_blank" : "_self"}
          onClick={() => handleLinkClick()}>
          <span className={activeTab === item.id ? "relative flex z-20 items-center text-foreground gap-3" : "relative z-20 flex items-center gap-3"}>
            {item.icon}
            <span className={activeTab === item.id ? "font-medium " : ""}>
              {item.label}
            </span>
          </span>
          {item.type === "external" && <ArrowUpRight className="h-4 w-4 ml-auto" />}
          {activeTab === item.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-sidebar-active"
              style={{ borderRadius: 6 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
      )))}
    </>
  )
};