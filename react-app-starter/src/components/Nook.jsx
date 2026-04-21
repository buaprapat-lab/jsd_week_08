// Nook.jsx
import SecretRoom from "./SecretRoom";

export default function Nook({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-purple-500 w-[90%] text-white">
      <h1 className="mb-4 text-xl">Nook</h1>
      <SecretRoom
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}
