import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { FaSun } from 'react-icons/fa'; // Importa el icono de sol
import { GoSun } from 'react-icons/go';
import { BsMoonStars } from 'react-icons/bs';

const SunriseSunsetCard = styled(Card)`
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SunriseSunsetCardComponent = ({ data }: any) => {
    const { sunrise, sunset } = data.sys; // Desestructura los datos de sys

    // Función para formatear la hora en formato legible
    function formatTime(timestamp: number) {
        const date = new Date(timestamp * 1000); // Convierte la marca de tiempo a milisegundos
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    
    return (
        <SunriseSunsetCard>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {/* Título */}
                    <Typography variant="h6" fontWeight={'bold'}>
                        Sunrise & Sunset
                    </Typography>

                    {/* Icono de Sol */}
                    <FaSun size={24} color="orange" />
                </Box>

                {/* Detalles de Amanecer y Atardecer */}
                <Box mt={4} p={4} sx={{ backgroundColor: '#FFF7EF', borderRadius: '16px' }} >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'}>
                                <Box mr={4}>
                                    <GoSun size={60} color="orange" />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color={'gray'}>
                                        Sunrise
                                    </Typography>
                                    <Typography variant="h6" color={'primary'}>
                                        {formatTime(sunrise)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'}>
                                <Box mr={4}>
                                    <BsMoonStars size={60} color="orange" />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color={'gray'}>
                                        Sunset
                                    </Typography>
                                    <Typography variant="h6" color={'primary'}>
                                        {formatTime(sunset)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </SunriseSunsetCard>
    );
};

export default SunriseSunsetCardComponent;
