import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface ClockProps {}

const Clock: React.FC<ClockProps> = () => {
  const [currentTime, setCurrentTime] = useState<
    { time: string; date: string } | null
  >(null);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
      const formattedDate = date.toLocaleDateString('es-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setCurrentTime({ time: formattedTime, date: formattedDate });
    };

    updateTime();

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {currentTime && (
        <Box mb={2}>
          <Typography mb={1} variant='h3' color='primary'>{currentTime.time}</Typography>
          <Typography variant='subtitle1' fontWeight={'bold'} color='#272A3A'>{currentTime.date}</Typography>
        </Box>
      )}
    </div>
  );
};

export default Clock;
