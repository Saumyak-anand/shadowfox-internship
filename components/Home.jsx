"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

import homeIcon from "@/assets/homePageIcon.jpg";

const Home = () => {
  const router = useRouter();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Refs for GSAP targeting
  const homeSectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      if (!isAnimatingOut) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(homeSectionRef.current, { opacity: 0, duration: 0.8 })
          .from(
            imageRef.current,
            { y: 50, opacity: 0, scale: 0.8, duration: 0.7 },
            "-=0.4"
          )
          .from(
            headingRef.current,
            { y: 30, opacity: 0, duration: 0.6 },
            "-=0.4"
          )
          .from(
            paragraphRef.current,
            { y: 20, opacity: 0, duration: 0.5 },
            "-=0.3"
          )
          .from(
            buttonRef.current,
            { y: 20, opacity: 0, duration: 0.5, stagger: 0.2 },
            "-=0.2"
          );
      }
    },
    { scope: homeSectionRef, dependencies: [isAnimatingOut] }
  );
  const handleContactClick = (e) => {
    e.preventDefault();
    setIsAnimatingOut(true);

    const tl = gsap.timeline({ defaults: { ease: "power2.in" } });

    tl.to(buttonRef.current, { y: 20, opacity: 0, duration: 0.3 })
      .to(paragraphRef.current, { y: 20, opacity: 0, duration: 0.3 }, "<")
      .to(headingRef.current, { y: 30, opacity: 0, duration: 0.4 }, "<")
      .to(
        imageRef.current,
        { y: 50, opacity: 0, scale: 0.8, duration: 0.4 },
        "<"
      )
      .to(
        homeSectionRef.current,
        {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            router.push("/contact");
          },
        },
        "-=0.2"
      );
  };

  return (
    <section
      ref={homeSectionRef}
      className="flex flex-col items-center justify-center min-h-screen w-screen py-12 px-4 text-center
                 bg-sky-800 text-white"
    >
      <Image
        ref={imageRef}
        src={homeIcon}
        alt="Profile Picture of Saumyak Anand"
        className="rounded-full w-48 h-48 object-cover mb-8 shadow-lg home-profile-image"
      />

      <h1
        ref={headingRef}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 home-intro-name"
      >
        Hi, I'm <span className="font-bold text-yellow-300">Saumyak Anand</span>
      </h1>
      <p
        ref={paragraphRef}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 max-w-3xl home-content-text"
      >
        A Passionate Web Developer interested in Web Technology
      </p>

      <div ref={buttonRef} className="home-contact-button">
        {" "}
        <button
          onClick={handleContactClick}
          className="mt-4 px-8 py-4 bg-white text-indigo-600 rounded-full
                     hover:bg-indigo-700 hover:text-white font-semibold
                     text-lg sm:text-xl md:text-2xl
                     transition duration-300 ease-in-out shadow-lg"
        >
          <Link href="/contact" className="pointer-events-none">
            Contact Me
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
