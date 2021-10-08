import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Site Multimédia</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/menu/ecole">
          <NavLink>🏫 Ecole</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/menu/maison">
          <NavLink>🏠 Maison</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="/menu/religion">
          <NavLink>📿 Religion</NavLink>
        </Link>
      </li>     
      <li>
        <Link href="/menu/distraction">
          <NavLink>🎮 Distraction</NavLink>
        </Link>
      </li>     
      <li>
        <Link href="/menu/bio">
          <NavLink>🙇 Biographie</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Maw1847" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-dagnon-2b65bb221/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/JeromeDagnon" target="_blank">
          <AiFillTwitterSquare size="3rem"/>
        </SocialIcons>
        <SocialIcons href="mailto:mawprofessional7@gmail.com" target="_blank">
          <AiFillMail size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
