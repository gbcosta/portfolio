import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar.tsx";
import { Footer } from "./components/footer.tsx";
import { ProjectsList } from "./components/projects.tsx";
import { Section } from "./components/section.tsx";

import dog from "./images/dog.png";

function App() {
  return (
    <div className="bg-white min-h-screen font-KodeMono">
      <Navbar />
      <Sidebar />
      <div className="flex justify-center">
        <div className="max-w-md">
          <img src={dog} className="w-full" />
        </div>
      </div>
      <div className="text-center items-center flex flex-col mx-4">
        <Section id="hello" h="_hello">
          _hello, welcome to my portfolio. This website was created to show my
          projects and experience. I hope you like these projects as much as I
          enjoyed creating them.
        </Section>

        <Section id="about" h="_about-me">
          _hello, my name is{" "}
          <span className="text-lime-700">GABRIEL SANTOS</span>, and I'm a
          software engineer and game developer. I studied Game Design at
          Unisinos. I love fighting games, RPGs, and competitive programming.
          <div className="mt-2">
            Previous i work as a junior web dev. I have experience in c++ and
            web tecnologies, but i love to learn new thing and create.
          </div>
        </Section>

        <div className="max-w-2xl mb-12" id="projects">
          <h2 className=" text-5xl mt-36">_Projects</h2>
          <ProjectsList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
