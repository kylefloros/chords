import React, { useContext } from "react";
import { ChordTypeContext } from "../../contexts/ChordTypeContext";

export default function ChordType() {
  const { chordType, setChordType } = useContext(ChordTypeContext);
  const buttonDefaultClasses =
    "flex m-4 w-16 h-8 py-2 px-2 border border-gray-600 rounded outline-none";
  const labelDefaultClasses = "text-xl";
  return (
    <div
      onClick={() => setChordType(chordType === "triad" ? "tetrad" : "triad")}
      className="flex items-center mt-16 cursor-pointer"
    >
      <div
        className={
          chordType === "triad"
            ? labelDefaultClasses + " text-black"
            : labelDefaultClasses + " text-gray-600 cursor-pointer"
        }
      >
        Triads
      </div>
      <button
        className={
          chordType === "triad"
            ? buttonDefaultClasses
            : buttonDefaultClasses + " justify-end"
        }
      >
        <div className="bg-purple-600 w-4 h-4 rounded"></div>
      </button>
      <div
        className={
          chordType === "tetrad"
            ? labelDefaultClasses + " text-black"
            : labelDefaultClasses + " text-gray-600 cursor-pointer"
        }
      >
        7th Chords
      </div>
    </div>
  );
}
