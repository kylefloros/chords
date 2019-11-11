import React, { useContext } from "react";
import { ChordsContext } from "../contexts/ChordsContext";

export default function GenerateChordButton() {
  const { setChords } = useContext(ChordsContext);
  return (
    <div>
      <button
        onClick={() => setChords(["D"])}
        className="mt-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Go
      </button>
    </div>
  );
}
