import React, { useContext } from "react";
import { ChordsContext } from "../contexts/ChordsContext";

export default function ChordDisplay() {
  const { chords } = useContext(ChordsContext);
  return (
    <div className="h-40 text-6xl flex justify-center items-center w-48 rounded shadow-lg">
      {chords}
    </div>
  );
}
