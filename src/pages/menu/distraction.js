import React from "react";
import { Layout } from "../../layout/Layout";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import BgAnimation from "../../components/BackgrooundAnimation/BackgroundAnimation";
import { LeftSection, Img } from "./../../components/Hero/HeroStyles";


const distraction = () => {
  return (
    <Layout>
      <Section grid>
        <Section row nopadding>
          <LeftSection>
            <SectionTitle main center>
              Ma vie de passe-temps ou de distraction
            </SectionTitle>
            <SectionText>
              Ma vie de distraction inh !! Quelle vie 😃😃... Y a 3 4 ans en
              arrière, j'aurai eu beaucoup de choses à raconter dans ce volet.
              Mais hélas, je viellis et je commence à perdre goût même aux trucs
              que je kiffais de ouf. <br />
              Mais je peux aussi dire que mon premier passe-temps ou ma distraction favorite est le code à son état pur.
              C'est parfois bien de sortir de la bull du dev logiciel et d'écrire des algos crus pour résoudre un problème spécifique. <br />
              S'il m'arrive de me distraire aujourd'hui, sûrement j'écoute de la
              musique (et même ça, je le fais en taffant) ou de jouer une partie
              vite fait. Sinon pour faire passer le temps, le seul truc c'est
              dormir...Merde, le sommeil c'est trop doux 😃.
            </SectionText>

            <SectionText>
              Si on va rentrer dans les détails, ça sera juste une histoire de
              goût mais ça tombe bien puisque j'ai des bons goûts.
            </SectionText>
            <SectionText>
              Mes jeux vidéos préférés : NBA 2k14; PES 2017; NFS Most Wanted.
              <Section><Img src={'/images/fun/1.jpg'} /></Section>
              <Section><Img src={'/images/fun/2.jpg'} /></Section>
              <Section><Img src={'/images/fun/3.jpg'} /></Section>
            </SectionText>
            <SectionText>
              Mes séries préférées : Difficile de faire un top 3. Mais en général j'aime les séries qui racontent un truc en particulier au lieu de juste être une pâle copie d'un ancien succès ou un cliché de buzz.
              Si le scénario est bâteau, je peux compenser avec de la baston à gogo ou des rebondissements. <br />
              Mais puisqu'il faut trancher, voilà : Game of Thrones, Breaking Bad et 24heures Chrono(mon kif absolu sinon il est bien derrière dans le classement 😃 )
              <Section><Img src={'/images/fun/4.jpg'} /></Section>
              <Section><Img src={'/images/fun/5.jpg'} /></Section>
              <Section><Img src={'/images/fun/6.jpg'} /></Section>
              Mentions spéciales anyway pour Billions et Peaky Binders
              <Section><Img src={'/images/fun/7.jpg'} /></Section>
              <Section><Img src={'/images/fun/8.jpg'} /></Section>
            </SectionText>
            <SectionText>
              Pour les films, je passe 😅😅😅😅😅... 
            </SectionText>
            <SectionText>
              Côté musique : j'écoute beaucoup de musique urbaine française. A part ça, tant que l'artiste chante pas du caca 
              dans mes oreilles et son mood me parle, bah j'écoute... Vous serez supris de voir la diversité de ma playlist😅.
            </SectionText>
            <SectionText>
              Pour finir j'aime beaucoup me cultiver et apprendre des succès de ceux qui réussissent. J'aime aussi les belles histoires et les émotions fortes.
              Pour ça la NBA ET LE font sont là tranquilles 😅😅. C'est fou, y a trop de choses. <br />
              J'adore Kylian Mbappé(son mental c'est ouf) et qui parle de mental et de travail ne peut penser premièrement qu'à Cristiano Ronaldo(le GOAT des GOAT😅😅 Siuuuuuuuuuuuuuuuuuuuuu!!) ou même à LeBron James <br />
              <Section><Img src={'/images/fun/9.jpg'} /></Section>
              <Section><Img src={'/images/fun/10.jpg'} /></Section>
              <Section><Img src={'/images/fun/11.jpg'} /></Section>
              Bah j'aime aussi Micheal Jordan, Leo Messi, Stephen Curry... le génie c'est de l'art et combiné au hard work c'est de la magie 🔥🔥🔥... 
              <Section><Img src={'/images/fun/12.jpg'} /></Section>
              <Section><Img src={'/images/fun/13.jpg'} /></Section>
              <Section><Img src={'/images/fun/14.jpg'} /></Section>
              <br />
              En gros, c'est que de la distraction utile 😅 mais pas forcément nécessaire.
            </SectionText>
          </LeftSection>
          
        </Section>
        <BgAnimation />
      </Section>
    </Layout>
  );
};

export default distraction;
