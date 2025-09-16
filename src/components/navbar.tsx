export const Navbar = () => {
  return (
    <div className="flex text-zinc-900 text-lg font-KodeMono">
      <nav
        className="flex w-full justify-center items-center md:gap-8 gap-6 py-2
                 md:text-md text-sm"
      >
        <span className=" hover:text-lime-500 cursor-pointer">
          <a href="#hello">_hello</a>
        </span>
        <span className="hover:text-lime-500 cursor-pointer">
          <a href="#about">_about-me</a>
        </span>
        <span className="hover:text-lime-500 cursor-pointer">
          <a href="#projects">_projects</a>
        </span>
      </nav>
    </div>
  );
};
