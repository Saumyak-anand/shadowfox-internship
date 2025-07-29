import homeIcon from "@/assets/homePageIcon.jpg";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen w-screen py-12 px-4 text-center
                bg-sky-800 text-white"
    >
      <Image
        src={homeIcon}
        alt="Profile Picture of Saumyak Anand" // More descriptive alt text
        className="rounded-full w-48 h-48 object-cover mb-8 shadow-lg home-profile-image" // Responsive sizing, object-cover
      />

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 home-intro-name">
        Hi, I'm <span className="font-bold text-yellow-300">Saumyak Anand</span>
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 max-w-3xl home-content-text">
        A Passionate Web Developer interested in Web Technology
      </p>

      <div className="home-contact-button">
        <button
          className="mt-4 px-8 py-4 bg-white text-indigo-600 rounded-full
                           hover:bg-indigo-700 hover:text-white font-semibold
                           text-lg sm:text-xl md:text-2xl
                           transition duration-300 ease-in-out shadow-lg"
        >
          <Link href="/contact">Contact Me</Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
