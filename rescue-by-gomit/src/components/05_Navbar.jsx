// src/components/05_Navbar.jsx
// นำเข้าไอคอนต่างๆ จากไลบรารี lucide-react เพื่อนำมาใช้ประกอบปุ่มเมนู
import { Gamepad2, Home, Map, Box, Power, FileText } from "lucide-react";

// Component นี้รับ Props 2 ตัวจาก App.jsx คือ
// 1. activePage: ค่า State ปัจจุบัน เพื่อบอกว่าขณะนี้ผู้ใช้อยู่หน้าใด
// 2. setActivePage: ฟังก์ชันสำหรับเปลี่ยนค่า State เพื่อสั่งให้เกิดการเรนเดอร์หน้าจอใหม่
export default function Navbar({ activePage, setActivePage }) {
  // ฟังก์ชันสำหรับสร้างชุดคำสั่ง CSS (Class) ให้กับปุ่มเมนูแบบไดนามิก
  // รับพารามิเตอร์ pageName (เช่น "home", "mission") เข้ามาเพื่อตรวจสอบกับ activePage ปัจจุบัน
  const getButtonClass = (pageName) => {
    // นำค่าที่รับมาเทียบกับ State ปัจจุบัน หากตรงกันจะได้ค่าเป็น true
    const isActive = activePage === pageName;

    // คืนค่าชุดคำสั่ง CSS โดยใช้ Template Literals (เครื่องหมาย ` `)
    // และใช้ Ternary Operator ( ? : ) เพื่อสลับรูปแบบการแสดงผลตามค่า isActive
    return `flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider group px-3 sm:px-4 py-2 rounded-full transition-all duration-300 shadow-sm border ${
      isActive
        ? "bg-emerald-500 text-white border-emerald-400 shadow-emerald-200" // กรณีปุ่มนี้ถูกเลือกอยู่ (Active)
        : "bg-white/60 backdrop-blur-sm border-white text-slate-600 hover:border-emerald-200 hover:text-emerald-600 hover:scale-105" // กรณีปกติที่ยังไม่ได้ถูกเลือก
    }`;
  };

  return (
    // โครงสร้างหลักของแถบนำทาง (Navigation Bar)
    // กำหนดให้เนื้อหาแยกไปอยู่ชิดขอบซ้ายและขวา (justify-between) และพับลงมาได้หากหน้าจอเล็ก (flex-wrap)
    <nav className="w-full max-w-3xl bg-white/40 backdrop-blur-md text-slate-700 rounded-3xl sm:rounded-xl px-4 sm:px-6 py-3 flex flex-wrap justify-between items-center mb-8 shadow-sm border border-white/60 gap-3">
      {/* ส่วนแสดงชื่อแอปพลิเคชัน (Logo Area) */}
      <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm pr-4 p-1.5 rounded-full border border-white shadow-sm">
        <div className="bg-emerald-400 p-1.5 rounded-full animate-pulse">
          {/* หมายเหตุ: หากต้องการแสดงไอคอนโลโก้ สามารถเพิ่ม <Gamepad2 size={16} className="text-white" /> ไว้ตรงนี้ได้ */}
        </div>
        <span className="font-black tracking-[0.15em] text-xs sm:text-sm text-slate-700 pt-0.5 animate-pulse">
          Gromit Rescue Team
        </span>
      </div>

      {/* ส่วนปุ่มเมนูต่างๆ (Navigation Links) */}
      <div className="flex flex-wrap items-center gap-2">
        {/* รูปแบบการทำงานของปุ่ม: 
            ใช้ onClick เรียกใช้ฟังก์ชันแบบ Arrow Function เพื่อส่งชื่อหน้าจอไปทำการอัปเดต State */}
        <button
          onClick={() => setActivePage("home")}
          className={getButtonClass("home")}
        >
          <Home
            size={14}
            // ตรวจสอบเงื่อนไขในคลาสของไอคอน: หากไม่ใช่หน้าที่เปิดอยู่ ให้เพิ่มเอฟเฟกต์ขยับไอคอนเมื่อวางเมาส์
            className={
              activePage !== "home"
                ? "group-hover:-translate-y-0.5 transition-transform"
                : ""
            }
          />{" "}
          Home
        </button>

        <button
          onClick={() => setActivePage("mission")}
          className={getButtonClass("mission")}
        >
          <Map
            size={14}
            className={
              activePage !== "mission"
                ? "group-hover:-translate-y-0.5 transition-transform"
                : ""
            }
          />{" "}
          Mission
        </button>

        <button
          onClick={() => setActivePage("supplies")}
          className={getButtonClass("supplies")}
        >
          <Box
            size={14}
            className={
              activePage !== "supplies"
                ? "group-hover:-translate-y-0.5 transition-transform"
                : ""
            }
          />{" "}
          Supplies
        </button>

        <button
          onClick={() => setActivePage("radar")}
          className={getButtonClass("radar")}
        >
          <Power
            size={14}
            className={
              activePage !== "radar"
                ? "group-hover:-translate-y-0.5 transition-transform"
                : ""
            }
          />{" "}
          Radar
        </button>

        <button
          onClick={() => setActivePage("logbook")}
          className={getButtonClass("logbook")}
        >
          <FileText
            size={14}
            className={
              activePage !== "logbook"
                ? "group-hover:-translate-y-0.5 transition-transform"
                : ""
            }
          />{" "}
          Logbook
        </button>
      </div>
    </nav>
  );
}
