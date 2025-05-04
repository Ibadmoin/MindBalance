import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StatCard from './StatCard';  
import { getStatsFromJournal } from '../../utils/statsData'; 
import DownloadCard from './DownloadCard';
import CustomizedDataGrid from './CustomizedDataGrid';
import MoodChart from './MoodDistributionChart';
import { useRef ,useCallback, useState} from 'react';



export default function MainGrid() {
  
  const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
  const data = getStatsFromJournal(entries);
  const [moodChartImage, setMoodChartImage] = useState('');

  const handleCapture = useCallback((imgData) => {
    setMoodChartImage(imgData);
    // console.log("Captured Mood Chart Image", imgData);
  }, []);
  

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 2 }}>
  {data.map((card, index) => (
    <Grid key={index} size={{ xs: 4, sm: 4, md: 4 }}>
      <StatCard {...card} />
    </Grid>
  ))}

  <Grid size={{ xs: 4, sm: 4, md: 3 }}>
    <DownloadCard 
      stats={data} 
      entries={entries} 
      moodChartImage={moodChartImage} 
    />
  </Grid>
</Grid>

<Typography component="h2" variant="h6" sx={{ mb: 2 }}>
  Details
</Typography>
<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
  <Grid size={{xs:12,md:9 }}>
    <CustomizedDataGrid />
  </Grid>
  <Grid size={{xs:12, md:3}}>
    <MoodChart onCapture={handleCapture} />
  </Grid>
</Grid>

    </Box>
  );
}
