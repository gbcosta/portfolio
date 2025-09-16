import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div
      className="fixed top-1/2  -translate-y-1/2 text-4xl gap-2 flex-col ml-4
            md:flex hidden"
    >
      <a href="https://github.com/gbcosta" target="_blank">
        <FaGithub className="hover:text-lime-700 cursor-pointer transition duration-150" />
      </a>
      <a href="https://br.linkedin.com/in/gbcostasantos" target="_blank">
        <FaLinkedin className="hover:text-lime-700 cursor-pointer transition duration-150" />
      </a>
    </div>
  );
};
