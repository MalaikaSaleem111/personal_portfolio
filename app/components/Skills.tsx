import React from "react";

const skills = [
  { name: "HTML", level: "100%" },
  { name: "CSS", level: "90%" },
  { name: "TypeScript", level: "80%" },
  { name: "Next.js", level: "50%" },
  { name: "Tailwind CSS", level: "60%" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-200 py-10 px-5 border-gray-400 border-t-2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Skills
        </h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-full md:w-1/2">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-semibold text-gray-700">
                  {skill.name}
                </span>
                <span className="text-gray-600">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;