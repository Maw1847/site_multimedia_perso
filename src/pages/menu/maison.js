import React from 'react';
import { Layout } from "../../layout/Layout";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import BgAnimation from '../../components/BackgrooundAnimation/BackgroundAnimation';
import { LeftSection, Img } from './../../components/Hero/HeroStyles';

const maison = () => {
    return (
        <Layout>
          <Section grid>
            <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                Ma vie à la Maison   
                </SectionTitle>
                <SectionText>
                    <Section><Img src={'/images/maison/1.jpg'} /></Section>
                    <Section><Img src={'/images/maison/4.jpg'} /></Section>
                </SectionText>
                <SectionText>
                    Euh ma vie à la maison, c'est juste une routine simpliste, mais merde je l'adore. C'est vrai que je fais le con parfois à me plaindre de tout mais je suis e premier à reconnaître que je suis un privilégié et que j'ai la meilleure famille au monde.
                    Meilleure maman du monde mondial (ma femme 😢), Best dad ever, best big bro, best big sis !!! En gros y  a que des best dans la famille. Je vais pas m'étaler sur ça puisque le privé doit rester privé.
                </SectionText>
                <SectionText>
                    Si je dois revenir à ma vie à la maison, bah je disais que c'était une routine simpliste. MANGER, DODO, TAFFER, JOUER...(Choississez l'ordre de priorité !!😅 ).
                    Mais en gros c'est ça, je sors très peu et je perturbe rarement ma routine.
                </SectionText>
                <SectionText>
                    <Section><Img src={'/images/maison/2.jpg'} /></Section>
                    <Section><Img src={'/images/maison/3.jpg'} /></Section>
                </SectionText>
                <SectionText>
                    Y a plus grand chose à ajouter inh à part le fait que j'emmerde tout le monde dès la première occasion (normal, je suis le benjamin) et je suis un gros flemmard.
                    Et je préfère ne même pas parler de mon expérience d'avoir vécu seul quelques années 😅😅😅... 
                </SectionText>
                <SectionText>
                    <Section><Img src={'/images/maison/5.jpg'} /></Section>
                </SectionText>
            </LeftSection>
            </Section>
            <BgAnimation />
          </Section>
        </Layout>
      );
};

export default maison;