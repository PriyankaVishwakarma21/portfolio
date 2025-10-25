import { useState } from "react";

export default function Navbar() {
  const resumeLink = process.env.REACT_APP_RESUME_LINK;
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#07121a] sticky top-0 z-50 border-b border-gray-800">
      <h1 className="text-xl sm:text-2xl font-bold hr-text">
        Priyanka Vishwakarma
      </h1>
      <button onClick={() => setOpen(!open)} className="sm:hidden text-hr">
        ☰
      </button>
      <div className={`${open ? "block" : "hidden"} sm:flex gap-6`}>
        {["Home", "About", "Projects", "Tech", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block py-2 sm:py-0 text-gray-300 hover:text-hr"
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          href={resumeLink}
          target="_blank"
          className="block py-3 sm:py-0 text-gray-300 hr-btn rounded-xl px-6  hover:text-hr"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
