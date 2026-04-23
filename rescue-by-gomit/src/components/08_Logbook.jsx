// src/components/08_Logbook.jsx
// นำเข้า useState สำหรับจัดการสถานะข้อมูลภายในแบบฟอร์ม
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Logbook() {
  // 1. การจัดการสถานะ (State Management)
  // State reportText: ใช้สำหรับเก็บข้อความที่ผู้ใช้กำลังพิมพ์ (Controlled Component)
  const [reportText, setReportText] = useState("");
  // State isSubmitted: ใช้ตรวจสอบว่าฟอร์มถูกส่ง (Submit) ไปแล้วหรือไม่
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. ฟังก์ชันจัดการเมื่อกดส่งฟอร์ม (Event Handler)
  // พารามิเตอร์ 'e' ย่อมาจาก Event object ซึ่งเก็บข้อมูลเหตุการณ์ที่เกิดขึ้น
  const handleSubmit = (e) => {
    // เรียกใช้ e.preventDefault() เพื่อป้องกันพฤติกรรมเริ่มต้นของ HTML Form ที่จะรีเฟรชหน้าเว็บเมื่อกดส่ง
    e.preventDefault();

    // ตรวจสอบว่าข้อความไม่เป็นค่าว่าง (ตัดช่องว่างหน้าหลังด้วย trim() แล้ว)
    if (reportText.trim() !== "") {
      // เปลี่ยนสถานะเป็นส่งแล้ว เพื่อกระตุ้นให้ React เรนเดอร์หน้าจอใหม่ (แสดงหน้าขอบคุณ)
      setIsSubmitted(true);

      // หมายเหตุ: ในการทำงานจริง พื้นที่ตรงนี้จะถูกใช้เพื่อเขียนโค้ดส่งข้อมูล (reportText) ไปยัง Backend (API)
    }
  };

  return (
    // โครงสร้างกล่องหลัก
    <div className="w-full max-w-md bg-white shadow-sm rounded-[2.5rem] p-8 sm:p-10 animate-in slide-in-from-right-8 duration-500 border border-slate-100">
      <h1 className="text-2xl font-black text-slate-700 mb-2 uppercase tracking-widest text-center">
        Rescue Logbook
      </h1>
      <p className="text-slate-500 mb-8 text-sm text-center">
        Record the details of your mission.
      </p>

      {/* 3. การแสดงผลตามเงื่อนไข (Conditional Rendering) */}
      {/* ใช้ Ternary Operator ตรวจสอบ State isSubmitted เพื่อเลือกหน้าจอที่จะแสดง */}

      {isSubmitted ? (
        // กรณีที่ 1: isSubmitted มีค่าเป็น true (ฟอร์มถูกส่งแล้ว)
        // แสดงหน้าจอข้อความยืนยันการบันทึกข้อมูล
        <div className="flex flex-col items-center bg-emerald-50 p-6 rounded-2xl border border-emerald-100 animate-in zoom-in duration-300">
          <CheckCircle2 size={48} className="text-emerald-500 mb-4" />
          <p className="font-bold text-slate-700 uppercase tracking-widest">
            Report Saved!
          </p>
          <p className="text-xs text-slate-500 mt-2 text-center">
            "{reportText}"
          </p>

          <button
            // เมื่อคลิกปุ่มนี้ จะรีเซ็ตสถานะทั้งหมดกลับเป็นค่าเริ่มต้น เพื่อให้กลับไปแสดงหน้าฟอร์มอีกครั้ง
            onClick={() => {
              setIsSubmitted(false);
              setReportText("");
            }}
            className="mt-6 text-xs font-bold text-emerald-600 hover:text-emerald-700 underline"
          >
            Write another report
          </button>
        </div>
      ) : (
        // กรณีที่ 2: isSubmitted มีค่าเป็น false (สถานะเริ่มต้น)
        // แสดงแบบฟอร์มสำหรับให้ผู้ใช้กรอกข้อมูล
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">
            Mission Notes
          </label>

          <textarea
            rows="4"
            // ผูกค่าของ textarea เข้ากับ State (Controlled Component)
            value={reportText}
            // เมื่อผู้ใช้พิมพ์ข้อความ onChange จะทำงานและอัปเดตค่า State reportText ทันที
            onChange={(e) => setReportText(e.target.value)}
            placeholder="Type your report here..."
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all resize-none placeholder:text-slate-300"
          />

          <button
            type="submit"
            // ปิดการใช้งานปุ่ม (Disabled) หากค่า reportText ยังเป็นค่าว่าง ป้องกันการส่งข้อมูลเปล่า
            disabled={reportText.trim() === ""}
            className="w-full bg-slate-800 text-white p-4 rounded-2xl font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 active:scale-95 disabled:bg-slate-200 disabled:text-slate-400"
          >
            SUBMIT LOG <Send size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
