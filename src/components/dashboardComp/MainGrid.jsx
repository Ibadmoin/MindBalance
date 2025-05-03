import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StatCard from './StatCard';  
import { getStatsFromJournal } from '../../utils/statsData'; 
import DownloadCard from './DownloadCard';
import CustomizedDataGrid from './CustomizedDataGrid';
import MoodChart from './MoodDistributionChart';

export default function MainGrid() {
  // Get the journal entries from localStorage
  const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
  
  console.log(entries)
  // Call the function to get the stats based on the journal data
  const data = getStatsFromJournal(entries);
  console.log(data)

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
        {data.map((card, index) => (
           <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <StatCard {...card} />
          </Grid>
        ))}
           {/* download card pdf functionality */}
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <DownloadCard />
        </Grid>
      </Grid>
      {/* Past details */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          
           
            <MoodChart />
        
        </Grid>
      </Grid>
   
    </Box>
  );
}
