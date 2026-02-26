import React from "react";

function ToneSelector({ setTone }) {
  return (
    <select
      className="p-2 border rounded-lg"
      onChange={(e) => setTone(e.target.value)}
    >
      <option>Neutral</option>
      <option>Formal</option>
      <option>Casual</option>
      <option>Professional</option>
      <option>Friendly</option>
    </select>
  );
}
export default ToneSelector;