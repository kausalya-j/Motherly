// src/components/journal/JournalEntry.jsx
import React, { useState } from "react";

const JournalEntry = ({ selectedDate, initialEntry, onSave }) => {
  const [entry, setEntry] = useState(initialEntry);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onSave(selectedDate, entry); // Call the save function passed as prop
    setSaved(true); // Indicate that the entry has been saved
  };

  return (
    <div className="p-6 bg-[#FFF4F4]">
      <h2 className="text-2xl font-bold mb-4">{selectedDate}</h2>
      <textarea
        className="w-full h-48 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your journal entry here..."
      ></textarea>
      <button
        className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors"
        onClick={handleSave}
      >
        Save Entry
      </button>
      {saved && (
        <p className="mt-4 text-green-500">Your entry has been saved!</p>
      )}
    </div>
  );
};

export default JournalEntry;
