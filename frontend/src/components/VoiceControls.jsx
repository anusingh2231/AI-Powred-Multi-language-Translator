import React from "react";

function VoiceControls({ output }) {
  const speakOutput = () => {
    const speech = new SpeechSynthesisUtterance(output);
    window.speechSynthesis.speak(speech);
  };

  return (
    <button
      onClick={speakOutput}
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded-xl"
    >
      🔊 Speak
    </button>
  );
}

export default VoiceControls;