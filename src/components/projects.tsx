import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import purpeleOcean from "../images/PurpleOceanImage-f5118af1.jpeg";
import portfolio from "../images/portfoliov1-6b90c5ef.png";

export const ProjectsList = () => {
  return (
    <div className="mt-16">
      {" "}
      <ProjectItem
        img={purpeleOcean}
        title="Purple Ocean Theme"
        link="https://purpleocean.netlify.app/"
      >
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </ProjectItem>
      <ProjectItem
        img={portfolio}
        title="First portfolio"
        link="https://gbcostasantv1.netlify.app/"
      >
        My previous portfolio
      </ProjectItem>
    </div>
  );
};

const ProjectItem = ({
  img,
  title,
  link,
  children,
}: {
  img: string;
  title: string;
  link: string;
  children: string;
}) => {
  return (
    <div className="group hover:bg-zinc-300 transition duration-400 cursor-pointer p-4">
      <div className="flex gap-4">
        <img src={img} className="max-w-56 sm:block hidden" />
        <div className="text-start">
          <span
            className="text-xl text-lime-600 flex gap-2 group-hover:text-green-600
                        font-semibold"
          >
            <a href={link} target="_blank">
              {title}
            </a>
            <FaArrowUpRightFromSquare />
          </span>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
