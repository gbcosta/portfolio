import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      className="flex text-zinc-400 text-lg border-2 border-zinc-500
            min-w-screen fixed bottom-0 left-0"
    >
      <nav className="flex w-full ">
        <span
          className="border-l-2 border-r-2 px-8 py-2 border-zinc-500
                   text-green-500 cursor-default"
        >
          follow me in:
        </span>
        <span
          className="border-r-2 px-4 py-2 border-zinc-500 hover:text-white
                    flex items-center cursor-pointer"
        >
          <FaLinkedin className="text-2xl" />
        </span>
        <span
          className="px-4 py-2 border-zinc-500 border-r-2 hover:text-white 
                    flex items-center cursor-pointer"
        >
          <FaTwitter className="text-2xl" />
        </span>
        <div className="flex grow" />
        <span
          className="border-l-2 border-r-2 px-8 py-2 border-zinc-500 text-green-500
                    flex flex-row gap-2 items-center cursor-default"
        >
          @gbcosta <FaGithub className="text-2xl" />
        </span>
      </nav>
    </div>
  );
};
