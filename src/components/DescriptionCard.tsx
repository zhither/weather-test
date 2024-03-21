import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const CardContainer = styled(Card)`
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DescriptionCard = ({ data }:any, onUpdate: any) => {
    // State to manage the last update time
    const [lastUpdated, setLastUpdated] = useState('');

    // Effect to update lastUpdated on component mount and after updates
    useEffect(() => {
        const updateTime = new Date(data.dt * 1000); // Convert timestamp to Date object
        setLastUpdated(updateTime.toLocaleString()); // Format the date and time
    }, [data]);

    const handleUpdate = () => {
        onUpdate();
    }
    return (
        <CardContainer>
            <CardContent>
                <Grid container spacing={2}
                    display={'flex'}
                    alignContent={'center'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Grid item xs={12}>
                        <Typography variant="h5" color="primary">
                            {data.name}{`, `}{data.sys.country}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            Last Updated: {lastUpdated}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </CardContainer>
    );
};

export default DescriptionCard;
