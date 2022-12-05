import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Grid, styled } from '@mui/material';
import "../App.css"
import CheckboxButtons from './common/CheckboxButtons';


export default function Toge() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(true);
  const [isJapaneseCharactersVisible, setIsJapaneseCharactersVisible] = React.useState(false);

  const JapaneseCharacterGrid = styled(Grid)({
    display: isJapaneseCharactersVisible ? "block" : "none"
  }) as typeof Grid;

  //TODO: selectively render the text depending on user settings, add a button for each type
  //TODO: Figure out why the overlay is so damn big on the youtube player...
  return (
    <Grid container direction="column">
      {isVideoOpen &&
      <Grid item className="ytVideoContainer">
        <LiteYouTubeEmbed 
          id="GcLH_pmm8_M"
          title="Opposite_World"
          wrapperClass="yt-lite"
        />
      </Grid>
      }
        <CheckboxButtons 
          setIsVideoOpen={() => {
            return setIsVideoOpen(!isVideoOpen
          )}}
          setIsJapaneseCharactersVisible={() => setIsJapaneseCharactersVisible(isJapaneseCharactersVisible)}
          />
      <Grid container item direction="column" className="textContainer translationMarginTop">
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
              間違いを正す　その心はあぁ <br/>
              朽ち果てた草や木に <br/>
              水をそそぐ様　だけれど <br/>
              意味もなくそれを　「善」　と感じて <br/>
              闇雲に向かう先　それを　「支配」　と呼ぶ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
              machigai wo tadasu sono kokoro wa aa <br/>
              kuchihateta kusaya ki ni <br/>
              mizu wo sosogu you dakeredo <br/>
              imi mo naku sore wo "zen" to kanjite <br/>
              yamikumo ni mukau saki sore wo "shihai" to yobu <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            That heart that corrects its wrongdoing, ah… <br/>
            Is like sprinkling water on rotting trees and grass <br/>
            But even so, if we can feel something meaningless like that is still a “good*” thing <br/>
            To be able to stand before the storm clouds ahead of us, that’s what it means to “control”. <br/>

          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
              「明日は晴れる」　「きっと雨が降る」　などと当たり前に <br/>
              過ごした日々が　こんなに遠くになってしまうなんて <br/>

              -今- <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
              "ashita wa hareru" "kitto ame ga furu" nado to atari mae ni <br/>
              sugoshita hibi ga konna ni tooku ni natte shimau nante <br/>

              -ima- <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Thinking things like “Tomorrow will be sunny” and <br/>
            “rain will definitely come”; taking them for granted <br/>
            Oh, how days like those have become so distant from me <br/>
            
            And now <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
              止まぬ霧雨　見えぬ光が <br/>
              世界を赤く　染め上げてしまうのか <br/>
              薄い記憶を　辿っていけば <br/>
              この血液は　覚えているのか <br/>
              争いの　「タネ」　を <br/>
            </JapaneseCharacterGrid> 

            <Grid item className="japaneseRomanizedText">
              yamanu kirisame mienu hikari ga <br/>
              sekai wo akaku someagete shimau no ka <br/>
              usui kioku wo tadotte ikeba <br/>
              kono ketsueki wa oboeteiru no ka <br/>
              arasoi no "tane" wo <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            The unceasing [rain] <br/>
            The unseen [light] <br/>
            Will they stain this world crimson? <br/>
            If I follow along this faint memory <br/>
            Will this blood of mine remember? <br/>
            Why are we fighting in the first place? <br/>
            (Lit. “The [seed] of the conflict) <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
              そっと腰挂ける　背の高い座には <br/>
              見渡せる仕組みには作られていない <br/>
              それ故　その眼 <br/>
              (まなこ) <br/>
              頭　身体（を）駆使して <br/>
              目に見えぬ無意味にも　意味を生まれさせて <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
            sotto koshi kakeru se no takai za ni wa <br/>
            miwataseru shikumi ni wa tsukurareteinai <br/>
            sore yue sono manako atama karada (wo) kushishite <br/>
            me ni mienu muimi ni mo imi wo umaresasete <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Letting my waist hang from this tall chair <br/>
            Looking over all my schemes that am not making <br/>
            Therefore, making use of all my senses (lit. Eyes, Head, Body) <br/>
            I can make some meaning out of what I can only see as meaningless in front of me <br/>
          </Grid> 
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
              剣を向けた私にさえ <br/>
              優しく微笑み返す <br/>
            「これまでの戦いの意味」を <br/>　 
              忘れてしまう程に <br/>
              -何故？- <br/>
            </JapaneseCharacterGrid>
            <Grid item className="japaneseRomanizedText">
              ken wo muketa watashi ni sae yasashiku hohoemi kaesu <br/>
              "koremade no tatakai no imi" wo wasurete shimau hodo ni <br/>
              --Naze?-- <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            All I return to you pointing <br/>
            your blade at me is a soft smile <br/>
            We’ve reached the point that we’ve forgotten <br/>
            [“The reason we’ve fought up until now”] <br/>

            -Why / For what reason?- <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
              得体の知れぬ生き方をする <br/>
              お前のような者も　有りと言える <br/>
              鏡を照らして合わせてみても <br/>
              全てが同じとは言えないから <br/>
              同じはないから <br/>
            </JapaneseCharacterGrid>
            <Grid item className="japaneseRomanizedText">
              etai no shirenu iki kata wo suru <br/>
              omae no you na mono mo ari to ieru <br/>
              kagami wo terashite awasete mite mo <br/>
              subete ga onaji to wa ienai kara <br/>
              onaji wa nai kara <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            You live the life of someone with no ‘nature/character’ <br/>
            But you could say there are others like you, too. <br/>
            Even if I look at my own reflection <br/>
            I can’t say everything is the same <br/>
            because it's not <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
              止まぬ霧雨　見えぬ光が <br/>
              世界を赤く　染め上げてしまうのか <br/>
              薄い記憶を　辿っていけば <br/>
              この血液は　覚えているのか <br/>
              争いの　「タネ」　を <br/>
            </JapaneseCharacterGrid>
            <Grid item className="japaneseRomanizedText">
              yamanu kirisame mienu hikari ga <br/>
              sekai wo akaku someagete shimau no ka <br/>
              usui kioku wo tadotte ikeba <br/>
              kono ketsueki wa oboeteiru no ka <br/>
              arasoi no "tane" wo <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            The unceasing [rain] <br/>
            The unseen light <br/>
            Will they stain this world crimson or no? <br/>
            If I reach this faint memory <br/>
            Will this blood of mine remember? <br/>
            Why are we fighting in the first place? <br/>
            (Lit. “The [seed] of conflict) <br/>
          </Grid>
      </Grid>
    </Grid>
  );
}
