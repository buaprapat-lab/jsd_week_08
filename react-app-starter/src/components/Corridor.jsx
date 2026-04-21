// Corridor.jsx
import Gallery from "./Gallery";

export default function Corridor({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-blue-500 w-[90%] text-white">
      <h1 className="mb-4 text-xl">Corridor</h1>
      <Gallery
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}
