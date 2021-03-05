import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Se cadastre para receber e-mails e novidades sobre nós!
        </FooterSubHeading>
        <FooterSubText>Você pode cancelar a qualquer momento.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="example@gmail.com" />
            <Button fontBig>Inscreva-se</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
            <FooterLink to='/sign-up'>Como funciona?</FooterLink>
            <FooterLink to='/'>Suporte</FooterLink>
            <FooterLink to='/'>Avaliações</FooterLink>
            <FooterLink to='/'>Preços</FooterLink>
            <FooterLink to='/'>Termos de Serviço</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Contato</FooterLinkTitle>
            <FooterLink to='/sign-up'>Como funciona?</FooterLink>
            <FooterLink to='/'>Suporte</FooterLink>
            <FooterLink to='/'>Avaliações</FooterLink>
            <FooterLink to='/'>Preços</FooterLink>
            <FooterLink to='/'>Termos de Serviço</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/sign-up'>Como funciona?</FooterLink>
            <FooterLink to='/'>Suporte</FooterLink>
            <FooterLink to='/'>Avaliações</FooterLink>
            <FooterLink to='/'>Preços</FooterLink>
            <FooterLink to='/'>Termos de Serviço</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Mídia Social</FooterLinkTitle>
            <FooterLink to='/sign-up'>Como funciona?</FooterLink>
            <FooterLink to='/'>Suporte</FooterLink>
            <FooterLink to='/'>Avaliações</FooterLink>
            <FooterLink to='/'>Preços</FooterLink>
            <FooterLink to='/'>Termos de Serviço</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" >
            <SocialIcon>
              ULTRA
            </SocialIcon>
          </SocialLogo>
          <WebsiteRights>ENGLISH HYPE 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
