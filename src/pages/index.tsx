import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import {
  Typography,
  TextField,
  Button,
  Card,
  Grid,
  Box,
  Hidden,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Clock from '@/components/Clock';
import WeatherCard from '@/components/WeatherCard';
import DescriptionCard from '@/components/DescriptionCard';
import AirQualityCardComponent from '@/components/AirQualityCard';
import SunriseSunsetCardComponent from '@/components/SunriseSunsetCard';
import WeatherCardExpanded from '@/components/WeatherCardExpanded';
import { GoSun } from 'react-icons/go';

export default function Home() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const coordinatesUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = ({ lat, lon }: any) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    axios.get(url)
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.error('Error fetching weather:', error));
    setIsLoading(false);
  };

  const fetchCity = () => {
    setIsLoading(true);
    axios.get(coordinatesUrl)
      .then((response) => {
        fetchWeather(response.data[0]);
      })
      .catch((error) => console.error('Error fetching city coordinates:', error));
  };

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="frontend challenge for alkemy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {weatherData ? (
        <Grid container>
          <>
            <Hidden mdDown>
              <Grid item xs={8} p={2} sx={{ backgroundColor: '#F0F5FF', height: '100vh' }}>
                <Box m={4}>
                  <Clock />
                  <WeatherCard data={weatherData} />
                </Box>
                <Grid container spacing={5}>
                  <Grid item xs={6}>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Box mb={2}>
                        <DescriptionCard data={weatherData} onUpdate={() => fetchCity()} />
                      </Box>
                      <Box>
                        <AirQualityCardComponent data={weatherData} />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <SunriseSunsetCardComponent data={weatherData} />
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>

            <Grid item xs={12} sm={12} md={4}>
              <Box m={5}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Search City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      weatherData?.name == city ?
                        <Button variant="contained" onClick={fetchCity} disabled={isLoading || !city}>
                          {isLoading ? 'Loading...' : 'Update'}
                        </Button>
                        :
                        <Button variant="contained" onClick={fetchCity} disabled={isLoading || !city}>
                          {isLoading ? 'Loading...' : 'Fetch Weather'}
                        </Button>
                    }
                  </Grid>
                </Grid>
              </Box>
              <Box m={6}>
                <WeatherCardExpanded data={weatherData} />
              </Box>
            </Grid>
          </>
        </Grid>
      ) : (
        <Box display={'flex'}
          justifyContent={'center'}
          alignContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          sx={{ height: '100vh' }}
        >
          <Box mb={4}>
            <Box display={'flex'}
              justifyContent={'center'}
              alignContent={'center'}
              alignItems={'center'}
              mb={2}
            >
              <GoSun size={60} color="orange" />
            </Box>
            <Typography variant='h4'>
              Explore the weather around the world. Search for a city to begin
            </Typography>
          </Box>
          <Box mb={2}>
            <TextField
              label="Search City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              fullWidth
            />
          </Box>
          <Box>
            <Button variant="contained" onClick={fetchCity} disabled={isLoading || !city}>
              {isLoading ? 'Loading...' : 'Fetch Weather'}
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
