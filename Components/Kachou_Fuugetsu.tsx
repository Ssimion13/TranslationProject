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
          id="WM7biRZpgHM"
          title="Kachou_Fuugetsu"
          wrapperClass="yt-lite"
        />
      </Grid>
      <Grid container item direction="column" className="textContainer" style={{marginTop: "30vh"}}>
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
            嗚呼　華のように鮮やかに　さあ <br/>
            嗚呼　鳥のように優雅に <br/> 
            嗚呼　風まかせも心地良い　さあ <br/>
            嗚呼　月明かり照らされて <br/>
            </Grid> 

            <Grid item className="japaneseRomanizedText">
            aa hana no you ni azayaka ni saa <br/>
            aa tori no you ni yuuga ni <br/>
            aa kazemakase mo kokochi yoi saa <br/>
            aa tsukiakari terasarete <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
          Ah, vibrant like flowers <br/>
          Ah, elegant like birds <br/>
          Ah, the pleasant feeling of giving yourself to the wind <br/>
          Ah, shone on by the moonlight <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              正しさなんてもの <br/>
              人のモノサシによって変わる <br/>
              この世界　不変あるとするならば <br/>
              華鳥風月　厳かで美しいもの <br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              tadashisa nante mono <br/>
              hito no monosashi ni yotte kawaru <br/>
              kono sekai fuhen aru to suru naraba <br/>
              kachoufuugetsu ogosoka de utsukushii mono <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            That which we call "righteous" <br/>
            Changes depending on the ruler that a person uses to measure it <br/>
            If there is something in this world that never changes, <br/>
            it's the beauty of nature, in its majestic loveliness <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">    
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              後悔をして <br/>
              学び　また歩もう <br/>
              二度と過ち <br/>
              繰り返さぬように <br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              koukai wo shite <br/>
              manabi mata ayumou <br/>
              nidoto ayamachi <br/>
              kurikaesanu you ni <br/>
            </Grid> 
          </Grid>

          <Grid item className="englishText">
            And so we regret, <br/>
            we learn, and move on <br/>
            So that we will never repeat <br/>
            the mistakes we have made <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              歴史とは <br/>
              変わらぬ感情が <br/>
              廻り廻って　傷付けて和解された <br/>
              世界の成長 <br/>
            </Grid>
            <Grid item className="japaneseRomanizedText">
              rekishi to wa <br/>
              kawaranu kanjou ga <br/> 
              megurimegutte kizutsukete wakai sareta <br/>
              sekai no seichou <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText"> 
            “History” is the growth of the world <br/>
            When unchanging feelings spread around, <br/>
            hurting and then coming to terms with each other <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">

          
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              正しさなんてもの <br/>
              大人にも分からない幻想 <br/>
              この世界　不変あるとするならば <br/>
              華鳥風月　穏やかで懐かしきもの <br/>

            </Grid>
            <Grid item className="japaneseRomanizedText">
              tadashisa nante mono <br/>
              otona ni mo wakaranai gensou <br/>
              kono sekai fuhen aru to suru naraba <br/>
              kachoufuugetsu odayaka de natsukashiki mono <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            That which we call "righteous" <br/>
            Is unknown even to adults – a fantasy – <br/>
            If anything in this world is unchanging, <br/>
            it's the beauty of nature, calming and nostalgic <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              汚れぬことが <br/>
              正義なのだろうか？ <br/>

              過ちの中にあるけじめに <br/>
              魅せられ知った　穢れを恐れぬ愛も <br/>
              正しさと言う事 <br/>
            </Grid>
            <Grid item className="japaneseRomanizedText">
              yogorenu koto ga <br/>
              seigi na no darou ka? <br/>

              ayamachi no naka ni aru kejime ni <br/> 
              miserareshitta kegare wo osorenu ai mo <br/>
              tadashisa to iu koto <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Is something that is without impurity <br/>
            that which we can call righteous’? <br/>

            In that distinction we make between right and wrong <br/>
            found in our mistakes, we can also say that love, <br/>
            unafraid of being made impure, is also "righteous" <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              だからこそ　愛を彷徨う <br/>

              悲しめる心も <br/>
              恐れる優しささえも　きっと <br/>
              生けるものすべて内側に持つ　華鳥風月 <br/>
              何処までも美しくなれ <br/>

              いつまでも美しくなれ <br/>
            </Grid>
            <Grid item className="japaneseRomanizedText">
              dakara koso ai wo samayou <br/>

              kanashimeru kokoro mo <br/>
              ikareru yasashisa sae mo kitto <br/>
              ikeru mono subete uchigawa ni motsu kachoufuugetsu <br/>
              dokomademo utsukushiku nare <br/>

              itsumademo utsukushiku nare <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            And so we wander in love <br/>

            Even a mourning heart <br/>
            and even a fearful kindness are surely <br/>
            the beauties of nature, held within all of us <br/>
            Remain beautiful no matter what <br/>

            Remain beautiful forever <br/>
          </Grid>
      </Grid>
    </Grid>
  );
}
