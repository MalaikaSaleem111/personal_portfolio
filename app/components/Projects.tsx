import Image from "next/image";
const projects = [
 
  {
    title: "Resume Builder",
    description: "An application to create professional resumes.Designed with HTML, CSS, and JavaScript, it allows users to input their details and generate a neatly formatted resume.",
    image: "/resume-builder.jpg",
  },
  {
    title: "PakWheel Clone",
    description: "clone of the popular car buying and selling platform, PakWheels, developed using Next.js and Tailwind CSS.",
    image: "/pakwheel.jpg", 
  },
  {
    title: "Responsive Website",
    description: "A sleek and responsive e-commerce website designed for selling books online. Built with Next.js and Tailwind CSS, the website features a clean interface with categorized book listings, making it easy for users to browse and shop.",
    image: "/bookwebsite.jpg", 
  },
  {
    title: "Countdown Timer",
    description: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
    image: "/countdown-timer.jpg", 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-200 py-10 px-5 border-gray-400 border-t-2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index}
              className="bg-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow  border-t-2 border-gray-600">
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
                className="w-full h-40 object-cover "
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 ">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;







