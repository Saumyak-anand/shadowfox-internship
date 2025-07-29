"use client";
import Swal from "sweetalert2";

const Contact = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "5332916a-ca12-4dad-9790-042a605879cb",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  }

  return (
    <section
      className="bg-sky-800 text-white
                 flex flex-col
                 py-20 px-4 sm:px-6 md:px-8 lg:px-12
                 min-h-screen w-screen"
    >
      <div className="flex flex-col items-center flex-grow justify-center w-full max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center contact-heading">
          Get In Touch
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-center max-w-2xl contact-subheading">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-md mx-auto"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="form-input-field w-full px-6 py-4 bg-sky-300 rounded-xl border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 hover:bg-sky-400 placeholder-sky-700 text-xl md:text-2xl text-white focus:text-sky-800 hover:text-sky-800 transition duration-300 ease-in-out"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="form-input-field w-full px-6 py-4 bg-sky-300 rounded-xl border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 hover:bg-sky-400 placeholder-sky-700 text-xl md:text-2xl text-white focus:text-sky-800 hover:text-sky-800 transition duration-300 ease-in-out"
            required
          />
          <textarea
            name="message"
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
