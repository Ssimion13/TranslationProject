import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import "../App.css"
import { Grid, Typography } from '@mui/material';

export default function Home() {
  return (
    <div className="App">
      <Grid> 
        <Link to="/Home">
          <Typography> Aero Translations </Typography>
        </Link>
      </Grid>
    </div>
  );
}
