import React, { useEffect, useRef } from "react";

interface QueryInputProps {
  query: string;
  onQueryChange: (query: string) => void;
  onQuerySubmit: (query: string) => void;
}

const QueryInput: React.FC<QueryInputProps> = ({ query, onQueryChange, onQuerySubmit }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onQuerySubmit(query);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onQueryChange(e.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={query}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
      placeholder="Type your query and press Enter..."
      className="overflow-auto max-h-[45vh] lg:max-h-[40vh] sm:max-h-[25vh] outline-none w-full font-sans caret-superDuper resize-none selection:bg-superDuper selection:text-textMain dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark bg-background text-textMain placeholder-textOff scrollbar-thumb-idle dark:scrollbar-thumb-idleDark scrollbar-thin scrollbar-track-transparent p-2 rounded-md border border-gray-300"
      style={{ minHeight: '40px' }}
    />
  );
};

export default QueryInput;