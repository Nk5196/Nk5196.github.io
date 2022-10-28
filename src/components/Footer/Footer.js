import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
         <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href='8668282499'>8668282499</LinkItem>
         </LinkColumn>
         <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:narendrakandalkar@gmail.com'>narendrakandalkar@gmail.com</LinkItem>
         </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        👨‍💻 with ❤️ by Narendra Kandalkar using ⚛️
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Nk5196">
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/narendra-kandalkar-161b55170/">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="mailto:narendrakandalkar@gmail.com">
      <AiFillMail size="3rem"/>
    </SocialIcons>
    </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
