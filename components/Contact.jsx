"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Contact = () => {
  const router = useRouter();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const contactSectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    gsap.to(formRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.in",
      onComplete: async () => {
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "5332916a-ca12-4dad-9790-042a605879cb",
              ...formData,
            }),
          });

          const result = await response.json();

          if (result.success) {
            Swal.fire({
              title: "Success!",
              text: "Message sent successfully!",
              icon: "success",
            });
            setFormData({ name: "", email: "", message: "" });

            gsap.fromTo(
              formRef.current.children,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: "power2.out",
              }
            );
          } else {
            Swal.fire({
              title: "Error!",
              text: result.message || "Something went wrong. Please try again.",
              icon: "error",
            });
            gsap.fromTo(
              formRef.current.children,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: "power2.out",
              }
            );
          }
        } catch (error) {
          console.error("Submission error:", error);
          Swal.fire({
            title: "Error!",
            text: "Could not send message. Please check your network connection.",
            icon: "error",
          });
          gsap.fromTo(
            formRef.current.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.05,
              duration: 0.3,
              ease: "power2.out",
            }
          );
        }
      },
    });
  };

  useGSAP(
    () => {
      if (!isAnimatingOut) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(
          [headingRef.current, subheadingRef.current, formRef.current.children],
          { autoAlpha: 0 }
        );

        tl.to(contactSectionRef.current, { opacity: 1, duration: 0.8 });

        tl.to(
          headingRef.current,
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.4"
        )
          .to(
            subheadingRef.current,
            { y: 0, autoAlpha: 1, duration: 0.6 },
            "-=0.3"
          )
          .to(
            formRef.current.children,
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.15,
              duration: 0.5,
            },
            "-=0.2"
          );
      }
    },
    { scope: contactSectionRef, dependencies: [isAnimatingOut] }
  );

  const handleExitAnimation = (path) => {
    setIsAnimatingOut(true);

    const tl = gsap.timeline({ defaults: { ease: "power2.in" } });

    tl.to(formRef.current.children, {
      autoAlpha: 0,
      y: -50,
      stagger: 0.1,
      duration: 0.4,
    })
      .to(subheadingRef.current, { autoAlpha: 0, y: -20, duration: 0.3 }, "<")
      .to(headingRef.current, { autoAlpha: 0, y: -20, duration: 0.4 }, "<")
      .to(
        contactSectionRef.current,
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
      ref={contactSectionRef}
      className="bg-sky-800 text-white
                 flex flex-col
                 py-20 px-4 sm:px-6 md:px-8 lg:px-12
                 min-h-screen w-screen"
      style={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center flex-grow justify-center w-full max-w-5xl mx-auto">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center contact-heading"
        >
          Get In Touch
        </h1>
        <p
          ref={subheadingRef}
          className="text-lg sm:text-xl md:text-2xl mb-12 text-center max-w-2xl contact-subheading"
        >
          Have a question or want to work together? Feel free to reach out!
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-md mx-auto"
        >
          <input
            name="name"
            type="text"
            onChange={handleInputChange}
            value={formData.name}
            placeholder="Your Name"
            className="form-input-field w-full px-6 py-4 bg-sky-300 rounded-xl border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 hover:bg-sky-400 placeholder-sky-700 text-xl md:text-2xl text-white focus:text-sky-800 hover:text-sky-800 transition duration-300 ease-in-out"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="form-input-field w-full px-6 py-4 bg-sky-300 rounded-xl border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 hover:bg-sky-400 placeholder-sky-700 text-xl md:text-2xl text-white focus:text-sky-800 hover:text-sky-800 transition duration-300 ease-in-out"
            required
          />
          <textarea
            name="message"
            onChange={handleInputChange}
            value={formData.message}
            placeholder="Your Message"
            className="form-input-field w-full px-6 py-4 bg-sky-300 rounded-xl border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 hover:bg-sky-400 placeholder-sky-700 text-xl md:text-2xl text-white focus:text-sky-800 hover:text-sky-800 transition duration-300 ease-in-out"
            rows="3"
            required
          />
          <button
            type="submit"
            className="submit-button mt-4 px-8 py-4 bg-white text-indigo-600 rounded-full hover:text-white hover:bg-indigo-700 font-semibold text-lg md:text-xl transition duration-300 ease-in-out hover:cursor-pointer shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
