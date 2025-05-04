import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { generateReport } from '../../utils/generateReport';

export default function DownloadCard({ stats, entries, moodChartImage }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDownload = () => {
    console.log('Stats:', stats);
    console.log('Entries:', entries);
    console.log('Mood Chart Image:', moodChartImage);

    generateReport(entries,moodChartImage)
  };

  return (
    <Card sx={{ height: '100%', backgroundColor: 'black' }}>
      <CardContent>
        <InsightsRoundedIcon sx={{ color: 'white' }} />
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: '600', color: 'white' }}
        >
          Explore your data
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
          Uncover performance and visitor insights with our data wizardry.
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
          onClick={handleDownload}
        >
          Get Health Summary
        </Button>
      </CardContent>
    </Card>
  );
}

DownloadCard.propTypes = {
  stats: PropTypes.array.isRequired,
  entries: PropTypes.array.isRequired,
  moodChartImage: PropTypes.string,
};
