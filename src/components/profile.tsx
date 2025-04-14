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
export const Profile = () => {
  return (
    <div>
      <div className="text-white flex flex-col gap-2">
        <p className="">Hello World!!! I am</p>
        <h1 className="text-6xl">Gabriel Santos</h1>
        <h2 className="text-rose-600 text-3xl">
          {">"} Front end {"&"} Back end
        </h2>
      </div>
      <div>
        <Variable name="number" comment="My Number">
          "+55 51 985876520"
        </Variable>
        <Variable name="email" comment="Email to contact">
          "gbcostasant@gmail.com"
        </Variable>
        <Variable name="github" comment="Check my Github">
          "https://github.com/gbcosta"
        </Variable>
        <Variable name="Linkedin" comment="My Linkedin">
          "https://www.linkedin.com/in/gbcostasantos/"
        </Variable>
      </div>
    </div>
  );
};
