import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function Contact() {
  const linkedin = process.env.REACT_APP_LINKEDIN;
  const github = process.env.REACT_APP_GITHUB;
  const email = process.env.REACT_APP_EMAIL;
  const mobileNo = process.env.REACT_APP_MOBILENO;

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Demo: Message Sent Successfully!");
    form.current.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 gradient-text">Contact Me</h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:border-pink-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:border-yellow-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:border-orange-500"
        ></textarea>
        <button
          type="submit"
          className="mt-8 inline-block hr-btn px-6 py-3 rounded-xl font-semibold hover:opacity-95 transition"
        >
          Send Message
        </button>
         
      </form>

      <div className="container mx-auto px-6">
        <div className="flex justify-end gap-4 text-2xl gradient-text">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={`mailto:${email}`}>
            <MdEmail />
          </a>
          <a href={`tel:+91 ${mobileNo}`}>
            <IoCall />
          </a>
        </div>
      </div>
    </section>
  );
}
