//01_Surface.jsx

import DarkForest from "./02_DarkForest";

export default function Surface(props) {
  return (
    <div className="w-[90%] max-w-4xl bg-blue-50/50 p-8 rounded-3xl flex flex-col items-center border border-blue-100">
      <h2 className="text-2xl text-blue-300 mb-6 font-['Bebas_Neue']">
        LEVEL 01: SURFACE
      </h2>
      {/* ใช้ {...props} เป็นทางลัดในการส่ง Props ทั้งหมดลงไปทีเดียว */}
      <DarkForest {...props} />
    </div>
  );
}
