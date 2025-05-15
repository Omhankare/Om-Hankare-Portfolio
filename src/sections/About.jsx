import RevealOnScroll from "../UI/RevealOnScroll";

export default function About() {
  const skills = [
    "SQl",
    "Html",
    "Css",
    "Bootstrap",
    "Javascript",
    "React",
    "Express Js",
    "TailwindCSS",
    "Node Js",
    "MongoDB",
    "Version Control",
  ];
  return (
    <section
      id="about"
      className="main-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 
        to-indigo-600 bg-clip-text text-transparent text-center"
          >
            About Me
          </h2>

          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-5 text-xl">
              I'm a passionate full-stack web developer with a strong foundation
              in front-end and back-end technologies. I enjoy building
              responsive, user-friendly web applications and am eager to grow by
              contributing to real-world projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance
               hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>

              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong>
                    <em>B.E. in Computer Science(AIML) </em>
                  </strong>
                  Mumbai University (2021-2024)
                </li>

                <li>
                  Apna college - Delta Course,full stack web devlopment, MERN
                  Stack
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
