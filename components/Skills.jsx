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

  return (
    <section
      className="bg-gray-200 flex flex-col items-center justify-center
                 min-h-screen w-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12" // Responsive padding and min-height
    >
      <h1
        className="text-5xl sm:text-6xl md:text-7xl text-indigo-500 font-bold
                   mb-12 text-center skills-heading" // Responsive font size, centered text
      >
        My Skills
      </h1>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4
                      gap-10 items-center sm:gap-8 md:gap-10 p-4 rounded-xl shadow-2xl bg-gray-100 max-w-7xl w-full"
      >
        {" "}
        {/* Responsive grid */}
        {skillData.map((skill, index) => (
          <SkillsTemp
            key={index} // Using index as key is okay if list is static and items don't reorder
            className="skill-box-item" // Apply class for GSAP animation
            src={skill.src}
            alt={skill.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
