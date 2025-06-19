
import React from "react";

const HeroDecorativeBar = () => (
  <div className="hidden sm:flex flex-shrink-0 justify-center" style={{ height: "100%" }}>
    <div
      className="w-1 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 shadow-lg"
      style={{ height: "calc(100% - 0px)", minHeight: 450 }}
    />
  </div>
);

export default HeroDecorativeBar;
