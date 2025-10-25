export default function Projects() {
  const projects = [
    {
      name: "Task Management Api",
      desc: "Build with NestJs to manage task",
    },
    {
      name: "ERP Admission System",
      desc: "Built with Angular & Node.js for university admissions",
    },
    {
      name: "IAQS Admission Desk",
      desc: "Streamlined student registration and payment handling",
    },
  ];
  return (
    <section id="projects" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 gradient-text">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.name}
            className="hr-card p-6 rounded-2xl border border-gray-800 hover:border-hr transition"
          >
            <h3 className="text-xl font-semibold text-hr">{p.name}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
