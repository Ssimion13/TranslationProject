import React from 'react';
import { Grid } from '@mui/material';
import "../App.css"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export default function Toge() {
  //TODO: selectively render the text depending on user settings, add a button for each type
  //TODO: Figure out why the overlay is so damn big on the youtube player...
  return (
    <Grid container direction="column">
      <Grid item className="ytVideoContainer">
        <LiteYouTubeEmbed 
          id="jLnlR7icyWs"
          title="Memento_of_the_Avaricious_Beast"
          wrapperClass="yt-lite"
        />
      </Grid>
      <Grid container item direction="column" className="textContainer translationMarginTop">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              石油って４０年以上前から、後３０年で枯渇するって <br/>
              脅されてましたよね。あれは嘘だったんでしょうか？ <br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Sekiyutte 40nenn ijyou mae kara, ato 30 nen de kokatsu surutte <br/>
              Odosaretemashita yo ne. Are wa uso dattan deshou ka? <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Ever since 40 years ago, we’ve been threatened/frightened <br/>
            that petroleum will be depleted in 30 years. <br/>
            Do you think that was a lie or no? <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              新たに石油の埋蔵が発見されたり、新しい採掘技術が生まれたから、<br/>
              と言うのは判ります。しかし、散々枯渇するので消費を減らそうと言っていた <br/>
              当時よりも。 <br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Arata ni sekiyu no maizou ga hakken saretari, <br/>
              atarashii saikutsu gijutsu ga umareta kara, <br/>
              To iu no wa wakarimasu. Shikashi, sanzan kokatsu suru <br/>
              no de shouhi wo herasou to itte ita touji yori mo. <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Discovering new petroleum in the ground, <br/>
            birthing new technological methods to extract it, <br/>
            I can see that’s the reason why. But, they were saying to  <br/>
            reduce consumption because it's going to run out even back then… <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              世界全体を見ると結局今の方が石油の消費量は <br/>
              増えています。にもかかわらず現在（２０１８年未） <br/>
              の残りの埋蔵量は、推定 ５０年ですってよ。ううむ。<br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Sekai zentai wo miru to kekkyoku ima no you ga seiyu no shouhiryo wa <br/>
              Fueteimasu. Nimo kakawarazu genzai (2018 tojimi)  <br/>
              no nokori no maizouryou wa, suitei 50nen desutte yo. Uumu. <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            If you look at the whole world, our current fuel consumption is increasing. <br/>
            But even so, the current reserves (as of 2018) are estimated to last 50 years. <br/> 
            Well, okay... / Uh huh… <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              勿論、環境のために減らした方が良いのは判るんですけど、<br/>
              一万で残り少ない 筈の石油の金で私腹を 肥やす人達もいる。<br/>
              何とも釈然としませんなぁ。<br/>
              まさに強欲な畜生の所業。<br/>

            </Grid>
            <Grid item className="japaneseRomanizedText">
            Mochiron, kankyou no tame ni herashita hou ga ii no wa wakarun desu kedo, <br/>
            ichiman de nokori sukunai hazu no seiyu no kin de shifuku wo koyasu hitotachi mo iru. <br/>
            Nan tomo shakuzen to shimasen naa. <br/>
            Masa ni gouyoku na chikishou no shogyou.<br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Of course, even though I know that we need to decrease (consumption) for the environment, <br/>
            there are also people who will line their pockets with oil money until there’s nothing left. <br/>
            I don’t know what to think… <br/> 
            This is surely a greedy beast’s scheme… <br/>
          </Grid>
      </Grid>
    </Grid>
  );
}
