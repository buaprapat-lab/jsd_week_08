// https://castle-rooms.vercel.app/
// npm run dev
// url: http://localhost:5173/

import { useState } from "react";
import Castle from "./components/Castle";
import SimpleAsyncAwait from "./example/async/SimpleAsyncAwait";

export default function App() {
  const [question, setQuestion] = useState("");
  // 1. สร้าง State สำหรับรับข้อความตอบกลับจาก SecretRoom ไว้ที่นี่
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => setQuestion(e.target.value);
  const handleAnswer = (e) => setAnswer(e.target.value);

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">
        Message for Secret Room:{" "}
        <span className="text-yellow-300">
          {question ? question : "Waiting for a message..."}
        </span>
      </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />

      <p className="text-green-300">
        Reply from the Secret Room:{" "}
        <span className="text-yellow-300">
          {answer ? answer : "Waiting for a reply..."}
        </span>
      </p>

      {/* ส่งของ 3 ชิ้นลงไปในหลุม */}
      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}

// สร้าง feature ช่วยเพื่อนที่ถุฏจับข้างในที่ถูกจับ
/* ถ้าข้างในบอก chill chill ก็ไม่เกิดอะไรขึ้น อจ่ถ้าตอบมาว่า
สักอย่างขะ fetch pokemon แล้วเอาโปเกม่อนไปช่วย กระโดด
ขึ้นญาณ ใช้ usestate เปลี่ยนแปลง useeffect
เช่นถ้า help me จะเกิด option ขึ้นมาข้างนอก
*/

/*
import { useState } from "react";
import Castle from "./components/Castle";

export default function App() {
  const [question, setQuestion] = useState("");

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">
        Message for JSD12:
        <span className="text-yellow-300">
          {question ? question : "Waiting for a message..."}
        </span>
      </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply from Secret Room:
        <span className="text-yellow-300">{}</span>
      </p>
      <Castle question={question} />
    </div>
  );
}
*/
