import { use, useState } from "react";
import type { ITech } from "../types/tech";
import TechCard from "./TechCard";
import SelectedStack from "../components/SelectedTechs";
import { toast } from "react-toastify";

interface techProps {
  techPromise: Promise<ITech[]>;
}

const TechStacks = ({ techPromise }: techProps) => {
  const techData = use(techPromise);

  const [selectedTechs, setSelectedTechs] = useState<ITech[]>([]);

  const handleAddToStack = (tech: ITech) => {
    if (!selectedTechs.find((item) => item.id === tech.id)) {
      setSelectedTechs([...selectedTechs, tech]);
      toast.success(`${tech.name} added Successfully`);
    }
  };

  const handleRemoveFromStack = (id: string) => {
    const removedTech = selectedTechs.find((item) => item.id === id);
    setSelectedTechs(selectedTechs.filter((item) => item.id !== id));

    if (removedTech) {
      toast.error(`${removedTech.name} removed from stack`);
    }
  };

  const handleClearAll = () => setSelectedTechs([]);

  return (
    <div className="bg-black py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="text-start text-white mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Explore the<span className="text-pink-500"> Technologies</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-9 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {techData.map((tech: ITech, index: number) => (
                <TechCard
                  key={tech.id || index}
                  tech={tech}
                  onAdd={() => handleAddToStack(tech)}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 w-full">
            <SelectedStack
              selectedTechs={selectedTechs}
              onRemove={handleRemoveFromStack}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
