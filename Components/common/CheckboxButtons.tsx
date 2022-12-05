import React from 'react';
import { Checkbox, Grid, Typography } from '@mui/material';
import "../../App.css"

//I get paid to make things sustainable. I am tired and not getting paid for this. I don't feel like making typescript happy right now. Any will work here.
//Why do we have to get this specific for something built straight into React? Wouldn't this kinda be one of those 'given obvious type' things for React TS?
export default function CheckoutButtons(props: any) {
  const {
    isVideoOpen,
    isJapaneseCharactersVisible,
    setIsVideoOpen,
    setIsJapaneseCharactersVisible
  } = props;

  return (
    <Grid container>
      <Grid item>
        <Checkbox
          sx={{zIndex: 0}}
          checked={isVideoOpen} 
          onClick={(e) => {
          setIsVideoOpen()}
          //[TODO] maybe add in cookie support here?
        }/> 
          Enable Video 
      </Grid>
        <Grid item>
          <Checkbox
            checked={isJapaneseCharactersVisible}  
            onClick={setIsJapaneseCharactersVisible}
          //[TODO] maybe add in cookie support here?
          />
          Enable Japanese Characters
        </Grid>
    </Grid>
  );
}
