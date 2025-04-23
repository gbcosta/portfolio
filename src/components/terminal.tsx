import { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";

const Menu = () => {
  return (
    <div className="flex flex-col text-blue-500">
      <span className="text-green-500">Gabriel@guest:{"~$"}</span>
      <span className="cursor-default">
        <a>About me</a>
      </span>
      <span className="cursor-default">
        <a>Projects</a>
      </span>
      <span className="cursor-default">
        <a>Contact</a>
      </span>
    </div>
  );
};

const ErrorMessage = ({ input }: { input: string }) => {
  return (
    <div className="flex flex-col text-red-600">
      <span className="text-green-500">Gabriel@guest:{"~$"}</span>
      <span>
        {input} : The term '{input}' is not recognized as the name of a cmdlet,
        function, script file, or operable program. Check the spelling of the
        name or, if a path was included, verify that the path is correct and try
        again.
      </span>
    </div>
  );
};

export const Terminal = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Array<ReactNode>>([]);
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
        {messages}
        <div className="flex flex-row gap-2 text-white">
          <label className="text-green-500">Gabriel@guest:{"~$"}</label>
          <input
            className="outline-none w-full"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key == "Enter") {
                if (input.trim() == "ls") {
                  setMessages([...messages, <Menu />]);
                } else if (input.trim() == "clear") {
                  setMessages([]);
                } else {
                  setMessages([...messages, <ErrorMessage input={input} />]);
                }

                setInput("");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
