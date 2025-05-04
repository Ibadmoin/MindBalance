// components/MoodSelector.jsx
import React from 'react';
import { Listbox } from '@headlessui/react';

const moods = [
  { name: '😊 Happy' },
  { name: '😐 Neutral' },
  { name: '😢 Sad' },
  { name: '😠 Angry' },
  { name: '😨 Anxious' },
  { name: '😴 Tired' },
  { name: '😎 Confident' },
  { name: '🤩 Excited' },
  { name: '😔 Disappointed' },
  { name: '😇 Grateful' },
  { name: '🥺 Lonely' },
  { name: '🤯 Stressed' },
  { name: '😕 Confused' },
  { name: '😭 Overwhelmed' },
  { name: '❤️ Loved' },
  { name: '🤒 Sick' },
  { name: '🙄 Bored' },
  { name: '🫣 Embarrassed' },
];


const MoodSelector = ({ selectedMood, setSelectedMood, handleSubmit }) => {
  return (
    <div className="z-50 pointer-events-auto w-full max-w-xl  mx-auto mt-8">
      <Listbox value={selectedMood} onChange={setSelectedMood}>
        <div className="relative">
          <Listbox.Button className="w-full rounded-xl bg-white/20 backdrop-blur-md text-white p-3 border border-white/30 shadow-md">
            {selectedMood ? selectedMood.name : 'Select Mood'}
          </Listbox.Button>

          <Listbox.Options className="absolute w-full mt-1 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg z-10 max-h-60 overflow-y-auto scrollbar-hide ">
            {moods.map((mood, index) => (
              <Listbox.Option
                key={index}
                value={mood}
                className={({ active }) =>
                  `cursor-pointer select-none px-3 py-1.5 text-[40px]  flex items-center justify-center gap-2 ${
                    active ? 'bg-white/30' : 'bg-transparent'
                  }`
                }
              >
                {mood.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-white/20 text-white px-6 py-2 rounded-xl backdrop-blur-md border border-white/30 hover:bg-white/30 transition duration-300"
      >
        Save Mood
      </button>
    </div>
  );
};

export default MoodSelector;
