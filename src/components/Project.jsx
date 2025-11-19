import { FaGithub } from "react-icons/fa"

function Project() {
    const projects =[
        {
            id: 1,
            title:"ToDo-List",
            description:"This is my first project using React Js and Css.",
            github:"https://github.com/prashantshahthakuri/To-Do-List"
        },
        {
          id: 2,
          title: "Real Estate",
          description: "This Real Estate Dashboard project is developed using React.js for building a dynamic and interactive user interface and styled with Tailwind CSS.",
          github: "https://github.com/prashantshahthakuri/Real-Estate"
        }
    ]
  return (
<section
      id="project"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-gray-700"
    >
        
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Project</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group bg-blue-900 rounded-xl p-6  transition-all duration-300 "
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
              {p.title}
            </h3>

            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
              {p.description}
            </p>

            <div className="flex gap-4 text-sm">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project