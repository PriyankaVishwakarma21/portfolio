import profileImg from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left py-24 px-4 sm:px-8 gap-8"
    >
      {/* Text Section */}
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold  mb-4">
          <span className="hr-text">Hi, I'm Priyanka 👋</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl">
          A passionate <p className="text-hr">Full Stack Developer</p>{" "}
          experienced in Angular, Node.js, and scalable web applications.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block hr-btn px-6 py-3 rounded-xl font-semibold hover:opacity-95 transition"
        >
          Contact Me
        </a>
      </div>
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={profileImg}
          alt="Priyanka Vishwakarma"
          className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-4 border-gradient-to-r from-pink-500 via-purple-600 to-orange-400 object-cover"
        />
      </div>
    </section>
  );
}
