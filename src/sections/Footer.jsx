import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div
        className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300
    font-mono mb-10 "
      >
        <div className="flex gap-10 p-4 justify-center text-white">
          <a
            href="https://www.linkedin.com/in/om-hankare-9498a9226/"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-700 text-white
        "
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.youtube.com/@Codewithom1"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-red-600 text-white
        "
            target="_blank"
          >
            <FaYoutube />
          </a>

          <a
            href="https://github.com/Omhankare"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gray-800 text-white
        "
            target="_blank"
          >
            <FaSquareGithub />
          </a>
        </div>
        <p>@ 2025 Om Hankare. All rights reserved. </p>
      </div>
    </footer>
  );
}
