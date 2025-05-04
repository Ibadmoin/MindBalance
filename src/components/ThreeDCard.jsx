"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function ThreeDCard({ title, subtext, imageUrl, tryNowLink }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[22rem] sm:w-[26rem] h-auto rounded-xl p-5 border">
        <CardItem
          translateZ="50"
          className="text-xl font-semibold text-white dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {subtext}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-6">
          <img
            src={imageUrl}
            alt="thumbnail"
            height="1000"
            width="1000"
            className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-5">
          <CardItem
            translateZ={20}
            as="a"
            href={tryNowLink}
            target="_blank"
            className="px-4 py-2 rounded-md text-sm font-medium dark:text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
