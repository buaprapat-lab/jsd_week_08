// Gallery.jsx
import Nook from "./Nook";

export default function Gallery({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-indigo-500 w-[90%] text-white">
      <h1 className="mb-4 text-xl">Gallery</h1>
      <Nook question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
