export const Navbar = () => {
  return (
    <div className="flex text-zinc-400 text-lg border-2 border-zinc-500  min-w-screen">
      <div className="min-w-72 border-l-2 border-zinc-500 py-2 px-8 cursor-pointer">
        <span className="text-green-500">Gabriel-Santos</span>
      </div>
      <nav className="flex w-full">
        <span className="border-l-2 border-r-2 px-8 py-2 border-zinc-500 hover:text-white cursor-pointer">
          _hello
        </span>
        <span className="border-r-2 px-8 py-2 border-zinc-500 hover:text-white cursor-pointer">
          _about-me
        </span>
        <span className="px-8 py-2 border-zinc-500 border-r-2 hover:text-white cursor-pointer">
          _projects
        </span>
        <div className="flex grow" />
        <span className="border-l-2 border-r-2 px-8 py-2 border-zinc-500 text-green-500 cursor-default">
          _contact
        </span>
      </nav>
    </div>
  );
};
