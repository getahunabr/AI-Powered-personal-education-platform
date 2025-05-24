"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const navItems = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Companions",
    href: "/Companions",
  },
  {
    label: "My Journey",
    href: "/my-journey",
  },
  {
    label: "Subscription",
    href: "/subscription",
  },
  {
    label: "Sign In",
    href: "/sign-in",
  },
];
const NavItems = () => {
  const pathName = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(pathName === href && "text-primary font-semibold")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
