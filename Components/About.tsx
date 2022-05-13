import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import "../App.css"

export default function About() {
  return (
    <Grid container>
        <Grid item>
            <Typography> About Me: </Typography>
            <Typography>
            Hello there! I’m Scott Simion.
            I'm an amateur translator, mostly for Touhou and other doujin music. 

            I learned Japanese in college (studied for a year) at the University of Missouri, and I spent a year studying Japanese at the University of Nagasaki - Foreign Studies, where I got firsthand experience with the language.
            Despite my relatively short time studying and living in Japan, I have been consistently using Japanese since 2014 -- I will let my translations speak for themselves. When I studied over there I was aiming for JLPT N2 but couldn't find a convenient time to take the test.
            I translate Japanese for several reasons - it helps me keep my Japanese up to date, it's a fun challenge to convert a fundamentally different language to English, but honestly my biggest reason is because
            I feel a sense of obligation to try to give back to the people in the fan-translation community as a whole for all the hard work they've done, and if I have the skills to do it, why not?
            I've been translating for around 8 years now -- I'll freely admit that I'm no pro, but I'm confident enough that my translations will give a good rendition of what's being said, and hopefully a glimpse into what the creator wanted to say 
            in a way that can be understood by western audiences.
     
            I am also a professional front end web developer who is making this project as part of a personal goal for myself. I hope this site is useful to you all!
            </Typography>
            <Typography> Requests / Contact: </Typography>
            <Typography>
                If you have a request for translations, or just want to throw me a message send me an email at aeroreborn(at sign)gmail.com. I don't imagine this site taking off in any way, but
                for music translation I would probably do it pro-bono (unless its incredibly difficult), but for larger projects (eg. manga, doujinshi), I'll get back to you on a reasonable price / timeframe.
                Please warn me in the email if the request is NSFW in any way (though I won't reject NSFW out of hand.). I would prefer not to translate manga (typesetting is not fun!) but I am happy to translate the text of the manga and let someone else do the heavy lifting.

                Feel free to use my translations freely, you don't need to ask for my permission, but I would be eternally grateful if you included something like 'translated by AeroReborn' or another kind of credits to it
                if you post it somewhere. 
            </Typography>

        </Grid>
    </Grid>
  );
}
