import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenue <br />
          sur Mon Site Multimédia Personnel 
        </SectionTitle>
        <SectionText>
          <Img src={'/images/5.jpg'} />
        </SectionText>
        <SectionText>
        Je m'appelle Jérôme DAGNON et je suis actuellement étudiant en 3ème année d'Informatique(Option Systèmes Informatiques et Logiciels). <br />
        Je suis développeur de logiciels et un grand passionné de l'Intelligence Artificielle.
        </SectionText>
        <SectionText>
          Vous découvrirez ici plusieurs aspects de ma vie ainsi que mes compétences et expériences.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;