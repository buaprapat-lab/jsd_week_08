// src/components/04_Dungeon.jsx
import { ShieldAlert, Send, Sparkles, CheckCircle } from "lucide-react";

export default function Dungeon({
  gromitMessage,
  lolaInput,
  setLolaInput,
  handleLolaSend,
  rescueStatus,
  pokemon,
  handleReset,
}) {
  // ==========================================
  // 1. LOGIC & CONDITIONS
  // ==========================================
  const isEmergency = ["calling", "recruiting", "traveling"].includes(
    rescueStatus,
  );
  const isSuccess = rescueStatus === "success";

  // คำนวณเปอร์เซ็นต์สำหรับ Progress Bar
  const progress =
    rescueStatus === "calling"
      ? 25
      : rescueStatus === "recruiting"
        ? 50
        : rescueStatus === "traveling"
          ? 75
          : rescueStatus === "success"
            ? 100
            : 0;

  // ==========================================
  // 2. UI RENDERING
  // ==========================================
  return (
    // เปลี่ยน w-[90%] เป็น w-full max-w-xl ให้ Responsive พอดีกับกล่องด้านบน
    // ปรับ padding ให้ตอบสนองตามขนาดจอ (py-8 sm:py-12 px-4 sm:px-8)
    <div
      className={`w-full max-w-xl flex flex-col items-center py-8 sm:py-12 px-4 sm:px-8 rounded-[2.5rem] sm:rounded-[3rem] border-4 transition-all duration-700 mt-6 bg-white
      ${isEmergency ? "border-red-400 shadow-[0_0_40px_rgba(248,113,113,0.15)]" : isSuccess ? "border-emerald-400 shadow-lg shadow-emerald-100" : "border-slate-100 shadow-sm"}`}
    >
      {/* ---------------- 1. HEADER & PROGRESS BAR ---------------- */}
      <div className="flex flex-col items-center mb-6 sm:mb-8 text-center">
        <h2 className="text-xl sm:text-2xl text-slate-700 font-black tracking-[0.4em]">
          SECRET DUNGEON
        </h2>

        {/* แสดง Progress Bar เฉพาะตอนกำลังกู้ภัยหรือสำเร็จแล้ว */}
        {(isEmergency || isSuccess) && (
          <div className="w-48 sm:w-64 mt-4 animate-in fade-in duration-500">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1 tracking-tighter uppercase">
              <span>Rescue Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
              <div
                className={`h-full transition-all duration-1000 ${isSuccess ? "bg-emerald-400" : "bg-red-400"}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ---------------- 2. CHARACTER ZONE ---------------- */}
      {/* ปรับความสูงและระยะห่างให้ Responsive */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 min-h-[160px] sm:min-h-[200px]">
        {/* กรอบรูปภาพ Lola ปรับขนาด w-32 บนมือถือ w-40 บนจอใหญ่ */}
        <div
          className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-slate-50 shadow-sm overflow-hidden bg-white transition-all duration-500
          ${isEmergency ? "animate-flicker border-red-200 shadow-red-200" : "border-white"}`}
        >
          <img
            src={
              isEmergency
                ? "/assets/girl_cold.jpeg"
                : isSuccess
                  ? "/assets/girl_free.jpeg"
                  : "/assets/girl_amazed.jpeg"
            }
            className="w-full h-full object-cover"
            alt="lola"
          />
        </div>

        {/* กรอบรูปภาพ Hero: เลื่อนโผล่มาด้านข้างตอนทำภารกิจสำเร็จ */}
        {isSuccess && pokemon && (
          <div className="flex flex-col items-center animate-in slide-in-from-left-8 duration-700">
            {/* ปรับขนาด Avatar Hero ให้ Responsive */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-yellow-200 shadow-xl bg-white flex items-center justify-center animate-heroGlow overflow-hidden">
              <img
                src={pokemon.image}
                className="w-20 h-20 sm:w-24 sm:h-24"
                alt="hero"
              />
            </div>
            <div className="mt-2 bg-yellow-400 text-white px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest flex items-center gap-1 shadow-sm">
              <Sparkles size={10} /> HERO
            </div>
          </div>
        )}
      </div>

      {/* ---------------- 3. MESSAGE MONITOR ---------------- */}
      <div className="w-full mb-6 sm:mb-8 relative">
        <p className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Gromit's Command
        </p>
        {/* กล่องข้อความสไตล์จอ Monitor คลีนๆ */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 text-center min-h-[60px] flex items-center justify-center shadow-inner">
          <p
            className={`text-sm font-medium ${gromitMessage ? "text-slate-600" : "text-slate-400 italic"}`}
          >
            {gromitMessage ? `"${gromitMessage}"` : "Waiting for command..."}
          </p>
        </div>
      </div>

      {/* ---------------- 4. CONTROLS & INPUT ---------------- */}
      {isEmergency ? (
        // ตอนกำลังกู้ภัย: โชว์ป้ายเตือน
        <div className="flex flex-col items-center gap-3 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 text-red-500 animate-pulse px-6 py-3 bg-red-50 rounded-full border border-red-100 shadow-sm">
            <ShieldAlert size={18} />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              Help is coming...
            </span>
          </div>
        </div>
      ) : isSuccess ? (
        // ตอนสำเร็จ: โชว์ปุ่ม Continue พร้อม Hover Effect (ยกตัวขึ้น + สีเข้มขึ้น)
        <button
          onClick={handleReset}
          className="group bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-emerald-200 hover:bg-emerald-600 hover:-translate-y-1 transition-all duration-300 active:scale-95"
        >
          <CheckCircle size={20} className="sm:w-6 sm:h-6" />
          <span className="text-sm sm:text-base tracking-wide">
            CONTINUE JOURNEY
          </span>
        </button>
      ) : (
        // ตอนปกติ: โชว์ช่องให้พิมพ์ขอความช่วยเหลือ
        <div className="w-full flex items-center gap-2">
          <input
            type="text"
            value={lolaInput}
            onChange={(e) => setLolaInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLolaSend()}
            // ช่อง Input ยืดหยุ่น + เงาด้านใน
            className="flex-1 rounded-2xl bg-slate-50 border-none p-3 sm:p-4 text-sm font-medium focus:ring-2 focus:ring-green-200 focus:outline-none transition-all shadow-inner placeholder:text-slate-300"
            placeholder="Type 'help' to start rescue..."
          />
          <button
            onClick={handleLolaSend}
            // ปุ่มส่งเปลี่ยนสีแบบเดียวกับ Gromit (slate-800 -> pink-500)
            className="bg-slate-800 text-white p-3 sm:p-4 rounded-2xl shadow-sm hover:bg-green-300 active:scale-90 transition-all duration-300"
          >
            <Send size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
