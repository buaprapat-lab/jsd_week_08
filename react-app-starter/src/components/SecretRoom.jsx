// SecretRoom.jsx

// 09_SecretRoom.jsx
// ไม่ต้อง import { useState } แล้วเพราะเราจะใช้ของจากข้างนอก

export default function SecretRoom({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 bg-gray-700 text-white w-[90%] text-center">
      <h1 className="text-2xl mb-4">SecretRoom</h1>

      {/* โชว์ข้อความที่ส่งมาจาก App.jsx */}
      <p className="text-purple-300 mb-6">
        Message from the outside:{" "}
        <span className="text-yellow-300">
          {question ? question : "Waiting for a message..."}
        </span>
      </p>

      {/* พิมพ์ข้อความเพื่อส่งกลับไปที่ App.jsx */}
      <p className="text-green-300 mb-2">Reply to the outside:</p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1 w-full max-w-xs"
        placeholder="Type your reply here..."
      />
    </div>
  );
}

/*export default function SecretRoom({ question, setReply }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 bg-gray-700 text-white w-[90%] text-center">
      <h1 className="text-2xl mb-4">SecretRoom</h1>

      <p className="text-purple-300">
        Message from the outside:{" "}
        <span className="text-yellow-300">
          {question ? question : "Waiting for a message..."}
        </span>
      </p>

      <p className="text-green-300 mt-6 mb-2">Reply to the outside:</p>
      <textarea
        onChange={(e) => setReply(e.target.value)}
        className="bg-white text-black rounded px-2 py-1 w-full max-w-xs"
        placeholder="Type your reply here..."
      />
    </div>
  );
}
  */
