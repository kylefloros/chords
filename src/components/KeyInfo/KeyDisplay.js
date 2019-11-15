import React, { useContext } from "react";
import { KeyContext } from "../../contexts/KeyContext";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";
import { ChordTypeContext } from "../../contexts/ChordTypeContext";
import { keyLookup, keyTypeLookup, chordTypeLookup } from "../../MusicData";

export default function KeyDisplay() {
  const { key } = useContext(KeyContext);
  const { keyType } = useContext(KeyTypeContext);
  const { chordType } = useContext(ChordTypeContext);

  const displayKey = keyLookup[key];
  const formattedKeyType = keyTypeLookup[keyType];
  const formattedChordType = chordTypeLookup[chordType];

  return (
    <div className="flex justify-center items-baseline">
      <span className="text-2xl">{displayKey + " " + formattedKeyType}</span>
      <span className="text-3xl pl-12">{formattedChordType}</span>
    </div>
  );
}
