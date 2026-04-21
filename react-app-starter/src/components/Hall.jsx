// Hall.jsx
import Corridor from "./Corridor";

export default function Hall({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-teal-500 w-[90%] text-white">
      <h1 className="mb-4 text-xl">Hall</h1>
      <Corridor
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}
