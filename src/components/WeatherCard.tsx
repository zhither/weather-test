import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const CardContainer = styled(Card)`
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #6899FF;
`;

const WeatherCard = ({ data }: any) => {

    const iconCode = data.weather[0].icon;
    const imageUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    return (
        <CardContainer>
            <CardContent>
                <Grid display={'flex'}
                    flexDirection={'row'}
                    alignContent={'center'}
                    alignItems={'center'}
                    textAlign={'center'}
                    >
                    <Grid item xs={2}>
                        <img
                            src={imageUrl}
                            alt="Weather icon"
                            width={120}
                            height={120}
                        />
                    </Grid>

                    <Grid item xs={8}>
                        <Typography variant="h3" color={'white'}>
                            {data.main.temp}°F
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </CardContainer>
    );
};

export default WeatherCard;
