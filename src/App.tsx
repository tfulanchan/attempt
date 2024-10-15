import React, { useState } from "react";
import { Search } from "lucide-react";
import QueryInput from "./components/QueryInput";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  const [query, setQuery] = useState<string>("");

  const suggestedQueries = [
    "What is our work from home policy?",
    "What's the NASA sales team?",
    "Does the company own my side project?",
    "What job openings do we have?",
    "How does compensation work?",
  ];

  const hasSummary = true;

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleQuerySubmit = (submittedQuery: string) => {
    console.log("Submitted Query:", submittedQuery);
    // Add your submission logic here (e.g., API call)
  };

  const handleSuggestedQueryClick = (suggestedQuery: string) => {
    setQuery(suggestedQuery);
    handleQuerySubmit(suggestedQuery);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <QueryInput
        query={query}
        onQueryChange={handleQueryChange}
        onQuerySubmit={handleQuerySubmit}
      />
      {hasSummary ? (
        <div className="mx-auto my-6">
          <h2 className="text-zinc-400 text-sm font-medium mb-3 inline-flex items-center gap-2">
            <Search size={16} /> Common questions
          </h2>
          <div className="flex flex-col space-y-4">
            {suggestedQueries.map((suggestedQuery) => (
              <button
                key={suggestedQuery}
                className="hover:-translate-y-1 hover:shadow-lg hover:bg-zinc-300 transition-transform h-12 px-4 py-2 bg-zinc-200 rounded-md shadow flex items-center text-zinc-700"
                onClick={() => handleSuggestedQueryClick(suggestedQuery)}
              >
                {suggestedQuery}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-36 p-6 bg-white rounded-md shadow flex flex-col justify-start items-center gap-4 mt-6">
          <Search size={24} />
          <p className="text-center text-zinc-400 text-sm">
            Looking that up for you...
          </p>
        </div>
      )}
    </div>
  );
}

export default App;