import { FiX, FiTrash2 } from "react-icons/fi";
import type { ITech } from "../types/tech";

interface SelectedStackProps {
  selectedTechs: ITech[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

const SelectedStack = ({
  selectedTechs,
  onRemove,
  onClearAll,
}: SelectedStackProps) => {
  return (
    <div className="w-full lg:sticky lg:top-6 bg-neutral-900/40 border border-neutral-800 rounded-[24px] p-6 backdrop-blur-sm shadow-xl flex flex-col justify-between h-fit min-h-[300px]">
      <div>
        <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Your Stack
          </h3>
          <span className="text-xs font-semibold px-2.5 py-1 bg-pink-500/10 text-pink-400 rounded-full border border-pink-500/20">
            {selectedTechs.length} Selected
          </span>
        </div>

        {selectedTechs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-slate-500 text-sm gap-2">
            <p>No technologies selected yet.</p>
            <p className="text-xs text-slate-600">
              Click "Add to Stack" on any item.
            </p>
          </div>
        ) : (
          <div className="mt-4 flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
            {selectedTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between bg-neutral-900 border border-neutral-800/80 p-3 rounded-xl transition-all hover:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-800 p-1.5 rounded-lg border border-neutral-700">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-white">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
                      {tech.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(tech.id)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-neutral-800 transition-colors"
                >
                  <FiX className="text-base" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedTechs.length > 0 && (
        <div className="mt-6 pt-4 border-t border-neutral-800">
          <button
            onClick={onClearAll}
            className="w-full py-2.5 flex items-center justify-center gap-2 border border-neutral-800 text-slate-400 hover:text-rose-400 hover:bg-rose-500/5 hover:border-rose-500/20 text-xs font-semibold rounded-xl transition-all active:scale-[0.98]"
          >
            <FiTrash2 />
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedStack;
