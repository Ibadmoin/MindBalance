import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { Chip } from '@mui/material';
import Avatar from '@mui/material/Avatar';

// Function to get the days in a month with the format "Month Day"
function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', { month: 'short' });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

// Function to render the mood trend sparkline chart
function renderSparklineCell(params) {
  const data = getDaysInMonth(4, 2024); // You can change the month/year dynamically if needed
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={['hsl(210, 98%, 42%)']}
        xAxis={{
          scaleType: 'band',
          data,
        }}
      />
    </div>
  );
}

function renderStatus(mood) {
  const moodColors = {
    Happy: 'success', // Green for Happy
    Sad: 'error', // Red for Sad
    Neutral: 'default', // Default for Neutral
    Angry: 'warning', // Yellow for Angry
    Excited: 'primary', // Blue for Excited
    Bored: 'secondary', // Grey for Bored
  };

  const statusColor = moodColors[mood] || 'default'; // Default to 'default' if mood is not mapped

  return <Chip label={mood} color={statusColor} size="small" />;
}

// Function to render an avatar with a color-coded background
export function renderAvatar(params) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

// Function to initialize rows with unique 'id' if not already provided
export const initRowsWithId = (rows) => {
  return rows.map((row, index) => ({
    ...row,
    id: row.id || index + 1, // Ensure each row has a unique 'id' (using index as fallback)
  }));
};

// Retrieve rows from localStorage and initialize with unique id if necessary
const storedRows = localStorage.getItem('journalEntries');
let rows = storedRows ? JSON.parse(storedRows) : [];
console.log(rows)

// Initialize rows with unique ids
rows = initRowsWithId(rows);

// Example of columns (can be passed as prop later on)
export const defaultColumns = [
  { field: 'date', headerName: 'Date', flex: 1.5, minWidth: 200 },
  { field: 'mood', headerName: 'Mood', flex: 1, minWidth: 100 },
  { field: 'entry', headerName: 'Entry', flex: 2, minWidth: 300 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5,
    minWidth: 80,
    renderCell: (params) => renderStatus(params.value),
  },
  {
    field: 'moodTrend',
    headerName: 'Mood Trend',
    flex: 1,
    minWidth: 150,
    renderCell: renderSparklineCell,
  },
];

// // Example of storing rows in localStorage (for testing purposes)
// if (!storedRows) {
//   localStorage.setItem('journalEntries', JSON.stringify([
//     { id: 1, date: '2025-05-04', mood: 'Happy', entry: 'Had a productive day!', status: 'Online', moodTrend: [1, 2, 3, 2, 4] },
//     { id: 2, date: '2025-05-03', mood: 'Sad', entry: 'Felt a bit down today.', status: 'Offline', moodTrend: [4, 3, 3, 2, 1] },
//     { id: 2, date: '2025-05-03', mood: 'Sad', entry: 'Felt a bit down today.', status: 'Offline', moodTrend: [4, 3, 3, 2, 1] },
//     { id: 1, date: '2025-05-04', mood: 'Happy', entry: 'Had a productive day!', status: 'Online', moodTrend: [1, 2, 3, 2, 4] },
//     { id: 2, date: '2025-05-03', mood: 'Sad', entry: 'Felt a bit down today.', status: 'Offline', moodTrend: [4, 3, 3, 2, 1] },
//     { id: 1, date: '2025-05-04', mood: 'Happy', entry: 'Had a productive day!', status: 'Online', moodTrend: [1, 2, 3, 2, 4] },
//   ]));
// }

// Export the rows and columns for use in CustomizedDataGrid
export {rows };
