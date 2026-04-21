// Tower.jsx
import Chamber from "./Chamber";

export default function Tower({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-orange-500 w-[90%] text-white">
      <h1 className="mb-4 text-xl">Tower</h1>
      <Chamber
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}
