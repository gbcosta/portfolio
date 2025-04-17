//import { Navbar } from "./components/navbar";
//import { Footer } from "./components/footer";
import { Terminal } from "./components/terminal.tsx";

function App() {
  return (
    <div className="">
      <div
        className="bg-slate-900 min-h-screen min-w-screen flex justify-center
            items-center flex-col px-4"
      >
        <Terminal />
      </div>
    </div>
  );
}

export default App;
