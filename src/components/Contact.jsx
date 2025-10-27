import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const linkedin = process.env.REACT_APP_LINKEDIN;
  const github = process.env.REACT_APP_GITHUB;
  const email = process.env.REACT_APP_EMAIL;
  const mobileNo = process.env.REACT_APP_MOBILENO;

  // Email Js
  const toName = process.env.REACT_APP_TO_NAME;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: emailjsPublicKey,
      })
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
        }
      );
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
          name="to_name"
          placeholder="Your To Name"
          value={toName}
          required
          hidden
          className="p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:border-pink-500"
        />
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:border-pink-500"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:border-yellow-400"
        />
        <input
          type="text"
          name="sub"
          placeholder="Your Subject"
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
