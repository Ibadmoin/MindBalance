"use client";
import React from "react";
import { motion } from "motion/react";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-indigo-500  dark:text-white">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity:1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-[rgba(1,1,1,0.2)]  dark:bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4 ">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent  dark:bg-[rgba(0,0,0,0.6)]  dark:border-white/[0.2] bg-[rgba(0,0,0,0.6)] shadow-input flex justify-center space-x-4 px-8 py-6 ">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
<a href={href} target="_blank" className="flex space-x-2 group">
  <img
    src={src}
    width={140}
    height={70}
    alt={title}
    className="shrink-0 rounded-md shadow-2xl"

  />
  <div>
    <h4 className="text-xl font-bold mb-1 text-white dark:text-white group-hover:text-indigo-500">
      {title}
    </h4>
    <p className="text-white-300 text-sm max-w-[10rem] dark:text-neutral-300 group-hover:text-indigo-400">
      {description}
    </p>
  </div>
</a>

  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className="text-white dark:text-neutral-200 hover:text-indigo-400 ">
      {children}
    </a>
  );
};
