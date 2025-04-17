const Comment = ({ children }: { children: string }) => {
  return (
    <span className="text-zinc-500">
      {"//"}
      {children}
    </span>
  );
};
const Variable = ({
  children,
  name,
  comment,
}: {
  children: string;
  name: string;
  comment?: string;
}) => {
  return (
    <div>
      {comment ? <Comment>{comment}</Comment> : <></>}
      <p>
        <span className="text-rose-600">const </span>
        <span className="text-white">{name} </span>
        <span className="text-white">= </span>
        <span className="text-emerald-400">{children}</span>
      </p>
    </div>
  );
};
export const Terminal = () => {
  return (
    <div
      className="bg-gray-950 max-w-[800px] w-full h-[600px] font-[Ubuntu_Mono]
            rounded-lg shadow-[0_0_8px_3px_rgba(0,0,0,0.75)] text-green-500
            border-2 border-orange-700"
    >
      <div className="w-full bg-orange-700 flex">
        <div className="bg-gray-950 ml-2 rounded-t-lg px-6 text-white">
          Terminal
        </div>
      </div>
      <div className="p-4">
        <p className="text-pink-600 whitespace-pre font-mono text-[0.65rem]">
          {`
  ██████╗  █████╗ ██████╗ ██████╗ ██╗███████╗██╗         ███████╗ █████╗ ███╗   ██╗████████╗ ██████╗ ███████╗
██╔════╝ ██╔══██╗██╔══██╗██╔══██╗██║██╔════╝██║         ██╔════╝██╔══██╗████╗  ██║╚══██╔══╝██╔═══██╗██╔════╝
██║  ███╗███████║██████╔╝██████╔╝██║█████╗  ██║         ███████╗███████║██╔██╗ ██║   ██║   ██║   ██║███████╗
██║   ██║██╔══██║██╔══██╗██╔══██╗██║██╔══╝  ██║         ╚════██║██╔══██║██║╚██╗██║   ██║   ██║   ██║╚════██║
╚██████╔╝██║  ██║██████╔╝██║  ██║██║███████╗███████╗    ███████║██║  ██║██║ ╚████║   ██║   ╚██████╔╝███████║
 ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚══════
`}
        </p>

        <p className="mt-2 mb-2">
          Welcome to my terminal-inspired portfolio — a simple, yet powerful way
          to showcase my skills and projects. Navigate through this digital
          terminal interface to explore my work.
        </p>
        <span>Gabriel@guest:{"~$"}</span>
        <span className="text-white">{" ls"}</span>
        <div className="flex flex-col text-blue-500">
          <span>About me</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};
