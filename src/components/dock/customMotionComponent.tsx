"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Component = React.forwardRef<HTMLAnchorElement, MotionLinkProps>(
  ({ className, href, children, ...props }, ref) => (
    <Link className={className} href={href} ref={ref} {...props}>
      {children}
    </Link>
  )
);

interface MotionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const MotionLink = motion(Component);
