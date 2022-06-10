import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import "../App.css"

export default function About() {
  return (
    <Grid container>
        <Grid item className="aboutGrid">
            <Typography className="headingSpacer" variant="h6"> About Me: </Typography>
            <Typography>
            Hello there! I’m Scott Simion.
            I'm an amateur translator, mostly for Touhou and other doujin music. 

            I learned Japanese in college (studied for a year) at the University of Missouri, and I spent a year studying Japanese at the University of Nagasaki - Foreign Studies, where I got firsthand experience with the language.
            Despite my relatively short time studying and living in Japan, I have been consistently using Japanese since 2014.
            I translate Japanese for several reasons - it helps me keep my Japanese up to date, it's a fun challenge to convert a fundamentally different language to English, but honestly my biggest reason is because
            I feel a sense of obligation to try to give back to the people in the fan-translation community as a whole for all the hard work they've done, and if I have the skills to do it, why not?
            I've been translating for around 8 years now -- I'll freely admit that I'm no pro, but I'm confident enough that my translations will give a good rendition of what's being said, and hopefully a glimpse into what the creator wanted to say 
            in a way that can be understood by western audiences.
     
            I am also a professional front end web developer who is making this project as part of a personal goal for myself. I hope this site is useful to you all!
            </Typography>
            <Typography className="headingSpacer" variant="h6"> Requests / Contact: </Typography>
            <Typography>
                If you have a request for translations, or just want to throw me a message send me an email at aeroreborn(at sign)gmail.com.
                Feel free to use my translations freely, you don't need to ask for my permission, but I would be eternally grateful if you let me know if you did use it.
            </Typography>

        </Grid>
    </Grid>
  );
}
