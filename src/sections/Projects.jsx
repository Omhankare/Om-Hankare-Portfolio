import { useState } from "react";
import airbnb from "../assets/airbnb.png";
import mpcb from "../assets/mpcb.png";
import todo from "../assets/todo1.png";
import weather from "../assets/weather.png";
import RevealOnScroll from "../UI/RevealOnScroll";

export default function Projects() {
  const [projects] = useState([
    {
      image: airbnb,
      name: "Airbnb App",
      link: "https://youtu.be/IeslPzpN1mc?si=3108k-nAHnDj5aHg",
      tech: "html, css, JS, Bootstrap, Node.js, Express, MongoDB, Cloudinary",
      brief:
        "Airbnb clone with HTML, CSS, JS, Bootstrap frontend; Node.js and Express backend; MongoDB for data storage and Cloudinary for image hosting and management.",
    },
    {
      image: mpcb,
      name: "MPCB landing page",
      link: "https://youtu.be/PEOIf_3bhH4?si=Ma0Qg8qXsgkxJH6W",
      tech: "html, css, bootstrap",
      brief:
        "MPCB landing page built with HTML, CSS, and Bootstrap featuring responsive design, navigation bar, environmental info sections, and awareness message to promote eco-friendly initiatives.",
    },
    {
      image: todo,
      name: "Todo App",
      link: "https://youtu.be/hC5j5N8NgA8?si=RhsaPTCca2utP2wk",
      tech: "react, redux",
      brief:
        "A Todo List app built with React.js and Redux for state management, enabling task addition, deletion, and completion with a clean UI.",
    },
    {
      image: weather,
      name: "Weather App",
      link: "https://youtu.be/pspjrXY_Osw?si=TgkARfv7aue3fSiD",
      tech: "react",
      brief:
        "A React-based Weather App fetching live weather data via API, displaying temperature, humidity, and conditions with a clean UI and city-wise search functionality.",
    },
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500
         to-indigo-600 bg-clip-text text-transparent text-center"
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10
                hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.8)] hover:-translate-y-1 transition-all
                hover:bg-cyan-900"
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief}</p>

                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {project.tech.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance
                    hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div
                  className="flex flex-col items-center py-3 px-4 border-2
                  border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]
                  cursor-pointer rounded-xl transition"
                >
                  <p className="text-gray-200 mb-2">View Project</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center font-bold text-blue-400 transition-colors hover:text-white"
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} Image`}
                      className="w-full max-w-xs rounded-md"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
