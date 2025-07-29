import React from "react";
import Image from "next/image";

const SkillsTemp = ({ src, alt, className }) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center
                  transform transition-transform duration-300 hover:scale-105
                  ${className || ""}`} // Apply passed className here
    >
      <Image src={src} alt={alt} className="w-24 h-24 mb-4 object-contain" />
      <h3 className="text-xl font-semibold text-gray-800 text-center">{alt}</h3>
    </div>
  );
};

export default SkillsTemp;
