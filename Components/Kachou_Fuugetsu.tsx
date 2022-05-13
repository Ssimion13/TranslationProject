import React from 'react';
import { Grid, Typography } from '@mui/material';
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
      <Grid container item direction="column" className="textContainer" style={{marginTop: "25vh"}}>
          {/*(0:00 - 0:35s)*/}
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
            嗚呼　華のように鮮やかに　さあ
            嗚呼　鳥のように優雅に
            嗚呼　風まかせも心地良い　さあ
            嗚呼　月明かり照らされて
            </Grid>

            <Grid item className="japaneseRomanizedText">
            aa hana no you ni azayaka ni saa
            aa tori no you ni yuuga ni
            aa kazemakase mo kokochi yoi saa
            aa tsukiakari terasarete
            </Grid>
          </Grid>

          <Grid item className="englishText">
          Ah, vibrant like flowers
          Ah, elegant like birds
          Ah, the pleasant feeling of giving yourself to the wind
          Ah, shone on by the moonlight
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              正しさなんてもの
              人のモノサシによって変わる
              この世界　不変あるとするならば
              華鳥風月　厳かで美しいもの
            </Grid>

            <Grid item className="japaneseRomanizedText">
              tadashisa nante mono
              hito no monosashi ni yotte kawaru
              kono sekai fuhen aru to suru naraba
              kachoufuugetsu ogosoka de utsukushii mono
            </Grid>
          </Grid>

          <Grid item className="englishText">
            That which we call "righteous"
            Changes depending on the ruler that a person uses to measure it
            If there is something in this world that never changes,
            it's the beauty of nature, in its majestic loveliness
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">

          
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              後悔をして
              学び　また歩もう
              二度と過ち
              繰り返さぬように
            </Grid>

            <Grid item className="japaneseRomanizedText">
              koukai wo shite
              manabi mata ayumou
              nidoto ayamachi
              kurikaesanu you ni
            </Grid>
          </Grid>

          <Grid item className="englishText">
            And so we regret,
            we learn, and move on
            So that we will never repeat
            the mistakes we have made
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">

          
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              歴史とは
              変わらぬ感情が
              廻り廻って　傷付けて和解された
              世界の成長
            </Grid>
            <Grid item className="japaneseRomanizedText">
              rekishi to wa
              kawaranu kanjou ga
              megurimegutte kizutsukete wakai sareta
              sekai no seichou
            </Grid>
          </Grid>

          <Grid item className="englishText">
            “History” is the growth of the world
            When unchanging feelings spread around, 
            hurting and then coming to terms with each other
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">

          
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              正しさなんてもの
              大人にも分からない幻想
              この世界　不変あるとするならば
              華鳥風月　穏やかで懐かしきもの

            </Grid>
            <Grid item className="japaneseRomanizedText">
              tadashisa nante mono
              otona ni mo wakaranai gensou
              kono sekai fuhen aru to suru naraba
              kachoufuugetsu odayaka de natsukashiki mono
            </Grid>
          </Grid>

          <Grid item className="englishText">
            That which we call "righteous"
            Is unknown even to adults – a fantasy –
            If anything in this world is unchanging,
            it's the beauty of nature, calming and nostalgic
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              汚れぬことが
              正義なのだろうか？


              過ちの中にあるけじめに
              魅せられ知った　穢れを恐れぬ愛も
              正しさと言う事
            </Grid>
            <Grid item className="japaneseRomanizedText">
              yogorenu koto ga
              seigi na no darou ka?


              ayamachi no naka ni aru kejime ni
              miserareshitta kegare wo osorenu ai mo
              tadashisa to iu koto
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Is something that is without impurity
            that which we can call righteous’?

            In that distinction we make between right and wrong 
            found in our mistakes, we can also say that love,
            unafraid of being made impure, is also "righteous"
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              だからこそ　愛を彷徨う

              悲しめる心も
              恐れる優しささえも　きっと
              生けるものすべて内側に持つ　華鳥風月
              何処までも美しくなれ

              いつまでも美しくなれ
            </Grid>
            <Grid item className="japaneseRomanizedText">
              dakara koso ai wo samayou

              kanashimeru kokoro mo
              ikareru yasashisa sae mo kitto
              ikeru mono subete uchigawa ni motsu kachoufuugetsu
              dokomademo utsukushiku nare

              itsumademo utsukushiku nare
            </Grid>
          </Grid>

          <Grid item className="englishText">
            And so we wander in love

            Even a mourning heart
            and even a fearful kindness are surely
            the beauties of nature, held within all of us
            Remain beautiful no matter what

            Remain beautiful forever
          </Grid>
      </Grid>
    </Grid>
  );
}
