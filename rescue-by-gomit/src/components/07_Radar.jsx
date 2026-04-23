// src/components/07_Radar.jsx
// นำเข้า useState สำหรับจัดการสถานะการเปิดและปิด
import { useState } from "react";
import { Wifi, WifiOff } from "lucide-react";

export default function Radar() {
  // สร้าง State ชื่อ isRadarOn เพื่อเก็บค่าความจริง (Boolean: true หรือ false)
  // กำหนดค่าเริ่มต้นเป็น false (ปิดใช้งาน)
  const [isRadarOn, setIsRadarOn] = useState(false);

  return (
    // โครงสร้างกล่องหลัก กำหนดความกว้างและจัดข้อความให้อยู่กึ่งกลาง
    <div className="w-full max-w-md bg-white shadow-sm rounded-[2.5rem] p-10 text-center animate-in slide-in-from-right-8 duration-500 border border-slate-100">
      {/* ส่วนแสดงไอคอนเรดาร์ */}
      {/* ใช้ Template Literals (เครื่องหมาย ` `) เพื่อตรวจสอบเงื่อนไข isRadarOn และสลับสีพื้นหลังรวมถึงเส้นขอบ */}
      <div
        className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
          isRadarOn
            ? "bg-emerald-50 border-emerald-100"
            : "bg-slate-50 border-slate-100"
        }`}
      >
        {/* ตรวจสอบสถานะเพื่อเลือก Component ไอคอนที่จะแสดงผล พร้อมใส่แอนิเมชันกะพริบ (animate-pulse) เมื่อเปิดใช้งาน */}
        {isRadarOn ? (
          <Wifi size={40} className="text-emerald-500 animate-pulse" />
        ) : (
          <WifiOff size={40} className="text-slate-300" />
        )}
      </div>

      <h1 className="text-2xl font-black text-slate-700 mb-2 uppercase tracking-widest">
        Radar System
      </h1>

      {/* ส่วนแสดงข้อความอธิบายสถานะ ซึ่งจะเปลี่ยนไปตามค่าความจริงของ isRadarOn */}
      <p className="text-slate-500 mb-8 text-sm">
        {isRadarOn
          ? "Searching for Lola's signal..."
          : "Radar is currently offline."}
      </p>

      {/* ส่วนประกอบของปุ่มสวิตช์แบบเลื่อน (Toggle Switch) */}
      <div className="flex flex-col items-center justify-center gap-3">
        {/* ข้อความกำกับสวิตช์ */}
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {isRadarOn ? "ON" : "OFF"}
        </span>

        {/* ปุ่มรับคำสั่งคลิก (โครงสร้างกระบอกสวิตช์) */}
        <button
          // เมื่อเกิดการคลิก จะเรียกใช้ฟังก์ชัน setIsRadarOn เพื่อสลับค่า State ปัจจุบันเป็นค่าตรงข้าม (ใช้เครื่องหมาย ! นำหน้า)
          onClick={() => setIsRadarOn(!isRadarOn)}
          className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none shadow-inner ${
            isRadarOn ? "bg-emerald-500" : "bg-slate-300"
          }`}
        >
          {/* ลูกบิดสวิตช์ (Knob) */}
          {/* ใช้คลาส translate-x ของ Tailwind CSS ร่วมกับ transition เพื่อสร้างภาพเคลื่อนไหวเลื่อนตำแหน่งในแนวนอน */}
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
              isRadarOn ? "translate-x-9" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
