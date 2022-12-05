import React from 'react';
import { Link } from 'react-router-dom'
import "../App.css"
import { Grid, Typography } from '@mui/material';
import Toge from './Toge';

export default function Home() {
  return (
    <div className="App">
      <Grid> 
        <Toge />
      </Grid>
    </div>
  );
}
