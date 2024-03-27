import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"></SocialLogo>
                    <SocialIcons>
                        <SocialIconLink hred="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink hred="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink hred="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink hred="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink hred="/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer