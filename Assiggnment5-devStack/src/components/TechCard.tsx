import type { ITech } from "../types/tech";
import { FaStar } from "react-icons/fa";

interface techprops {
  tech: ITech;
  onAdd: () => void;
}

const TechCard = ({ tech, onAdd }: techprops) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start w-full">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-12 h-12 object-contain"
          />
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full tracking-wide">
            {badge}
          </span>
        </div>

        <div className="mt-5 text-left">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            {name}
          </h3>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      <div>
        <div className="mt-6 flex items-center justify-between text-xs font-medium text-slate-500">
          <span className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-md">
            {category}
          </span>
          <span>{difficulty}</span>
          <div className="flex items-center gap-1">
            <FaStar className="text-amber-400 text-sm" />
            <span className="font-semibold text-slate-800">{rating}</span>
          </div>
        </div>

        <button
          onClick={onAdd}
          className="mt-6 w-full py-3 bg-[#0B0F19] text-white font-semibold rounded-xl text-sm transition-all hover:bg-slate-800 active:scale-[0.98] shadow-sm cursor-pointer"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechCard;
