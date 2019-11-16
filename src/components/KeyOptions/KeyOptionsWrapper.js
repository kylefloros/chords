import React from "react";
import KeySelector from "./KeySelector";
import KeyTypeSelector from "./KeyTypeSelector";
import ChordTypeSelector from "./ChordTypeSelector";

export default function KeyInfoWrapper() {
  return (
    <div className="flex flex-col items-center w-full">
      <KeySelector></KeySelector>
      <KeyTypeSelector></KeyTypeSelector>
      <ChordTypeSelector></ChordTypeSelector>
    </div>
  );
}
