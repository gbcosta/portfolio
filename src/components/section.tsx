import { ReactNode } from "react";

export const Section = ({
  id,
  children,
  h,
}: {
  id: string;
  h: string;
  children: ReactNode;
}) => {
  return (
    <div className="max-w-2xl mt-36" id={id}>
      <h2 className="text-5xl mt-4 font-semibold">{h}</h2>
      <div className="mt-12 text-start">{children}</div>
    </div>
  );
};
