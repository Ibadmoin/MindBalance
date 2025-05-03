function getStatsFromJournal(entries) {
    const moodScores = {
      '😢 Sad': 1,
      '😐 Neutral': 3,
      '🙂 Happy': 5,
      // Add more if needed
    };
  
    const today = new Date();
    const todayString = today.toLocaleDateString();
  
    const totalEntries = entries.length;
  
    const todaysEntries = entries.filter((entry) => entry.date === todayString);
    const moodCount = {};
    todaysEntries.forEach((entry) => {
      moodCount[entry.mood] = (moodCount[entry.mood] || 0) + 1;
    });
  
    const todaysMood =
      Object.keys(moodCount).length > 0
        ? Object.entries(moodCount).sort((a, b) => b[1] - a[1])[0][0]
        : '😐 Neutral';
  
    const validScores = entries
      .map((e) => moodScores[e.mood])
      .filter((score) => typeof score === 'number');
  
    const avgMoodScore =
      validScores.length > 0
        ? (validScores.reduce((a, b) => a + b, 0) / validScores.length).toFixed(1)
        : 'N/A';
  
    // Helper function to calculate the number of days between two dates
    const daysBetween = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      return Math.floor((end - start) / (1000 * 60 * 60 * 24)); // Return number of days
    };
  
    // Determine the date range for chart data (last day, 2 days, 1 week, etc.)
    const lastDate = entries.length > 0 ? entries[entries.length - 1].date : null;
    let range = 'Last 30 entries'; // Default value
  
    let chartData = [];
    if (lastDate) {
      const daysAgo = daysBetween(lastDate, today);
  
      if (daysAgo === 1) {
        range = 'Last day';
        chartData = entries.slice(-1); // Only last day's entry
      } else if (daysAgo <= 7) {
        range = `Last ${daysAgo} days`;
        chartData = entries.slice(-daysAgo); // Entries for the last few days
      } else {
        range = 'Last 30 entries';
        chartData = entries.slice(-30); // Default to 30 entries
      }
    }
  
    // Map chart data to mood scores, ensuring default score is used if undefined
    const graphData = chartData
      .map((entry) => moodScores[entry.mood] || 3)
      .filter((score) => typeof score === 'number'); // Ensure only numbers
  
    // If no valid data, set a fallback
    if (graphData.length === 0) {
      graphData.push(3); // Default neutral value
    }
  
    return [
      {
        title: 'Total Entries',
        value: `${totalEntries}`,
        interval: 'All time',
        trend: 'neutral',
        data: graphData, // Adding chart data
      },
      {
        title: "Today's Mood",
        value: todaysMood,
        interval: 'Today',
        trend: 'neutral',
        data: graphData, // Adding chart data for today (can be customized further)
      },
      {
        title: `Avg. Mood Score (${range})`,
        value: `${avgMoodScore}/5`,
        interval: range,
        trend: 'neutral',
        data: graphData, // Adding chart data for avg score trend
      },
    ];
  }
  
  export { getStatsFromJournal };
  