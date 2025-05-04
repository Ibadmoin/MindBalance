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
import { useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';

// Function to normalize mood names
const normalizeMood = (mood) => {
  return mood.replace(/[^\w\s]/gi, '').trim(); // Removes emoji and extra spaces
};

// Function to get mood data from localStorage
const getMoodDataFromLocalStorage = () => {
  const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  const moodCounts = {};

  storedEntries.forEach(entry => {
    const normalizedMood = normalizeMood(entry.mood);
    moodCounts[normalizedMood] = (moodCounts[normalizedMood] || 0) + 1;
  });

  return moodCounts;
};

// Convert mood count object into chart-friendly array
const generateMoodChartData = (moodCounts) => {
  return Object.keys(moodCounts).map(mood => ({
    label: mood,
    value: moodCounts[mood],
  }));
};

// Styled text for PieCenterLabel
const StyledText = styled('text', {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme }) => ({
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fill: (theme.vars || theme).palette.text.secondary,
}));

function PieCenterLabel({ primaryText, secondaryText, isDownload }) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <>
      <StyledText
        variant="primary"
        x={left + width / 2}
        y={primaryY}
        style={{
          fontSize: 20,
          fontWeight: 600,
          fill: isDownload ? 'black' : (theme) => (theme.vars || theme).palette.text.secondary,
        }}
      >
        {primaryText}
      </StyledText>
      <StyledText
        variant="secondary"
        x={left + width / 2}
        y={secondaryY}
        style={{ fontSize: 14, fill: isDownload ? 'black' : (theme) => (theme.vars || theme).palette.text.secondary }}
      >
        {secondaryText}
      </StyledText>
    </>
  );
}

PieCenterLabel.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  isDownload: PropTypes.bool.isRequired,
};

// Custom mood colors
const moodColors = [
  '#FF6F61', // Red (angry)
  '#6B8E23', // Olive (calm)
  '#00BFFF', // Blue (happy)
  '#FFD700', // Gold (excited)
  '#32CD32', // Lime (peaceful)
  '#8A2BE2', // Violet (curious)
];

export default function MoodChart({ onCapture }) {
  const chartRef = useRef(null);

  // Get mood data
  const moodCounts = getMoodDataFromLocalStorage();
  const moodChartData = generateMoodChartData(moodCounts);
  const totalEntries = moodChartData.reduce((acc, item) => acc + item.value, 0);

  // Capture screenshot of the chart
  useEffect(() => {
    if (onCapture && chartRef.current && totalEntries > 0) {
      const timeout = setTimeout(() => {
        html2canvas(chartRef.current, {
          useCORS: true,
          backgroundColor: null,
          x: 0,
          y: 0,
          width: chartRef.current.offsetWidth,
          height: chartRef.current.offsetHeight,
        }).then(canvas => {
          const imageData = canvas.toDataURL('image/png');
          onCapture(imageData);
        });
      }, 500); // Delay in milliseconds
  
      return () => clearTimeout(timeout); // Cleanup on component unmount or dependencies change
    }
  }, [onCapture, moodChartData]);
  

  return (
    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }} ref={chartRef}>
      <CardContent>
        <Typography component="h2" variant="subtitle2">
          Moods Distribution
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 2 }}>
          <PieChart
            colors={moodColors}
            margin={{ left: 80, right: 80, top: 80, bottom: 80 }}
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
              primaryText={`${totalEntries} Entries`}
              secondaryText="Total"
              isDownload={false}
            />
          </PieChart>
        </Box>

        {/* Legends */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {moodChartData.map((mood, index) => (
            <Stack key={index} direction="row" alignItems="center">
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: moodColors[index % moodColors.length],
                  borderRadius: '50%',
                }}
              />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {mood.label}
              </Typography>
            </Stack>
          ))}
        </Box>

        {moodChartData.map((mood, index) => {
          const percent = ((mood.value / totalEntries) * 100).toFixed(1);
          return (
            <Stack key={index} direction="row" alignItems="center" spacing={2} sx={{ pb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, minWidth: 60 }}>
                {mood.label}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', minWidth: 40 }}>
                {percent}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={parseFloat(percent)}
                sx={{
                  flexGrow: 1,
                  height: 8,
                  borderRadius: 5,
                  [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: moodColors[index % moodColors.length],
                  },
                }}
              />
            </Stack>
          );
        })}
      </CardContent>
    </Card>
  );
}
