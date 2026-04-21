// Chamber.jsx
import Room from "./Room";

export default function Chamber({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-yellow-500 w-[90%] text-white">
      <h1 className="mb-4 text-xl">Chamber</h1>
      <Room question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
