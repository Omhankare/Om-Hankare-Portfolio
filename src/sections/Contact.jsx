import RevealOnScroll from "../UI/RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2
            className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500
         to-indigo-600 bg-clip-text text-transparent text-center"
          >
            Get In Touch
          </h2>

          <form
            action="https://formsubmit.co/omworkstation1@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                required
                className="w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                 focus:border-blue-500 focus:bg-blue-500/5  "
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Example@gmail.com"
                required
                className="w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                 focus:border-blue-500 focus:bg-blue-500/5  "
              />
            </div>

            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                rows={6}
                placeholder="Type your message..."
                required
                className="w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                 focus:border-blue-500 focus:bg-blue-500/5  "
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white flex justify-center cursor-pointer px-6 rounded font-medium
                transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] py-3"
            >
              Submit
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
