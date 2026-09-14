import { use } from "react";
import type { ITech } from "../types/tech";
import TechCard from "./TechCard";

interface techProps {
  techPromise: Promise<ITech[]>;
}

const TechStacks = ({ techPromise }: techProps) => {
  const techData = use(techPromise);
  return (
    <div className="bg-black">
      <div className="container mx-auto ">
        <div className="text-start  text-white  ">
          <h1 className=" text-4xl sm:text-5xl lg:text-6xl ">
            Explore the<span className="text-pink-500"> Technologies</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl">
            Pick one technology per category to build your ideal stack.
          </p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {techData.map((tech: ITech, index: number) => {
              return <TechCard key={index} tech={tech}></TechCard>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
