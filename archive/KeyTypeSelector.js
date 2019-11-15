import React, { useContext } from "react";
import { KeyTypeContext } from "../../contexts/KeyTypeContext";

export default function KeyType() {
  const { keyType, setKeyType } = useContext(KeyTypeContext);
  const buttonDefaultClasses =
    "flex m-4 w-16 h-8 py-2 px-2 border border-gray-600 rounded outline-none";
  const labelDefaultClasses = "text-xl";
  return (
    <div
      onClick={() => setKeyType(keyType === "major" ? "minor" : "major")}
      className="flex items-center mt-16"
    >
      <div
        className={
          keyType === "major"
            ? labelDefaultClasses + " text-black"
            : labelDefaultClasses + " text-gray-600 cursor-pointer"
        }
      >
        Major
      </div>
      <button
        className={
          keyType === "major"
            ? buttonDefaultClasses
            : buttonDefaultClasses + " justify-end"
        }
      >
        <div className="bg-purple-600 w-4 h-4 rounded"></div>
      </button>
      <div
        className={
          keyType === "minor"
            ? labelDefaultClasses + " text-black"
            : labelDefaultClasses + " text-gray-600 cursor-pointer"
        }
      >
        Minor
      </div>
    </div>
  );
}
