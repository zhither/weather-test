import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { GoSun } from 'react-icons/go';

const CardContainer = styled(Card)`
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #6899FF;
  padding: 4px
`;

const WeatherCardExpanded = ({ data }: any) => {

    const iconCode = data.weather[0].icon;
    const imageUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    return (
        <CardContainer>
            <CardContent>
                <Box display={'flex'}
                    flexDirection={'column'}
                    alignContent={'center'}
                    alignItems={'center'}
                    textAlign={'center'}
                >
                    <Box>
                        <img
                            src={imageUrl}
                            alt="Weather icon"
                            width={120}
                            height={120}
                        />
                    </Box>

                    <Box mb={2}>
                        <Typography variant="h3" color={'white'}>
                            {data.main.temp}°F
                        </Typography>
                    </Box>

                    <Box mb={4}>
                        <Typography variant='h4' color={'white'}>
                            {data.weather[0].main}
                        </Typography>
                    </Box>


                    <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'}>
                        <Box mr={4} display={'flex'} alignContent={'center'} alignItems={'center'}>
                            <GoSun size={24} color="white" />
                            <Typography ml={2} variant="body2" color={'white'}>
                                Wind
                            </Typography>

                        </Box>
                        <Box>
                            <Typography variant="h6" color={'white'}>
                                {data.wind.speed}{` `}Km/h
                            </Typography>
                        </Box>
                    </Box>

                    
                    <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'}>
                        <Box mr={4} display={'flex'} alignContent={'center'} alignItems={'center'}>
                            <GoSun size={24} color="white" />
                            <Typography ml={2} variant="body2" color={'white'}>
                                Hum
                            </Typography>

                        </Box>
                        <Box>
                            <Typography variant="h6" color={'white'}>
                                {data.main.humidity}{` `}%
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </CardContainer>
    );
};

export default WeatherCardExpanded;
