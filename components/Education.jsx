const Education = () => {
  // Define your education data
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

  return (
    <section
      id="education" // Important: ID for Navbar smooth scrolling
      className="bg-gray-200 flex flex-col items-center justify-center
                 min-h-screen w-screen py-16 mt-3 px-4 sm:px-6 md:px-8 lg:px-12
                 gap-y-12 /* Consistent spacing between heading and content */"
    >
      <h1
        className="text-5xl sm:text-6xl md:text-7xl text-indigo-500 font-bold
                   text-center education-heading"
      >
        My Education
      </h1>

      <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
        {educationData.map((edu, index) => (
          <div
            key={index} // Using index as key is okay for static lists
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
