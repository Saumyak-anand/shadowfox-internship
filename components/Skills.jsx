"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

import SkillsTemp from "./SkillsTemp";
import cpp from "@/assets/cpp.png";
import html from "@/assets/html.png";
import js from "@/assets/js.png";
import react from "@/assets/react.png";
import tailwind from "@/assets/tailwind.png";
import python from "@/assets/python.png";
import git from "@/assets/git.png";
import css from "@/assets/css.png";

const Skills = () => {
  const router = useRouter();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false); // State to control exit animation

  // Refs for GSAP targeting
  const skillsSectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridContainerRef = useRef(null);

  const skillData = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: js, alt: "JavaScript" },
    { src: react, alt: "React.js" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: git, alt: "Git & GitHub" },
    { src: cpp, alt: "C++" },
    { src: python, alt: "Python" },
  ];

  useGSAP(
    () => {
      if (!isAnimatingOut) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(skillsSectionRef.current, { opacity: 0, duration: 0.8 }) // Fade in the whole section
          .from(
            headingRef.current,
            { y: -50, opacity: 0, duration: 0.7 },
            "-=0.4"
          )
          .from(
            gridContainerRef.current,
            { scale: 0.8, opacity: 0, duration: 0.6 },
            "-=0.3"
          )
          .from(
            gridContainerRef.current.children,
            {
              y: 20,
              opacity: 0,
              stagger: 0.1,
              duration: 0.4,
            },
            "-=0.2"
          );
      }
    },
    { scope: skillsSectionRef, dependencies: [isAnimatingOut] }
  );

  const handleExitAnimation = (path) => {
    setIsAnimatingOut(true);

    const tl = gsap.timeline({ defaults: { ease: "power2.in" } });

    tl.to(gridContainerRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.3,
    })
      .to(headingRef.current, { opacity: 0, y: -20, duration: 0.4 }, "<")
      .to(
        skillsSectionRef.current,
        {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            router.push(path);
          },
        },
        "-=0.2"
      );
  };

  return (
    <section
      ref={skillsSectionRef}
      className="bg-gray-200 flex flex-col items-center justify-center
                 min-h-screen w-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <h1
        ref={headingRef}
        className="text-5xl sm:text-6xl md:text-7xl text-indigo-500 font-bold
                   mb-12 text-center skills-heading"
      >
        My Skills
      </h1>
      <div
        ref={gridContainerRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4
                   gap-10 items-center sm:gap-8 md:gap-10 p-4 rounded-xl shadow-2xl bg-gray-100 max-w-7xl w-full"
      >
        {skillData.map((skill, index) => (
          <SkillsTemp key={index} src={skill.src} alt={skill.alt} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
