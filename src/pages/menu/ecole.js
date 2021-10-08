import React from "react";
import { Layout } from "../../layout/Layout";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import BgAnimation from '../../components/BackgrooundAnimation/BackgroundAnimation';
import { LeftSection, Img } from './../../components/Hero/HeroStyles';


const ecole = () => {
  return (
    <Layout>
      <Section grid>
        <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
            Ma vie à l'Ecole   
            </SectionTitle>
            <SectionText>
                <Section><Img src={'/images/ecole/1.jpg'} /></Section>
                <Section><Img src={'/images/ecole/4.jpg'} /></Section>
            </SectionText>
            <SectionText>
            Ah Ah Ah!!! Si je dois parler de ma vie à l'école, y aura beaucoup trop de choses à raconter 😃. Donc, commençons ! 
            </SectionText>
            <SectionText>
            On va dire que ma vie à l'école est un ascenceur émotionnel. Déjà le CI(Cours d'Initiation), je l'ai pas vraiment fait(une bonne excuse pour être introverti 😎😢). Après ça, le CP (bah bof inh), je sais pas comment mais j'ai aucun souvenir, sûrement c'est intentionnel tant
             j'ai toujours du mal à comprendre jusqu'à aujourd'hui comment j'ai pu être aussi médiocre cette année là. Bon le reste du cours primaire, bah j'ai tout écrasé
             😅 à l'excepetion de quelques rares situations qui se sont très vite calmées. Après dans l'ensemble c'était une période formidable, beaucoup de bonheur.    
            </SectionText>
            <SectionText>
               Maintenant le secondaire. Ah le début des bonnes choses 😺... En bref j'ai beaucoup kiffé aussi. J'ai appris à relever des défis et à les atteindre, j'ai parfois repoussé mes limites
               et tout ça semblait banal en plus. Au début mon objectif était de dépasser la moyenne que mon grand-frère avait eu dans la même classe.
               Croyez-moi, c'était un défi de taille. Donc en gros j'ai tout cassé là aussi avec quelques records qui resteront dans l'histoire. Une chose que je dis souvent c'est que "S'il doit y avoir une statue d'un ancien élève au Lycée Mathieu Bouké de Parakou, c'est bien la mienne!".
               Mais bon, je suis tranquille, ça se fera, ils attendent juste que je sois milliardaire et famous d'abord 😺.   
            </SectionText>
            <SectionText>
                En dehors du plan académique j'ai fait la connaissance de magnifiques personnes qui sont restées proches jusqu'à aujourd'hui et j'ai également beaucoup mûri.
                C'est également au secondaire que j'ai connu ma situation de vie la plus douloureuse mais c'est la vie. <br />
                En classe au secondaire c'était nickel, mais aux examens c'était pas terrible, faut l'avouer... Du coup le BAC même si c'était pas mal reste un échec personnel pour moi surtout après toutes les conséquences qui en ont découlé.
            </SectionText>
                
            <SectionText>
                L'Université maintenant!!! Là on pourra dire que petit Jérôme a grandi. Je suis devenu adulte et je deviens un homme aujourd'hui avec toute son histoire et son expérience de la vie.
                J'ai vu tellement de choses que j'ai toujours du mal à digérer aujourd'hui... Mon passage à la FSS, faut être cash, c'est de la grosse merde. Mais j'en ressors quand-même avec pleins de leçons de vie et des rencontres formidables.
                Un spécial big up à mon jumeau Cheikh (aka Baba). Quand vous tombez sur des personnes du genre, vous comprenez que dans cette vie, y a encore du positif.

            </SectionText>
            <SectionText>
                Mon passage aux Cours Sonou maintenant 😅 (normalement la seule partie à aborder mais j'étais inspiré).
                Idem inh pour faire court; beaucoup de positif en ressort, des rencontres formidables, des leçons de vie mais surtout le fait que je me sois relancé.
                Je crois que même moi avec tout mon égo et ma self-confidence, j'en avais besoin. Après je reste sur ma faim; l'école a le potentiel de proposer mieux et y a beaucoup de pargaille aussi.
                Concernant ma vie là-bas, bref rien de croustillant, j'essaie juste de faire mon taf faire mes 3ans là et me tirer en vitesse. J'essaie de me fondre dans la masse et de rester moi-même tout en étant humble et symapthique à la limimte du possible.
                A part ça, ça fait 4 semestres que j'enchaîne masterclass sur masterclass mais bon cette école ne sait pas reconnaitre le mérite de ses étudiants. Après je m'en fou royalement mais c'est dommage.
                En gros t'as une équipe de D2 qui se rend même pas compte qu'elle a Cristiano Ronaldo dans son équipe.
            </SectionText>
            <SectionText>
                    <Section><Img src={'/images/ecole/3.jpg'} /></Section>
            </SectionText>
        </LeftSection>
        </Section>
        <BgAnimation />
      </Section>
    </Layout>
  );
};

export default ecole;
