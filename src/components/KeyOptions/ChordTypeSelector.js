import React, { useContext } from "react";
import ChordTypeButton from "./ChordTypeButton";

export default function ChordType() {
  return (
    <div className="flex justify-start w-full">
      <ChordTypeButton value="triad">Triads</ChordTypeButton>
      <ChordTypeButton value="tetrad">7 Chords</ChordTypeButton>
    </div>
  );
}
