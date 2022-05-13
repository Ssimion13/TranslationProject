import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import "../App.css"
import { Grid, Typography } from '@mui/material';

export default function Home() {
  return (
    <div className="App">
      <Grid> 
        <Typography> Aero Translations </Typography> 
      </Grid>
    </div>
  );
}
