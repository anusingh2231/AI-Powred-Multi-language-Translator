import { useState } from "react";
import { translateText } from "../services/api";

function Translator() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);
      const result = await translateText({
        text,
        target_language: "Hindi",
        tone: "Neutral",
      });

      setOutput(result.translation);
    } catch (error) {
      setOutput("Error connecting to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl">
      <textarea
        className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows="4"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleTranslate}
        className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      <div className="mt-4 p-4 bg-gray-100 rounded-xl min-h-[60px]">
        {output}
      </div>
    </div>
  );
}

export default Translator;