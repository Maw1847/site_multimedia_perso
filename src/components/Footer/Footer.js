import React from "react";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>📞 Téléphone</LinkTitle>
          <LinkItem href="tel:+229 95 06 35 23">+229 95 06 35 23</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>📧 Email</LinkTitle>
          <LinkItem href="mailto:mawprofessional7@gmail.com">
            mawprofessional7@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>
            Développeur mobile(Flutter), Web(Reactjs + Django/Nodejs)
          </Slogan>
          <Slogan>
            Soyez le changement que vous voulez voir dans le monde
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Maw1847" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-dagnon-2b65bb221/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/JeromeDagnon" target="_blank">
            <AiFillTwitterSquare size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
