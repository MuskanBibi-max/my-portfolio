function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "React + Tailwind Online Store",
    },
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio",
    },
    {
      title: "Internship Portal",
      desc: "ASP.NET web application for internships",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
