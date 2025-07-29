import React from "react";
import Image from "next/image";
import link from "@/assets/linkedn.png";
import github from "@/assets/github.png";
import gmail from "@/assets/gmail.png";

function Footer() {
  return (
    <div>
      <div className="flex justify-center items-center gap-6 sm:gap-10 mt-2 flex-wrap">
        {" "}
        {/* Added flex-wrap for smaller screens */}
        {[
          {
            src: gmail,
            alt: "gmail",
            href: "mailto:saumyak.anand@gmail.com?subject=Inquiry&body=Hi%20Saumyak,%0AI%20am%20writing%20to%20inquire%20about...",
          },
          {
            src: link,
            alt: "linkedn",
            href: "https://www.linkedin.com/in/saumyak-anand-119063282/",
          },
          {
            src: github,
            alt: "github",
            href: "https://github.com/Saumyak-anand",
          },
        ].map((item) => (
          <a
            key={item.alt} // Unique key for list items
            href={item.href}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            className="social-icon-item transform hover:scale-110 transition-transform duration-300"
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain" // Responsive image size
            />
          </a>
        ))}
      </div>
      <footer className="w-full bg-black text-white text-center py-3">
        <p className="text-sm sm:text-base md:text-lg">
          &copy; {new Date().getFullYear()} Saumyak Anand. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
