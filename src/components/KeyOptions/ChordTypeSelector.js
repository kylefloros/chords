import React, { useContext } from "react";
import ChordTypeButton from "./ChordTypeButton";

export default function ChordType() {
  return (
    <ul className="flex justify-start w-11/12">
      <ChordTypeButton value="triad">Triads</ChordTypeButton>
      <ChordTypeButton value="seventh">7th Chords</ChordTypeButton>
    </ul>
  );
}
