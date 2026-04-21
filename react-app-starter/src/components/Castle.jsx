// Castle.jsx
import Tower from "./Tower";

export default function Castle({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-red-500 w-[90%] text-white">
      <h1 className="mb-4 text-xl">Castle</h1>
      <Tower question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
