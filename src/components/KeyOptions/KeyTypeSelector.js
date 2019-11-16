import React from "react";
import KeyTypeButton from "./KeyTypeButton";

export default function KeyType() {
  return (
    <div className="flex flex-wrap w-full mb-6">
      <KeyTypeButton value="major">Major</KeyTypeButton>
      <KeyTypeButton value="natural_minor">Natural Minor</KeyTypeButton>
      <KeyTypeButton value="harmonic_minor">Harmonic Minor</KeyTypeButton>
    </div>
  );
}
