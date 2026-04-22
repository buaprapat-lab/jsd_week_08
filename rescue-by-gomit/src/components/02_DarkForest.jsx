//02_DarkForest.jsx

import DeepCave from "./03_DeepCave";

export default function DarkForest(props) {
  return (
    <div className="w-[90%] bg-emerald-900/10 p-8 rounded-3xl flex flex-col items-center border border-emerald-100 mt-6">
      <h2 className="text-xl text-emerald-600 mb-6 font-['Bebas_Neue'] tracking-widest">
        LEVEL 02: DARK FOREST
      </h2>
      {/* ส่งทอด Props ลงไปอีกชั้น */}
      <DeepCave {...props} />
    </div>
  );
}
