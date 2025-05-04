
export default function generateRandomData() {
    const moods = ['Happy', 'Sad', 'Neutral', 'Angry', 'Excited', 'Bored'];
    const entriesText = {
      Happy: ['Had an amazing day!', 'Everything went as planned!', 'Feeling on top of the world!'],
      Sad: ['Feeling a bit down today.', 'Couldn’t shake the sadness.', 'A bit of a rough day...'],
      Neutral: ['Just another day.', 'Not feeling much today.', 'Keeping things low-key.'],
      Angry: ['Frustrated with everything.', 'Feeling really upset today.', 'Had a lot of anger to deal with.'],
      Excited: ['Can’t wait for what’s next!', 'Everything is going great!', 'Feeling super energized!'],
      Bored: ['Everything feels dull today.', 'Could use something fun to do...', 'Not much going on today.']
    };
  
    const entries = [];
  
    // Generate 10 random entries for demonstration
    for (let i = 0; i < 10; i++) {
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      
      // Generate random mood trend (e.g., for 5 days)
      const randomMoodTrend = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1);
  
      const randomDate = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().slice(0, 10);
      
      // Random journal entry text based on the mood
      const randomEntry = entriesText[randomMood][Math.floor(Math.random() * entriesText[randomMood].length)];
  
      // Create the journal entry
      const entry = {
        id: i + 1, // Ensure unique ID for each entry
        date: randomDate,
        mood: randomMood,
        entry: randomEntry,
        status: randomMood, // Set status as the same as mood
        moodTrend: randomMoodTrend,
      };
  
      entries.push(entry);
    }
  
    return entries;
  }
  
  // Generate the random data and store it in localStorage
  const randomEntries = generateRandomData();
  localStorage.setItem('journalEntries', JSON.stringify(randomEntries));
  