function Skills() {
  const skills = [
    { name: "React.js", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "Tailwind CSS", level: "90%" },
    { name: "HTML/CSS", level: "95%" },
    { name: "C#", level: "80%" },
    { name: "ASP.NET", level: "85%" },
    { name: "C++", level: "85%" },
    { name: "MySQL", level: "80%" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        {skills.map((skill) => (
          <div key={skill.name} className="mb-6">
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="bg-gray-200 rounded-full h-3">
              <div
                className="bg-indigo-600 h-3 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
