import Image from "next/image";
import Cert1 from "@/assets/cert1.png";
import Cert2 from "@/assets/cert2.png";

const About = () => {
  const Certificates = [
    { src: Cert1, alt: "Certificate 1" },
    { src: Cert2, alt: "Certificate 2" },
  ];
  return (
    <div className="bg-gray-200 min-h-screen w-screen flex flex-col items-center justify-center p-4 py-16">
      {/* Added py-16 for top/bottom padding to give more breathing room */}
      <h1 className="text-7xl text-indigo-500 font-bold mb-10 about-heading">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-6xl w-full">
        <div className="flex-1 flex flex-col items-center justify-center mb-8 md:mb-0 space-y-4 md:space-y-6">
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
        <div className="flex-1 text-base md:text-xl lg:text-2xl flex flex-col justify-between gap-4 about-text-container text-center md:text-left text-indigo-500">
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
