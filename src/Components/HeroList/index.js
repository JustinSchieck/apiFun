import React from "react";

export default function HeroList({ hero }) {
  return (
    <div>
      {hero.map((h) => (
        <div key={h}>{h}</div>
      ))}
    </div>
  );
}
