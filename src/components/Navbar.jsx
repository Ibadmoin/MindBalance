"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "../utils/cn";
import tipsData from "../data/TipsData";

function Navbar(className) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-999 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink setActive={setActive} active={active} href="/">
          Home
        </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Journal">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/journal">Journal</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Dashboard">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Dashboard">Dashboard</HoveredLink>
            <HoveredLink href="/">Individual</HoveredLink>
            <HoveredLink href="/">Team</HoveredLink>
            <HoveredLink href="/">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Quick Tips">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            {tipsData.map((tip, idx) => (
              <ProductItem
                key={idx}
                title={tip.title}
                href={tip.href}
                src={tip.src}
                description={tip.description}
                
              />
            ))}
          </div>
        </MenuItem>

        <HoveredLink setActive={setActive} active={active} href="/AboutUs">
          About US
        </HoveredLink>
      </Menu>
    </div>
  );
}

export default Navbar;
