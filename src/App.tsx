import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse("");

    setTimeout(() => {
      setResponse("DeepSeek style activated. Keep asking insightful questions.");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-4 py-10 text-white">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <h1 className="text-5xl font-bold">Astro</h1>

        <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 shadow-lg">
          <input
            type="text"
            placeholder="Ask your question..."
            className="w-full text-center text-lg px-5 py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
        />

          <button
            onClick={handleAsk}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-xl transition"
          >
            {loading ? "Thinking..." : "Ask"}
          </button>
        </div>

        {response && (
          <div className="mt-6 bg-zinc-800 p-6 rounded-xl border border-zinc-700 text-left">
            <p className="mb-2 text-gray-300">
              <strong>You asked:</strong> <em>{input}</em>
            </p>
            <p className="text-white">
              <strong>Advice:</strong> {response}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
