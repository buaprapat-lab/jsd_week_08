// src/App.jsx
import { useState } from "react";
import {
  Siren,
  MessageCircleHeart,
  Send,
  FastForward,
  Sparkles,
  PawPrint,
  RotateCcw,
  Github,
  Globe,
  Gamepad2,
} from "lucide-react";
import Surface from "./components/01_Surface";

export default function App() {
  // ==========================================
  // 1. STATE MANAGEMENT
  // ==========================================
  const [gromitInput, setGromitInput] = useState("");
  const [gromitMessage, setGromitMessage] = useState("");
  const [lolaInput, setLolaInput] = useState("");
  const [lolaMessage, setLolaMessage] = useState("");
  const [rescueStatus, setRescueStatus] = useState("standby");
  const [pokemon, setPokemon] = useState(null);

  // ==========================================
  // 2. LOGIC FUNCTIONS
  // ==========================================

  const handleReset = () => {
    setRescueStatus("standby");
    setPokemon(null);
    setLolaMessage("");
    setGromitMessage("");
  };

  const handleNextStep = () => {
    if (rescueStatus === "calling") {
      const randomId = Math.floor(Math.random() * 151) + 1;
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemon({ name: data.name, image: data.sprites.front_default });
          setRescueStatus("recruiting");
        });
    } else if (rescueStatus === "recruiting") {
      setRescueStatus("traveling");
    } else if (rescueStatus === "traveling") {
      setRescueStatus("success");
    }
  };

  const handleLolaSend = () => {
    if (!lolaInput.trim()) return;
    setLolaMessage(lolaInput);
    if (
      (lolaInput.toLowerCase().includes("help") ||
        lolaInput.includes("ช่วยด้วย")) &&
      rescueStatus === "standby"
    ) {
      setRescueStatus("calling");
    }
    setLolaInput("");
  };

  const handleGromitSend = () => {
    if (!gromitInput.trim()) return;
    setGromitMessage(gromitInput);
    setGromitInput("");
  };

  const isStoryActive = ["calling", "recruiting", "traveling"].includes(
    rescueStatus,
  );

  // ==========================================
  // 3. UI RENDERING
  // ==========================================
  return (
    // คลุมทั้งจอ: bg-gray, font-sans และรองรับ Responsive padding
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center py-6 sm:py-10 px-4 font-sans relative text-slate-800">
      {/* --- NAVBAR: Glassmorphism Style --- */}
      {/* ใช้ flex-wrap เพื่อให้เวลาเปิดในจอเล็ก (Mobile) เมนูไม่เบียดกันจนเกินไป */}
      <nav className="w-full max-w-2xl bg-white/40 backdrop-blur-md text-slate-700 rounded-3xl sm:rounded-full px-4 sm:px-6 py-3 flex flex-wrap justify-between items-center mb-8 shadow-sm border border-white/60 gap-3">
        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm pr-4 p-1.5 rounded-full border border-white shadow-sm">
          <div className="bg-blue-50 p-1.5 rounded-full">
            <Gamepad2 size={16} className="text-grey-400 animate-pulse" />
          </div>
          <span className="font-black tracking-[0.15em] text-xs sm:text-sm text-slate-700 pt-0.5">
            BUA'S LAB
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* ลิงก์ Portfolio & GitHub: เพิ่ม Transition และ Hover Scale */}
          <a
            href="#"
            className="bg-white/60 backdrop-blur-sm border border-white shadow-sm hover:border-gray-200 hover:scale-105 transition-all flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider group px-3 sm:px-4 py-2 rounded-full"
          >
            <Globe size={14} className="group-hover:animate-spin-slow" />{" "}
            Portfolio
          </a>
          <a
            href="#"
            className="bg-white/60 backdrop-blur-sm border border-white shadow-sm hover:border-gray-200 hover:scale-105 transition-all flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider group px-3 sm:px-4 py-2 rounded-full"
          >
            <Github
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform"
            />{" "}
            GitHub
          </a>
        </div>
      </nav>

      {/* --- COMMANDER STATION --- */}
      <div className="w-full max-w-xl bg-white shadow-sm rounded-[2.5rem] p-6 sm:p-8 mb-8 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-black tracking-widest text-slate-800">
            COMMANDER STATION
          </h1>
          {/* ปุ่ม Restart: เพิ่ม Hover เปลี่ยนสีจางๆ */}
          {rescueStatus === "success" && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-blue-500 hover:bg-blue-100 transition-colors bg-blue-50 px-3 py-1.5 rounded-full active:scale-95"
            >
              <RotateCcw size={14} /> RESTART
            </button>
          )}
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-4 border-slate-50 shadow-sm overflow-hidden bg-slate-50 mb-3">
            <img
              src="/assets/gromit_standby.jpeg"
              className="w-full h-full object-cover"
              alt="gromit"
            />
          </div>
          <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">
            Gromit Intelligence
          </p>
        </div>

        {/* Signal Monitor: ปรับแต่งให้ดูคลีนขึ้น */}
        <div className="w-full bg-slate-50 rounded-2xl p-3 mb-6 border border-slate-100 relative">
          <div className="flex items-center gap-1.5 text-green-300 mb-1 px-1">
            <MessageCircleHeart size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-green-300">
              Lola's Signal
            </span>
          </div>
          <div className="bg-white rounded-xl p-3 text-center min-h-[44px] flex items-center justify-center border border-slate-50">
            <p
              className={`text-sm font-medium ${lolaMessage ? "text-slate-600" : "text-slate-300 italic"}`}
            >
              {lolaMessage ? `"${lolaMessage}"` : "Silence..."}
            </p>
          </div>
        </div>

        {/* Gromit Input: เพิ่มปุ่ม Hover สีน้ำเงินตามโจทย์ */}
        <div className="w-full flex items-center gap-2">
          <input
            type="text"
            value={gromitInput}
            onChange={(e) => setGromitInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGromitSend()}
            className="flex-1 rounded-2xl bg-slate-50 border-none p-3 text-sm font-medium focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all placeholder:text-slate-300"
            placeholder="Type command..."
          />
          <button
            onClick={handleGromitSend}
            className="bg-slate-800 text-white p-3 rounded-2xl shadow-sm hover:bg-blue-200 active:scale-90 transition-all duration-300"
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* --- STORY MODAL: Glassmorphism & High-end feeling --- */}
      {isStoryActive && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white/95 backdrop-blur-lg rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-300 border border-white/50 relative overflow-hidden">
            {/* ตกแต่งด้วยวงกลมสีจางๆ ใน Popup ให้ดูมีเลเยอร์ */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-50" />

            {rescueStatus === "calling" && (
              <div className="relative">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100">
                  <Siren className="text-red-500 animate-pulse" size={32} />
                </div>
                <h2 className="text-2xl font-black tracking-widest text-slate-800 mb-2 uppercase">
                  Signal Detected!
                </h2>
                <p className="text-sm font-medium text-slate-500 mb-8">
                  Lola needs help. Let's find a partner!
                </p>
                <button
                  onClick={handleNextStep}
                  className="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-100 transition-all active:scale-95"
                >
                  FIND HERO <FastForward size={18} />
                </button>
              </div>
            )}

            {rescueStatus === "recruiting" && pokemon && (
              <div className="relative">
                <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-100">
                  <Sparkles className="text-yellow-500" size={32} />
                </div>
                <h2 className="text-2xl font-black tracking-widest text-slate-800 mb-2 uppercase">
                  New Ally!
                </h2>
                <div className="w-32 h-32 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-3 border-2 border-slate-100 shadow-inner">
                  <img
                    src={pokemon.image}
                    className="w-24 h-24 animate-heroGlow"
                    alt="hero"
                  />
                </div>
                <p className="text-lg font-black tracking-widest text-slate-600 mb-8 uppercase">
                  {pokemon.name}
                </p>
                <button
                  onClick={handleNextStep}
                  className="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all active:scale-95"
                >
                  LET'S GO! <FastForward size={18} />
                </button>
              </div>
            )}

            {rescueStatus === "traveling" && (
              <div className="relative">
                <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-orange-100">
                  <PawPrint
                    className="text-blue-300 animate-bounce"
                    size={32}
                  />
                </div>
                <h2 className="text-2xl font-black tracking-widest text-slate-800 mb-2 uppercase">
                  Travelling...
                </h2>
                <p className="text-sm font-medium text-slate-500 mb-8">
                  Passing through the dark forest.
                </p>
                <button
                  onClick={handleNextStep}
                  className="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all active:scale-95"
                >
                  ENTER DUNGEON <FastForward size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Surface Section */}
      <Surface
        rescueStatus={rescueStatus}
        pokemon={pokemon}
        lolaInput={lolaInput}
        setLolaInput={setLolaInput}
        handleLolaSend={handleLolaSend}
        gromitMessage={gromitMessage}
        handleReset={handleReset}
      />
    </div>
  );
}
