import React, { useContext } from "react";
import ChordTypeButton from "./ChordTypeButton";

export default function ChordType() {
  return (
    <ul className="flex justify-start w-full">
      <ChordTypeButton value="triad">Triads</ChordTypeButton>
      <ChordTypeButton value="tetrad">7th Chords</ChordTypeButton>
    </ul>
  );
}
