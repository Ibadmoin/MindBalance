import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandFacebook,
  IconBrandLinkedin
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className=" w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />

      ),
      href: "https://www.facebook.com/profile.php?id=100008452442648",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
       
      ),
      href: "https://www.linkedin.com/in/ibad-moin-2b43a8253/",
    },


    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Ibadmoin/",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}
