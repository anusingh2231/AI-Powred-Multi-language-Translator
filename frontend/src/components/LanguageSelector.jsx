import React from "react";

function LanguageSelector({ setLanguage }) {
  return (
    <select
      className="p-2 border rounded-lg"
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option>Hindi</option>
      <option>French</option>
      <option>Spanish</option>
      <option>German</option>
      <option>Japanese</option>
      <option>Arabic</option>
      <option>Chinese</option>
    </select>
  );
}

export default LanguageSelector;