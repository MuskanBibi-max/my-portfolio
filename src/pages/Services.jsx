function Services() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Building modern, responsive, and interactive user interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
      icon: "💻",
    },
    {
      title: "ASP.NET Web Applications",
      desc: "Developing dynamic and scalable web applications using C# and ASP.NET with clean architecture and best practices.",
      icon: "🌐",
    },
    {
      title: "Database Design & Management",
      desc: "Designing and managing relational databases using MySQL, including queries, normalization, and optimization.",
      icon: "🗄️",
    },
    {
      title: "C++ Application Development",
      desc: "Creating object-oriented applications and solving complex programming problems using C++.",
      icon: "⚙️",
    },
    {
      title: "Responsive Web Design",
      desc: "Ensuring websites work seamlessly across desktop, tablet, and mobile devices with a modern user experience.",
      icon: "📱",
    },
    {
      title: "Software Engineering Projects",
      desc: "Applying software engineering principles, documentation, system design, and project development methodologies.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">My Services</h2>

        <p className="text-center text-gray-600 mb-12">
          Services I can provide based on my technical skills and project
          experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
