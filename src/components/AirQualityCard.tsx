import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { WiWindy } from 'react-icons/wi';

const AirQualityCard = styled(Card)`
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 4px;
  margin: 6px;
`;

const AirQualityCardComponent = ({ data }: any) => {
    const { speed } = data.wind; // Destructure wind data

    // Calculate an "air quality index" based on wind speed (example)
    const windAQI = Math.round(speed * 2); // Adjust this formula as needed

    // Define color based on calculated windAQI (example)
    const aqiColor = windAQI <= 5 ? 'green' : 'orange'; // Adjust thresholds and colors

    return (
        <AirQualityCard>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {/* Title */}
                    <Typography variant="h6" fontWeight="bold">
                        Air Quality (Wind)
                    </Typography>

                    {/* Optional descriptive text based on wind speed (example) */}
                    <Typography variant="body2">
                        {windAQI <= 5 ? 'Light Winds' : 'Moderate Winds'}
                    </Typography>
                </Box>

                <Box mt={2} display="flex" justifyContent="space-center" alignItems="center">
                    <WiWindy size={60} color={aqiColor} />
                    <Typography variant="h6" color={aqiColor}>
                        {windAQI <= 5 ? 'Light Winds' : 'Moderate Winds'}
                    </Typography>
                </Box>

                {/* Wind details */}
                {/* <Box mt={2}>
            <Typography variant="body2">
                Wind Speed: {speed.toFixed(1)} m/s
            </Typography>
            <Typography variant="body2">
                Wind Direction: {deg}°
            </Typography>
            <Typography variant="body2">
                Wind Gust: {gust} m/s
            </Typography>
            </Box> */}
            </CardContent>
        </AirQualityCard>
    );
};

export default AirQualityCardComponent;
