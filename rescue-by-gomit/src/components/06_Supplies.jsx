// src/components/06_Supplies.jsx
// นำเข้า useState ซึ่งเป็น React Hook สำหรับจัดการสถานะ (ข้อมูลที่เปลี่ยนแปลงได้) ภายใน Component
import { useState } from "react";

export default function Supplies() {
  // สร้าง State ชื่อ count เพื่อเก็บค่าจำนวนตัวเลข โดยกำหนดค่าเริ่มต้นเป็น 0
  // การใช้ useState จะทำให้เวลาฟังก์ชัน setCount ถูกเรียก หน้าจอจะอัปเดตตัวเลขใหม่ทันทีโดยไม่ต้องรีเฟรชเว็บ
  const [count, setCount] = useState(0);

  return (
    // กล่องหลัก ควบคุมความกว้างและจัดให้อยู่ตรงกลาง พร้อมใส่แอนิเมชันเลื่อนเข้ามาจากทางขวา
    <div className="w-full max-w-xl bg-white shadow-sm rounded-[2.5rem] p-10 text-center animate-in slide-in-from-right-8 duration-500 border border-slate-100">
      <h1 className="text-2xl font-black text-slate-700 mb-4 uppercase tracking-widest">
        Supplies Counter
      </h1>
      <p className="text-slate-500 mb-8">
        Count the bones for the rescue journey!
      </p>

      {/* ส่วนควบคุมการนับเลข ประกอบด้วยปุ่มลด ตัวเลขแสดงผล และปุ่มเพิ่ม */}
      <div className="flex justify-center items-center gap-6">
        {/* ปุ่มลดจำนวน: 
            ใช้เหตุการณ์ onClick เพื่อรอรับการคลิก 
            เมื่อคลิก จะนำค่า count ปัจจุบันมาลบออก 1 แล้วบันทึกกลับไปใหม่ */}
        <button
          onClick={() => setCount(count - 1)}
          className="bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-300 transition-all active:scale-95"
        >
          -
        </button>

        {/* พื้นที่แสดงผลค่า State ปัจจุบัน 
            กำหนดความกว้าง (w-16) ไว้เพื่อให้ตัวเลขหลักสิบและหลักหน่วยไม่ทำให้ปุ่มขยับไปมา */}
        <span className="text-4xl font-black text-slate-800 w-16 text-center">
          {count}
        </span>

        {/* ปุ่มเพิ่มจำนวน: 
            ใช้หลักการเดียวกับปุ่มลด แต่นำค่า count ปัจจุบันมาบวกเพิ่ม 1 */}
        <button
          onClick={() => setCount(count + 1)}
          className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-slate-900 transition-all active:scale-95"
        >
          +
        </button>
      </div>
    </div>
  );
}
