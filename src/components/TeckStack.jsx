import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiAngular } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function TechStack() {
  const tech = [
    { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-400 text-5xl" />, name: "CSS3" },
    {
      icon: <RiTailwindCssFill className="text-sky-400 text-5xl" />,
      name: "Tailwind",
    },

    {
      icon: <IoLogoJavascript className="text-yellow-400 text-5xl" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript className="text-blue-400 text-5xl" />,
      name: "TypeScript",
    },
    { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js" },
    {
      icon: <SiExpress className="text-green-500 text-5xl" />,
      name: "Express",
    },
    { icon: <SiNestjs className="text-red-500 text-5xl" />, name: "NestJs" },
    { icon: <SiAngular className="text-red-500 text-5xl" />, name: "Angular" },
    { icon: <FaReact className="text-blue-400 text-5xl" />, name: "React" },
    {
      icon: <SiMongodb className="text-green-400 text-5xl" />,
      name: "MongoDB",
    },
    { icon: <SiMysql className="text-blue-500 text-5xl" />, name: "MySQL" },
    { icon: <FaDocker className="text-blue-500 text-5xl" />, name: "Docker" },
  ];

  return (
    <section id="tech" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 gradient-text">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {tech.map((t, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-hr transition"
          >
            {t.icon}
            <span className="mt-3 text-gray-300 text-sm font-medium">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
