import React, { useState, useEffect } from 'react';

const Journal = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [savedMoods, setSavedMoods] = useState([]);
  const [currentMood, setCurrentMood] = useState(localStorage.getItem('mood') || 'Happy');
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

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
    const updatedEntries = [...savedMoods, newEntry];
    
    // Update localStorage with new entry
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

    // Reset state for the new entry
    setSavedMoods(updatedEntries);
    setJournalEntry('');
    alert('Journal entry saved!');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 mt-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Your Journal</h1>
        <p className="text-lg text-gray-600 mt-2">Record your thoughts and reflect on your mood for today</p>
      </div>

      {/* Mood Display */}
      <div className="mb-6">
        <p className="text-xl text-gray-700">Mood for today: <span className="font-semibold">{currentMood}</span></p>
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
      {savedMoods.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Previous Entries</h2>
          <div className="space-y-4 mt-4">
            {savedMoods.map((entry, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">{entry.date}</p>
                <p className="text-lg text-gray-800">{entry.mood}</p>
                <p className="mt-2 text-gray-700">{entry.entry}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;
