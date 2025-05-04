"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import dailymood from "../assets/dailymood.png";
import journal from "../assets/journal.png";
import dashboard from "../assets/dashboard.png";
import pdf from "../assets/pdf.png";


const content = [
  {
    title: "Daily Mood Login",
    description:
      "Start each day by recording your current mood. This helps you stay in tune with your mental health and track emotional patterns over time. A simple, one-tap check-in to set the tone for your day.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={dailymood}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Journal Writing",
    description:
      "Reflect on your thoughts, experiences, or ideas with our easy-to-use journal. Whether it's a quick note or a deep reflection, capture your day in your own words and grow through self-expression.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={journal}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Analytic Dashboard",
    description:
      "Visualize your mood and journaling habits with insightful charts and data trends. See your progress and mental wellness journey in one interactive dashboard, tailored just for you.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={dashboard}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Local Storage & PDF Download",
    description:
      "Your data stays private — stored locally on your device. Export your journals and mood logs as beautifully formatted PDF files to review or share anytime, anywhere.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={pdf}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full ">
      <StickyScroll content={content} />
    </div>
  );
}
