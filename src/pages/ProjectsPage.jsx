function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Website",
      image: "YOUR_IMAGE",
      description:
        "A modern e-commerce website built with React.js and Tailwind CSS featuring responsive design and a user-friendly interface.",
      github: "https://github.com/MuskanBibi-max/khan804-perfume-store",
    },
    {
      title: "Internship Portal",
      image: "YOUR_IMAGE",
      description:
        "A web-based internship portal developed using ASP.NET and C#. The system allows students to apply for internships, manage applications, and track internship opportunities through a centralized platform.",
      github: "https://github.com/MuskanBibi-max/Internship-Portal",
    },

    {
      title: "Personal Portfolio Website",
      image: "YOUR_IMAGE",
      description:
        "A professional portfolio website built with React.js, Tailwind CSS, React Router, and Framer Motion animations.",
      github: "https://github.com/MuskanBibi-max/Personal-Portfolio-Website",
      demo: "https://personal-portfolio-sandy-gamma-96.vercel.app/",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">My Projects</h1>

        <p className="text-center text-gray-600 mb-12">
          Some of the projects I have worked on.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-900 text-white px-4 py-2 rounded-lg"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
