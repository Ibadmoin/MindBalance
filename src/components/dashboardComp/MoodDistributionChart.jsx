import * as React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// Function to normalize mood names
const normalizeMood = (mood) => {
  return mood.replace(/[^\w\s]/gi, '').trim(); // Removes emoji and extra spaces
};

// Function to get mood data from localStorage
const getMoodDataFromLocalStorage = () => {
  const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  const moodCounts = {};

  // Count moods
  storedEntries.forEach(entry => {
    const normalizedMood = normalizeMood(entry.mood);
    moodCounts[normalizedMood] = (moodCounts[normalizedMood] || 0) + 1;
  });

  return moodCounts;
};

// Create a chart data array from mood counts
const generateMoodChartData = (moodCounts) => {
  return Object.keys(moodCounts).map(mood => ({
    label: mood,
    value: moodCounts[mood],
  }));
};

const StyledText = styled('text', {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme }) => ({
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fill: (theme.vars || theme).palette.text.secondary,
  variants: [
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontWeight: theme.typography.h5.fontWeight,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontWeight: theme.typography.body2.fontWeight,
      },
    },
  ],
}));

function PieCenterLabel({ primaryText, secondaryText }) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <React.Fragment>
      <StyledText variant="primary" x={left + width / 2} y={primaryY}>
        {primaryText}
      </StyledText>
      <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
        {secondaryText}
      </StyledText>
    </React.Fragment>
  );
}

PieCenterLabel.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

// Custom vibrant colors for moods
const moodColors = [
  '#FF6F61', // Red (for angry, upset)
  '#6B8E23', // Olive green (for calm, relaxed)
  '#00BFFF', // Deep sky blue (for happy, excited)
  '#FFD700', // Gold (for excited, motivated)
  '#32CD32', // Lime green (for content, peaceful)
  '#8A2BE2', // Blue violet (for curious, inspired)
];

export default function MoodChart() {
  // Get mood data from localStorage
  const moodCounts = getMoodDataFromLocalStorage();
  const moodChartData = generateMoodChartData(moodCounts);

  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}
    >
      <CardContent>
        <Typography component="h2" variant="subtitle2">
          Moods Distribution
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor:'pointer' }}>
          <PieChart
            colors={moodColors}
            margin={{
              left: 80,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            series={[
              {
                data: moodChartData,
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { faded: 'global', highlighted: 'item' },
              },
            ]}
            height={260}
            width={260}
            slotProps={{
              legend: { hidden: true },
            }}
          >
            <PieCenterLabel
              primaryText={`${moodChartData.reduce((acc, item) => acc + item.value, 0)} Entries`}
              secondaryText="Total"
            />
          </PieChart>
        </Box>
        {moodChartData.map((mood, index) => (
          <Stack
            key={index}
            direction="row"
            sx={{ alignItems: 'center', gap: 2, pb: 2 }}
          >
            <Typography variant="body2" sx={{ fontWeight: '500' }}>
              {mood.label}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {mood.value}%
            </Typography>
            <LinearProgress
              variant="determinate"
              aria-label="Mood distribution"
              value={(mood.value / moodChartData.reduce((acc, item) => acc + item.value, 0)) * 100}
              sx={{
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: moodColors[index % moodColors.length],
                },
              }}
            />
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
