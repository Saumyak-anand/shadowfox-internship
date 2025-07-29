import aboutIcon from "@/assets/aboutPageIcon.png";
import Image from "next/image";
const About = () => {
  return (
    <div className=" bg-gray-200 h-screen w-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-7xl text-indigo-500 font-bold mb-10 about-heading">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-6xl w-full">
        {" "}
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
          <Image
            src={aboutIcon}
            alt="About Icon"
            // Consider using more responsive Tailwind classes or custom CSS for image sizing
            className="w-[300px] h-[250px] object-contain rounded-4xl about-image" // Adjusted size for better control, added object-contain
          />
        </div>
        <div className="flex-1 text-1 md:text-2xl flex flex-col justify-between gap-4 about-text-container text-center md:text-left text-indigo-500">
          {" "}
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
            to life through clean, efficient, and user-friendly code.
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
