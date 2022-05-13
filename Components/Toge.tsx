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
          id="cLJf-5tFv4k"
          title="Toge"
          wrapperClass="yt-lite"
        />
      </Grid>
      <Grid container item direction="column" className="textContainer" style={{marginTop: "30vh"}}>
          {/*(0:00 - 0:35s)*/}
          <Grid className="englishText"> movin' up & down <br/> </Grid>
          
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              さあ、繋ぐ讃歌で <br/>
              小さい安泰なアンパイへinvitation <br/>
              誰がB型？A型？したがってる <br/>
              属して生きてたい oh <br/>
              そう「こうあるべき」だなんてほら縛りつけ <br/>
              また自分も納得したいだけ <br/>
              「こうあるべき」否 <br/>
              「こうありたい」じゃない？ <br/>
              そうでいたいんだけど君はどうなりたい？ <br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Saa, tsunagu sanka de <br/>
              Chiisai antai na ANPAI he invitation <br/>
              Dare ga B kata? A kata? Shitagatteru <br/>
              Shokushite ikitetai oh <br/>
              Sou [kou aru beki] da nante hora shibari tsuke <br/>
              Mata jibun mo nattoku shitai dake <br/>
              [kou aru beki] iya (?) <br/>
              [kou aritai] janai? <br/>
              Sou de itainda dakedo kimi wa dou naritai? <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Now, in the song of praise, I present <br/>
            An invitation to become a small, tranquil, expendable pawn <br/>
            “Who is a B blood type? A Blood type?” And accordingly, just based on that <br/>
            Wanting to live our lives following that kind of thinking <br/>
            Right, things like “doing things the right way”, see! You’re ensnared by it <br/>
            But you, also,  just want to fit in <br/>
            [It’s the right way to do something] No way, <br/>
            [It’s the way you want to do it], right? <br/>
            I want to live like that, but what about you? <br/>
          </Grid>
      </Grid>

      <Grid container item direction="column" className="textContainer">
        {/* 35s - 42s */}

        <Grid container item justifyContent="space-around" alignItems="center">
          <Grid item className="japaneseCharacterText">
            (周り、ばかり) <br/>
            Worry about what people think <br/>
            (まさに、泡に。) <br/>
          </Grid>

          <Grid item className="japaneseRomanizedText">
            (Mawari, bakari) <br/>
            Worry about what people think <br/>
            (masa ni awa ni.) <br/>
          </Grid>
        </Grid> 

        <Grid item className="englishText">
          (Doing nothing but looking around) <br/>
          Worry(ing) about what people think <br/>
          Just like you’re in a bubble <br/>
        </Grid>

        {/* 42s - 1:02 */}
        <Grid container item justifyContent="space-around" alignItems="center">
          <Grid item className="japaneseCharacterText">
            誰かれ構わず好きに生きたい <br/>
            でもでも「そんなん簡単じゃないんで。」 <br/>
            言ってばっかで <br/>
            何もしてないんでしょう？ <br/>
            (もう)「諦めた。」って <br/>
            (やっと)「大人になった」って <br/>
            天下取った顔しちゃって、そう <br/>
            人生達者風な奴隷屋さん <br/>
          </Grid>

          <Grid item className="japaneseRomanizedText">
            Darekare kamawazu suki ni ikitai <br/>
            Demo demo [sonnan kantan janainde.] <br/>
            Itte bakka de <br/>
            Nanimo shitenain deshou? <br/>
            (mou) [akirameta.] tte <br/> 
            (yatto) [otona ni natta] tte <br/>
            Tenka totta kao shichatte, sou <br/>
            Jinsei tassha fuu na doreiya san <br/>
          </Grid>
        </Grid>

        <Grid item className="englishText">
            I want to live as I like without worrying about other people <br/>
            But, but, [“it's not as simple as that.”] <br/>
            You’re only saying that because <br/>
            you’re not doing anything at all, right? <br/>
            “I’ve already given up”, (you said) <br/>
            “I’ve finally become an adult”, (you said) <br/>
            While wearing the face of someone who just took over the world, right? <br/>
            Oh, Mr. Slave Trader, who knows so much about life? <br/>
        </Grid>
      </Grid>

      <Grid container item direction="column" className="textContainer">
          {/* 1:04s - 1:24s */}
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              hey, ジーザス <br/>
              勇敢に満ちた声で <br/>
              可憐に響いたトゲで <br/>
              逃げ諂って <br/>
              手を伸ばしたって届かないって吠えて <br/>
              夕立に濡れた rainy day <br/>
              妬んで恋した many day <br/>
              欲しがって捨て去って <br/>
              ジブンからっぽなんじゃないの？ <br/>
            </Grid> 

            <Grid item className="japaneseRomanizedText">
              Hey, Jesus <br/>
              Yuukan ni michita koe de <br/>
              Karen ni hibiita toge de <br/>
              Nige hitsuratte  <br/>
              Te wo nobashitatte todokanaitte hoete <br/>
              Yudachi ni nureta rainy day <br/>
              Netande koishita many day <br/>
              Hoshigatte sutesatte <br/>
              JIBUN karappo nan janai no? <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Hey Jesus! <br/>
            With a voice full of bravery <br/>
            With thorns that resonate sweetly <br/>
            “I escaped by sucking up to others; <br/>
            I tried to reach my hands out but couldn’t reach”, you bellow <br/>
            Drenched in the evening showers [rainy day] <br/>
            Lovingly embracing your own jealousy/envy [many day] <br/>
            It’s what you wanted, then you threw it away <br/>
            You’re empty inside, aren’t you? <br/>
          </Grid>
        </Grid>
        <Grid container item direction="column" className="textContainer">
          {/* 1:27 -  1:52*/}
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              ああ、失敗したんだって <br/>
              落ち込んではもうほらダメだなんて <br/>
              キレイめの決めつけそんな感じ <br/>
              こんな感じで、案内「ダメ感謝祭」<br/> 
              もしもしもの話花咲かせて <br/>
              盛り上がって歴史忘れちゃって <br/>
              「生まれ変わったら」否 <br/>
              「今この人生」show time <br/>
              何時(いつ)でも一緒はじめの一歩 <br/>
              (無駄に、砕き) <br/>
              what about my wasting life <br/>
              (無難に、縋り) <br/>
              It's my denial <br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Aa, shipppai shitan datte <br/>
              Ochikonde wa mou hora DAME da nante <br/>
              KIREI me no kimetsuke sonna kanji <br/>
              Konna kanji de, anai [DAME KAN SHASAI] <br/>
              Moshi moshimo no hanshi hanasakasete <br/>
              Moriagatte rekishi wasurechatte <br/>
              [umarekawattara] iya <br/>
              [ima kono jinsei] show time <br/>
              Itsudemo issho wa hajime no ippo <br/>
              (muda ni kataki) <br/>
              What about my wasting life <br/>
              (funan ni sugari) <br/>
              It’s my denial <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Ah, you say you’ve failed <br/>
            Come on, you know you’re not allowed to get depressed <br/>
            Focusing on “being that trim, neat go getter” at all costs, <br/>
            Guided with that kind of feeling straight <br/>
            to the [“feeling of hopelessness” thanksgiving feast] <br/>
            “Hello? Hello?” conversations are blooming <br/>
            Rising up, you forget your history <br/>
            [When I resurrect in the next life] Rejected <br/>
            [In this life] show time <br/>
            It always starts with a single step <br/>
            (breaking apart futilely) <br/>
            {"{What about my wasting life}"} <br/> 
            (Clinging to safety) <br/>
            {"{It’s my denial}"}` <br/>
          </Grid>
        </Grid>

        <Grid container item direction="column" className="textContainer">
          {/* 1:52 - 2:02 */}
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              (暗示爾が紡いだ) <br/>
              please listen to my heart <br/>
              (純に潜んだ「I」へ) <br/>
              Jyun ni tsunda [I] he <br/>
              be myself <br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Anji nanji ga tsuita <br/>
              please listen to my heart <br/>
              Jyun ni tsunda [I] he <br/>
              be myself <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            I spinned a suggestion <br/>
            {"“{please listen to my heart}”"} <br/>
            To the dormant, pure [I], <br/>
            {"“{be myself}”"} <br/>
          </Grid>
        </Grid>

        <Grid container item direction="column" className="textContainer">
          {/* 2:03 - 2:30 */}
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              hey, ジーザス <br/>
              抵抗の意図を閉ざして <br/>
              栄光の道を拒んで <br/> 
              芽を摘むんだって <br/>
              追いすがったって出来ないんだって吠えて <br/>
              有識に埋めた quipping <br/>
              経験に恋して dripping <br/>
              口ばっか歳取って <br/>
              アタマからっぽなんじゃないの？ <br/>
              (it's you) <br/>
              気づいてないから進呈 <br/>
              (you know?) <br/>
              一度きりだもん人生 <br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Hey, Jesus <br/>
              Teikou no ito wo tozashite <br/>
              Eikou no michi wo kobande <br/>
              Me wo hisumundatte  <br/>
              Oisugattatte dekinain datte hoete <br/>
              Yuushiki ni umeta [quipping] <br/> 
              Keiken ni koishite dripping <br/>
              Kuchibakka toshitotte <br/>
              ATAMA karappo nan janai no? <br/>
              (it’s you) <br/>
              kiduite  nai kara shintei <br/>
              (you know?) <br/>
              Ichido kiri da mon jinsei <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Hey, Jesus <br/>
            Locking away the intention of resistance <br/>
            Rejecting the path of glory / achievement <br/>
            “I’ve already been nipped in the bud <br/>
            I was almost there but I couldn’t do it”, you howl <br/>
            stuffed full with ‘learnedness’, {"{ Quipping }"} <br/>
            loving the experience, {"{ Dripping }"} <br/>
            For all those years, you’re still just words -– <br/>
            Is your head empty? <br/>
            (it’s you) <br/>
            Because you haven’t noticed, I grant this gift to you – <br/>
            “You Only Live Once”. <br/>
          </Grid>
        </Grid>
        
        <Grid container item direction="column" className="textContainer">
          <Grid item className="englishText">
            {/* 2:30s - 2:45s */}
            (hey,you're guys are such a foolish.) <br/>
            (what do you want to do for the future.) <br/>
          </Grid>
        </Grid>
        
        <Grid container item direction="column" className="textContainer">
          {/* 2:52s - 3:37s */}
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              ねぇ、ジーザス <br/>
              君は生きてますか？ <br/>
              素直に笑えてますか？ <br/>
              君の代わりなんて、絶対いない。らしいんだ。 <br/>
              普通って何なんでしょうか？ <br/>
              正解って何なんでしょうか？ <br/>
              後悔も相まって"君らしさ"なんじゃない？ <br/>
              Ah, <br/>
              勇敢に満ちた声で <br/>
              可憐に響いたトゲで <br/>
              壁砕いたんだ <br/>
              手を伸ばしたんだ触れ合ったんだ「I」に <br/>
              夕立の後に rainbow <br/>
              願いの恋に ready go <br/>
              案外ねむき出しの <br/>
              "君らしく"でいいんじゃないの <br/>
              (it's you) <br/>
              気づいてないから進呈 <br/>
              (you know?) <br/>
              一度きりだもん人生 <br/>
            </Grid>

            <Grid item className="romanizedText">
              Nee, Jesus <br/>
              Kimi wa ikitemasu ka? <br/>
              Sunao ni waretemasu ka ? <br/>
              Kimi no kawari nante, zettai inai. Rashiin da. <br/>
              Futsu tte nan nan deshou ka? <br/>
              Seikai tte nan nan deshou ka? <br/>
              Koukai mo aimatte “kimirashisa” nan janai? <br/>

              Ah, <br/>
              Yuukan ni michita koe de <br/>
              Karen ni hibiita toge de <br/>
              Kabe kadaitanda <br/>
              Te wo nobashitanda fureattanda [i] ni <br/>
              Yuudachi no ushiro ni rainbow <br/>
              Negai no koi ni ready go <br/>
              Angai ne mukidashi no <br/>
              “Kimirashiku” de iin janai no <br/>
              (it’s you) <br/>
              Kiduitenai kara shintei <br/>
              Ichido kiri da mon jinsei <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Hey...Jesus? <br/>
            (polite) Are you living? <br/>
            (polite) Can you smile honestly? <br/>
            It seems like there’s definitely no replacement for you, doesn’t it? <br/>
            (polite) What does it mean for something to be “normal”? <br/>
            (polite) What does it mean for something to be “correct”? <br/>
            If you mix that with your regrets, that seems a whole lot like ‘you’, wouldn’t you say? <br/>
            Ah, <br/>

            With a voice filled with bravery <br/>
            With thorns that echo sweetly <br/>
            You reached your arms out and brushed against that [I] <br/>
            There’s a rainbow after an evening shower <br/>
            Ready, go with a love of hoping <br/>
            Unexpectedly, it seems so obvious <br/>
            It’s good to be “like you”, isn’t it? <br/> 
            (it’s you) <br/>
            Because you haven’t noticed, I grant this gift to you – <br/>
            “You Only Live Once (YOLO)”. <br/>
          </Grid>
        </Grid>
    </Grid>
  );
}
