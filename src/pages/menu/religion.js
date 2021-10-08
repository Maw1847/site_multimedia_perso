import React from 'react';
import { Layout } from "../../layout/Layout";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import BgAnimation from '../../components/BackgrooundAnimation/BackgroundAnimation';
import { LeftSection, Img } from './../../components/Hero/HeroStyles';

const religion = () => {
    return (
        <Layout>
          <Section grid>
            <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                Ma vie religieuse   
                </SectionTitle>                   
                <SectionText>
                    Ah les sujets intéressants !!! Ce sera probablement le sous-menu le plus court du site 😅. <br />
                    Pour faire simple, pour moi Dieu existe et sans lui on ne peut rien. Après, il faut aussi travailler dans la vie.
                    Après je dirai que j'ai une relation particulière avec Dieu.
                </SectionText>
                    
                <SectionText>
                    Aller à la messe tous les dimanches matins c'est déjà une grosse lutte pour moi. Mais cela ne fait pas de moi pour autant un mauvais chrétien.
                </SectionText>
            </LeftSection>
            </Section>
            <BgAnimation />
          </Section>
        </Layout>
    );
};

export default religion;