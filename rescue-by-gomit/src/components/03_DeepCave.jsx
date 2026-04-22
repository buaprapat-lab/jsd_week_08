//03_DeepCave.jsx

import Dungeon from "./04_Dungeon";

export default function DeepCave(props) {
  return (
    <div className="w-[90%] bg-slate-900/10 p-8 rounded-3xl flex flex-col items-center border border-slate-200 mt-6">
      <h2 className="text-xl text-slate-500 mb-6 font-['Bebas_Neue'] tracking-widest">
        LEVEL 03: DEEP CAVE
      </h2>
      {/* ส่งทอด Props ลงไปชั้นสุดท้าย! */}
      <Dungeon {...props} />
    </div>
  );
}
