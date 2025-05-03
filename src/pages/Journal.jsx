import React, { useState, useEffect } from 'react';
import { moodQuotes } from '../data/quotes';
import QuotePopup from '../components/QuotePopup';

const Journal = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [savedMoods, setSavedMoods] = useState([]);
  const [currentMood, setCurrentMood] = useState(localStorage.getItem('mood') || 'Happy');
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [quote, setQuote] = useState('');
  const [showQuotePopup, setShowQuotePopup] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  const handleClosePopup = () => {
    setShowQuotePopup(false); // Close the popup
  };

  // Fetch previously saved moods and entries from localStorage
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setSavedMoods(savedEntries);
  }, []);

  // Save journal entry to localStorage
  const handleSave = () => {
    if (journalEntry.trim() === '') {
      alert('Please write something in your journal!');
      return;
    }

    const newEntry = { date: currentDate, mood: currentMood, entry: journalEntry };
    const updatedEntries = [newEntry, ...savedMoods]; // Add new entry at the beginning
    
    const normalizeMood = (mood) => {
      return mood.replace(/[^\w\s]/gi, '').trim(); // Removes emoji and extra spaces
    };

    const normilizedMood = normalizeMood(currentMood);

    // Update localStorage with new entry
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

    // Reset state for the new entry
    setSavedMoods(updatedEntries);
    const quotesForMood = moodQuotes[normilizedMood] || [];
    const randomQuote = quotesForMood[Math.floor(Math.random() * quotesForMood.length)];
    setQuote(randomQuote);
    setShowQuotePopup(true);
    setJournalEntry('');
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = savedMoods.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(savedMoods.length / entriesPerPage);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 mt-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Your Journal</h1>
        <p className="text-lg text-white-600 mt-2">Record your thoughts and reflect on your mood for today</p>
      </div>

      {/* Mood Display */}
      <div className="mb-6">
        <p className="text-xl text-indigo-600">Mood for today: <span className="font-semibold">{currentMood}</span></p>
      </div>

      {/* Journal Entry Input */}
      <textarea
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
        className="w-full h-48 p-4 border rounded-lg bg-gray-100 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Write your thoughts here..."
      />

      {/* Submit Button */}
      <div className="mt-4 text-center">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Save Journal Entry
        </button>
      </div>

      {/* Previous Entries Section */}
      {currentEntries.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-indigo-600">Previous Entries</h2>
          <div className="space-y-4 mt-4">
            {currentEntries.map((entry, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                <p className="text-sm text-gray-600">{entry.date}</p>
                <p className="text-lg text-gray-800 font-semibold">{entry.mood}</p>
                <p className="mt-2 text-gray-700">{entry.entry}</p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-indigo-600 text-white rounded-l-lg hover:bg-indigo-700 disabled:bg-gray-400"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Show QuotePopup if quote is set */}
      {showQuotePopup && quote && (
        <QuotePopup
          isOpen={showQuotePopup}
          setIsOpen={setShowQuotePopup}
          quote={quote}
        />
      )}
    </div>
  );
};

export default Journal;
