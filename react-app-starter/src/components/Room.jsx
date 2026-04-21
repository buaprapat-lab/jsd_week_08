// Room.jsx
import Hall from "./Hall";

export default function Room({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-green-500 w-[90%] text-white">
      <h1 className="mb-4 text-xl">Room</h1>
      <Hall question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
