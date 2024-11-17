// src/components/journal/JournalMain.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import JournalEntry from "./JournalEntry"; // Import JournalEntry component

function JournalMain() {
  const [selectedDate, setSelectedDate] = useState(null); // State to hold the selected date
  const [journalEntries, setJournalEntries] = useState({}); // To store journal entries
  const [visibleDatesCount, setVisibleDatesCount] = useState(3); // Number of visible dates initially
  const [allDates, setAllDates] = useState([]); // All generated dates

  // Generate unique dates from current date backwards
  const generateDates = (count) => {
    const today = new Date();
    const newDates = [];

    for (let i = 0; i < count; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i); // Offset by i to generate unique previous dates
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      newDates.push(formattedDate);
    }
    return newDates;
  };

  // Initialize allDates with a specific number of dates
  useEffect(() => {
    const initialDates = generateDates(100); // Generate an initial set of 12 dates
    setAllDates(initialDates);
  }, []);

  // Fetch existing entries from the database when the component mounts
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/journal");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJournalEntries(data.entries || {});
      } catch (error) {
        console.error("Error fetching journal entries:", error);
      }
    };

    fetchEntries();
  }, []);

  // Function to handle saving the journal entry for the selected date
  const handleSave = async (date, entry) => {
    try {
      const response = await fetch("http://localhost:5000/api/journal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, entry }),
      });

      if (!response.ok) {
        throw new Error("Failed to save entry");
      }

      //const result = await response.json();
      // Update local state with the newly saved entry
      setJournalEntries((prevEntries) => ({
        ...prevEntries,
        [date]: entry,
      }));
      setSelectedDate(null); // Go back to the date selection view after saving
    } catch (error) {
      console.error("Error saving journal entry:", error);
    }
  };

  // Function to load more dates
  const loadMoreDates = () => {
    const additionalDates = generateDates(3); // Load 3 more previous dates
    setAllDates((prevDates) => [
      ...new Set([...prevDates, ...additionalDates]),
    ]); // Use Set to avoid duplicates
    setVisibleDatesCount((prevCount) => prevCount + 3); // Increase the count by 3
  };

  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly lower
    visible: { opacity: 1, y: 0 }, // Fade in and move to original position
  };

  return (
    <motion.div
      className="flex flex-col px-8 py-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }} // Adjust duration for the fade-in effect
    >
      {/* Back Button */}
      <a
        href="../user" // Change this to the actual href for the Prof page
        className="bg-[#F38FB1] text-center text-white font-bold py-2 px-4 mb-6 w-24 rounded-full shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
      >
        Back
      </a>

      {/* Show Journal Entry or Date Selection */}
      {selectedDate ? (
        <JournalEntry
          selectedDate={selectedDate}
          initialEntry={journalEntries[selectedDate] || ""}
          onSave={handleSave}
        />
      ) : (
        <div>
          <div className="font-bold text-3xl mb-6 mt-20">Journal Entries</div>
          <div className="grid grid-cols-3 gap-4">
            {allDates.slice(0, visibleDatesCount).map((date, index) => (
              <button
                key={index}
                className="bg-[#FFF4F4] text-black font-bold py-3 px-6 rounded-full shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:bg-[#F38FB1]"
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Load More Button */}
      {!selectedDate && (
        <button
          className="mt-6 bg-[#F38FB1] text-white font-bold py-3 px-6 rounded-full shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:bg-[#FFB0C7]"
          onClick={loadMoreDates}
        >
          Load More
        </button>
      )}
    </motion.div>
  );
}

export default JournalMain;
