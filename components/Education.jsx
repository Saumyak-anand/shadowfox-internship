"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

const Education = () => {
  const router = useRouter();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const educationSectionRef = useRef(null);
  const headingRef = useRef(null);
  const educationCardsContainerRef = useRef(null);

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sikkim Manipal Institute of Technology",
      years: "2023 - 2027 (Expected)",
      details: [
        "Currently pursuing a comprehensive curriculum in computer science.",
        "Focused on data structures, algorithms, web development, and software engineering principles.",
      ],
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Manav Rachna International School, Charmwood",
      years: "till 2022",
      details: [
        "Completed 12th grade with a focus on Science (PCM).",
        "Engaged in various extracurricular activities and science clubs.",
      ],
    },
  ];

  useGSAP(
    () => {
      if (!isAnimatingOut) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(educationSectionRef.current, { opacity: 0, duration: 0.8 })
          .from(
            headingRef.current,
            { y: -50, opacity: 0, duration: 0.7 },
            "-=0.4"
          )
          .from(
            educationCardsContainerRef.current.children,
            {
              y: 50,
              opacity: 0,
              stagger: 0.2,
              duration: 0.6,
              scale: 0.95,
            },
            "-=0.3"
          );
      }
    },
    { scope: educationSectionRef, dependencies: [isAnimatingOut] }
  );

  const handleExitAnimation = (path) => {
    setIsAnimatingOut(true);

    const tl = gsap.timeline({ defaults: { ease: "power2.in" } });

    if (educationCardsContainerRef.current) {
      tl.to(educationCardsContainerRef.current.children, {
        opacity: 0,
        y: -50,
        stagger: 0.1,
        duration: 0.4,
        scale: 0.9,
      });
    }

    tl.to(headingRef.current, { opacity: 0, y: -20, duration: 0.4 }, "<").to(
      educationSectionRef.current,
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
      id="education"
      ref={educationSectionRef}
      className="bg-gray-200 flex flex-col items-center justify-center
                 min-h-screen w-screen py-16 mt-3 px-4 sm:px-6 md:px-8 lg:px-12
                 gap-y-12"
    >
      <h1
        ref={headingRef}
        className="text-5xl sm:text-6xl md:text-7xl text-indigo-500 font-bold
                   text-center education-heading"
      >
        My Education
      </h1>

      <div
        ref={educationCardsContainerRef}
        className="flex flex-col items-center gap-8 w-full max-w-5xl"
      >
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="education-card bg-white p-6 sm:p-8 rounded-xl shadow-lg
                       w-full transform transition-transform duration-300 hover:scale-[1.01]
                       flex flex-col md:flex-row items-start md:items-center gap-4"
          >
            <div className="flex-shrink-0 text-indigo-600 text-2xl font-bold md:w-1/4">
              {edu.years}
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                {edu.degree}
              </h3>
              <p className="text-xl sm:text-2xl text-indigo-500 mb-3">
                {edu.institution}
              </p>
              <ul className="list-disc list-inside text-indigo-700 text-lg sm:text-xl space-y-1">
                {edu.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
