import React from "react";
import { Layout } from "../../layout/Layout";
import BgAnimation from "../../components/BackgrooundAnimation/BackgroundAnimation";
import {
    Section,
    SectionText,
    SectionTitle,
  } from "../../styles/GlobalComponents";
  import { LeftSection } from "./../../components/Hero/HeroStyles";
  import {
    LinkItem,
    LinkList,
    LinkTitle,
    LinkColumn,
  } from "../../components/Footer/FooterStyles";
  import  Projects from "../../components/Projects/Projects";

const bio = () => {
  return (
    <Layout>
      <Section grid>
        <Section row nopadding>
          <LeftSection>
            <SectionTitle main center>
              Biographie + Compétences + Expériences
            </SectionTitle>
            <SectionText>
              Je m'appelle Jérôme Mawoutondji DAGNON et je suis né le 22 Août 1999 à Parakou au Bénin. Je réside actuellement à Abomey-Calavi, une ville située au sud du même pays.
              Je suis de nationalité béninoise et actuellement, je suis étudiant en 3e année d'Informatique dans une université de la place mais également développeur freelance et businessman (à mes heures perdues😅).
              J'ai vécu une enfance formidable à Parakou où j'ai reçu beaucoup d'amour de ma famille. J'ai toujours été un privilégié et je serai toujours reconnaissant envers Dieu et ma famile pour ça.
              Donc mon histoire commence à Parakou(ville que j'admire beaucoup). En toute modestie, je peux dire que j'ai été un brillant écolier, un brillant élève et un brillant lycéen(C'est bien mais ce n'est pas le plus important 😎).
              A l'adolescence, bah la vie m'a rattrapé et j'ai compris que c'était pas un conte de fées. Beaucoup de choses pas toutes très jolies se sont produites mais c'est la vie avec ses hauts et ses bas et j'en ressors grandi.
              Aujourd'hui, j'essaie juste de m'améliorer quotidiennement sur tous les plans et continuer par grandir et apprendre. Je ne vais pas aller plus que ça dans les détails de ma vie.
            </SectionText>
          </LeftSection>
        </Section>
        <BgAnimation />
      </Section>
      <SectionTitle main center>
              Compétences
        </SectionTitle>
        <LinkList>
          <LinkColumn>
          <LinkTitle>Savoirs:</LinkTitle>
          <LinkItem >-Titulaire d’un Baccalauréat Série C de l'enseignement du second degré;</LinkItem>
          <LinkItem >-Boursier d’excellence Odon Vallet et de l’Etat du Bénin;</LinkItem>
          <LinkItem >-Développeur mobile (multiplateforme #Flutter), web(#React #Node #Django #Web Assembly), d'API,...;</LinkItem>
          <LinkItem >-Niveau débutant en Data Science et Machine Learning;</LinkItem>
          <LinkItem >-...;</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <LinkTitle>Savoirs-faire:</LinkTitle>
          <LinkItem >-Solide maîtrise de l’outil informatique et de nombreux logiciels;</LinkItem>
          <LinkItem >-Excellentes habiletés dans les différentes phases de la gestión d’un projet informatique;</LinkItem>
          <LinkItem >-Bonnes aptitudes en Logique;</LinkItem>
          <LinkItem >-Niveau intermédiaire en développement Mobile, Web et Desktop;</LinkItem>
          <LinkItem >-...;</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <LinkTitle>Savoirs-être:</LinkTitle>
          <LinkItem >-Grande ouverture d’esprit, ponctuel, peux travailler sous pression, rigoureux;</LinkItem>
          <LinkItem >-Dérerminé, créatif, responsable, humble, capacité d’adaptation rapide à divers scénarii;</LinkItem>
          <LinkItem >-Motivé, passionné, curieux et autodidacte;</LinkItem>
          <LinkItem >-...;</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <LinkTitle>ETUDES / FORMATIONS / CONCOURS :</LinkTitle>
          <LinkItem >-Actuellement étudiant en Troisième année d’Informatique;</LinkItem>
          <LinkItem >-Baccalauréat Série C (Mention Bien): Session de Juin 2016;</LinkItem>
          <LinkItem >-BEPC Moderne court (16 de moyenne): Session de Juin 2013;</LinkItem>
          <LinkItem >-Phase internationale du concours PROLAF à Lomé(Togo) en 2012;</LinkItem>
          <LinkItem >-Phase départementale du Championnat de Mathématiques en 2013;</LinkItem>
          <LinkItem >-Phase nationale du concours PROLAF en 2014;</LinkItem>
          <LinkItem >-Phase nationale des Olympiades Panafricaines de Mathématiques(OPAM) en 2014;</LinkItem>
          <LinkItem >-Participation à une Ecole d'Eté sur l'Intelligence Artificielle(EEIA) en 2021;</LinkItem>
          <LinkItem >-...;</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <LinkTitle>COMPETENCES LINGUISTIQUES :</LinkTitle>
          <LinkItem >-Français parlé et écrit(95%);</LinkItem>
          <LinkItem >-Anglais parlé et écrit(80%);</LinkItem>
          <LinkItem >-Fon;</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <LinkTitle>COMPETENCES INFORMATIQUES :</LinkTitle>
          <LinkItem >-Logiciels de bureautique : Word, Excel, PowerPoint;</LinkItem>
          <LinkItem >-Systèmes d’exploitations : Windows, Linux(Ubuntu, Kali linux);</LinkItem>
          <LinkItem >-IDE: Android Studio, (**Visual Studio Code), CodeBlocks, IntellJ Idea, Apache Netbeans,...;</LinkItem>
          <LinkItem >-Serveurs : Apache et NGINX</LinkItem>
          <LinkItem >-SGBD: MySQL, PostgreSQL, MongoDB, SQLite;</LinkItem>
          <LinkItem >-Design et maquette(niveau débutant): Adobe Photoshop CS6, Balsamiq Mockups, Canva, Figma;</LinkItem>
          <LinkItem >-Conception des Systèmes d’Information et Administration des bases de données;</LinkItem>
          <LinkItem >-...;</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <LinkTitle>Langages :</LinkTitle>
          <LinkItem >-HTML / CSS (3/5);</LinkItem>
          <LinkItem >-JavaScript(4/5);</LinkItem>
          <LinkItem >-XML(2/5);</LinkItem>
          <LinkItem >-JSON(3/5);</LinkItem>
          <LinkItem >-PHP(2/5);</LinkItem>
          <LinkItem >-Langage C(2/5);</LinkItem>
          <LinkItem >-Langage C++(2/5);</LinkItem>
          <LinkItem >-JAVA(2/5);</LinkItem>
          <LinkItem >-Dart(3/5);</LinkItem>
          <LinkItem >-Python(3/5);</LinkItem>
          <LinkItem >-Langage R(2/5);</LinkItem>
          <LinkItem >-Sass(1/5);</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <LinkTitle>FRAMEWORKS / LIBRAIRIES :</LinkTitle>
          <LinkItem >-Flutter (3/5);</LinkItem>
          <LinkItem >-Django(2/5);</LinkItem>
          <LinkItem >-NodeJS(3/5);</LinkItem>
          <LinkItem >-Reactjs(3/5);</LinkItem>
          <LinkItem >-Bootstrap(2/5);</LinkItem>
          <LinkItem >-Tailwind CSS C(1/5);</LinkItem>
          <LinkItem >-Kivy(2/5);</LinkItem>
          <LinkItem >-Tkinter(2/5);</LinkItem>
          <LinkItem >-Python Eel(1/5);</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <LinkTitle>AUTRES TECHNOS / OUTILS :</LinkTitle>
          <LinkItem >-PWA : Progressive Web App (1/5);</LinkItem>
          <LinkItem >-WebAssembly(1/5);</LinkItem>
          <LinkItem >-JSON-LD(1/5);</LinkItem>
          <LinkItem >-Git(3/5);</LinkItem>
          <LinkItem >-Développement d'API(2/5);</LinkItem>
          <LinkItem >-Consomation d'API(3/5);</LinkItem>
          <LinkItem >-Data Science(1/5);</LinkItem>
          <LinkItem >-Machine Learning(1/5);</LinkItem>
          <LinkItem >-Algorithmique et Structures de Données(3/5);</LinkItem>
          </LinkColumn>
      </LinkList>
      <SectionTitle main center>
              Expériences
        </SectionTitle>
        <Projects/>
    </Layout>
  );
};

export default bio;
