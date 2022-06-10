import React from 'react';
import { Link } from 'react-router-dom'
import "../App.css"
import { Grid, Typography } from '@mui/material';

export default function Home() {
  return (
    <div className="App">
      <Grid> 
        <Link to="/Home">
          <Typography> Translations </Typography>
        </Link>
      </Grid>
    </div>
  );
}
