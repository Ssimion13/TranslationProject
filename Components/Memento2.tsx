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
          id="MbFmgivBrAg"
          title="Memento_Of_All_Organisms"
          wrapperClass="yt-lite"
        />
      </Grid>
      <Grid container item direction="column" className="textContainer" style={{marginTop: "30vh"}}>
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              この世は不思議に満ちています。<br/>
              その中でも最大の謎の一つが生命でしょう。<br/>
              生命とは何か。生物と無生物にはどういう差があるのか。<br/>
              誰しもが一度は考え、そして科学的か、哲学的か、宗教的に落とし所を見つけていることでしょう。<br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Kono yo wa fushigi ni michite imasu. Sono naka demo saidai no nazo no hitotsu ga seimei deshou. <br/>
              Seimei to wa nanika. Seibutsu to museibutsu ni wa douiu sa ga aru no ka. <br/>
              Dareshi mo ga ichido wa kangae, soshite kagakuteki ka, tetsugakuteki ka, <br/>
              shuukyouteki ni otoshiba wo mitsukete iru koto deshou. <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            This world is filled with mysteries. <br/>
            But within those, the greatest puzzle is that of ‘life’. <br/>
            What is ‘life’? What is the difference between <br/>
            a living thing and a nonliving thing? <br/>
            Everyone thinks about it at one time, <br/>
            whether scientifically, philosophically, <br/> 
            religiously, finding a point of compromise between the three. <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              その中の古い説として、生物は有機物（炭素化合物）<br/>
              で構成されている有機体と言うのがあります。<br/>
              石油は太古の生物が長い時間を掛けて変化したものだと言われています。<br/>
              だとすれば油田は、まさに血の池さながらの有機物の海と言うことになります。<br/>
              同様に石炭も植物由来の有機物です。<br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Sono naka no furui setsu toshite, seibutsu wa <br/>
              yuukibutsu (tansoka goubutsu) de <br/>
              kousei sarete iru yuugitai to iu no ga arimasu. <br/>
              Sekiyu wa taiko no seibutsu ga nagai jikan wo <br/>
              kakete henka shita mono dato iwareteimasu. <br/>
              Da to sureba yuden wa, masa ni chi no ike sanagara <br/>
              no yuukibutsu no umi to iu koto ni narimasu. <br/>
              Douyou ni ishizumi shokubutsu yurai no yuukibutsu desu. <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            In an old thesis, living things are composed of bodies made of <br/>
            ‘organic matter’ (carbon-based compounds). <br/>
            Petroleum is what they call living things that have changed <br/>
            forms over a very long period of time. <br/>
            If we take that, then oil fields become something that could be called, <br/>
            like the pond of blood, a ‘sea of organic matter’ . <br/>
            In the same way, coal is organic matter derived from plant matter. <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              人間は生物であった有機物を燃やして生きているのです。<br/>
              血の池地獄とはまさに現代社会...... <br/>
              このまま炭素依存していたら灼熱の星になってしまうのでしょうか。<br/>
              いやはや恐ろしい。 <br/>
            </Grid>

            <Grid item className="japaneseRomanizedText">
              Ningen wa seibutsu de atta yuukibutsu wo moyashite ikiteiru no desu. <br/>
              Chi no ike jigoku to wa masa ni genzaishakai… <br/>
              Sono mama tanso ison shite itara shakunetsu no <br/>
              hoshi ni natte shimau no deshou ka. <br/>
              Iyahaya osoroshii. <br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            Humans live by burning the organic matter of living things. <br/>
            The pond of blood is just like modern society… <br/>
            At this rate, if we become carbon-dependent, this will become a burning hot planet… <br/>
            It’s incredibly terrifying. <br/>
          </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">

          
          <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="japaneseCharacterText">
              そんな中、面白いニュースが入ってきました。<br/>
              「北極海でガソリンと同じ成分作る植物プランクトン発見（＊２０２１年７月）」とのこと。<br/>
              さてさて、強欲な者達はこのニュースをどう受け止め、技術を進化させるのでしょうか。<br/>
            </Grid>
            <Grid item className="japaneseRomanizedText">
              Sonna naka, omoshiroi NYUUSU ga haitte kimashita. <br/>
              (hokkokukai de GASORIN to onaji seibun tsukuru <br/>
              shokubutsu PURANKUTON hakken (*7/2021)) to no koto. <br/>
              Satesate, gouyoku na monotachi wa kono NYUUSU wo dou uketome, <br/>
              gijutsu wo shinka saseru no deshou ka. <br/>

              --ZUN（７歳の息子に、水素燃料だから聖火は消えないんだよ、<br/>
              と教えて貰いました。そうなのか）<br/>
            </Grid>
          </Grid>

          <Grid item className="englishText">
            In the middle of all that, I heard some interesting news. <br/>
            [Phytoplankton that create something identical to petroleum <br/>
             were found in the arctic ocean] (as of 7/2021). <br/>
            Now then, how will those greedy people take this news, <br/>
            will they let technology evolve? <br/>

            --ZUN (my 7 year old taught me that <br/>
            the Olympic torch doesn’t go out <br/>
            because it uses hydrogen. Is that sooo?) <br/>
          </Grid>
      </Grid>
    </Grid>
  );
}
