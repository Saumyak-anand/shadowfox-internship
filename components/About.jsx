"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

import Cert1 from "@/assets/cert1.png";
import Cert2 from "@/assets/cert2.png";

const About = () => {
  const router = useRouter();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Refs for GSAP targeting
  const aboutSectionRef = useRef(null);
  const headingRef = useRef(null);
  const certsContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const Certificates = [
    { src: Cert1, alt: "Certificate 1" },
    { src: Cert2, alt: "Certificate 2" },
  ];

  useGSAP(
    () => {
      if (!isAnimatingOut) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(aboutSectionRef.current, { opacity: 0, duration: 0.8 }) // Fade in the whole section
          .from(
            headingRef.current,
            { y: -50, opacity: 0, duration: 0.7 },
            "-=0.4"
          )
          .from(
            certsContainerRef.current.children,
            {
              x: -50,
              opacity: 0,
              stagger: 0.2,
              duration: 0.6,
              scale: 0.9,
            },
            "-=0.3"
          )
          .from(
            textContainerRef.current.children,
            {
              x: 50,
              opacity: 0,
              stagger: 0.15,
              duration: 0.5,
            },
            "<"
          );
      }
    },
    { scope: aboutSectionRef, dependencies: [isAnimatingOut] }
  );

  const handleExitAnimation = (path) => {
    setIsAnimatingOut(true);

    const tl = gsap.timeline({ defaults: { ease: "power2.in" } });

    tl.to(textContainerRef.current.children, {
      opacity: 0,
      x: -50,
      stagger: 0.08,
      duration: 0.3,
    })
      .to(
        certsContainerRef.current.children,
        {
          opacity: 0,
          x: 50,
          stagger: 0.1,
          duration: 0.3,
        },
        "<"
      )
      .to(headingRef.current, { opacity: 0, y: -20, duration: 0.4 }, "<")
      .to(
        aboutSectionRef.current,
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
    <div
      ref={aboutSectionRef}
      className="bg-gray-200 min-h-screen w-screen flex flex-col items-center justify-center p-4 py-16"
    >
      <h1
        ref={headingRef}
        className="text-7xl text-indigo-500 font-bold mb-10 about-heading"
      >
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-6xl w-full">
        <div
          ref={certsContainerRef}
          className="flex-1 flex flex-col items-center justify-center mb-8 md:mb-0 space-y-4 md:space-y-6"
        >
          {Certificates.map((cert, index) => {
            return (
              <Image
                key={index}
                src={cert.src}
                alt={cert.alt}
                className="w-64 h-auto object-contain rounded-xl shadow-lg
                           sm:w-80 md:w-96 lg:w-[450px] about-image"
              />
            );
          })}
        </div>
        <div
          ref={textContainerRef}
          className="flex-1 text-base md:text-xl lg:text-2xl flex flex-col justify-between gap-4 about-text-container text-center md:text-left text-indigo-500"
        >
          <p>
            Hello! I'm {""}
            <span className="font-bold text-indigo-800">Saumyak</span>, a
            dedicated web developer with a knack for building beautiful and
            functional web applications. My journey into the world of web
            development began with a curiosity for how things work online, and
            it quickly blossomed into a passion for creating them.
          </p>
          <p>
            I specialize in front-end development, primarily working with
            React.js, Tailwind CSS, and modern JavaScript. I love bringing ideas
            to life through clean, efficient, and user-friendly code. I am a
            keen observer of UI/UX designs & I love to make projects which are
            appealing to the eye.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies or
            enjoying a good book. I'm always eager to learn and grow, and I
            thrive in collaborative environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
