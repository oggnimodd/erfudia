import React from 'react';
import {
  FooterWrapper,
  Links,
  LinksCol,
  LinksHeader,
  LinksContent,
  Item,
  Copyright,
  CopyrightText,
} from './Footer.style';
import SubscribeForm from '../../common/SubscribeForm/SubscribeForm';
import Link from '../../common/Link/Link';
import Brand from '../../common/Brand/Brand';

const Footer = () => {
  return (
    <FooterWrapper as="footer">
      <SubscribeForm />
      <Links>
        <LinksCol>
          <LinksHeader>
            Site links
          </LinksHeader>
          <LinksContent>
            <Item><Link to="/">Home</Link></Item>
            <Item><Link to="/about">About</Link></Item>
            <Item><Link to="/portfolio">Portfolio</Link></Item>
            <Item><Link to="/contact">Contact</Link></Item>
          </LinksContent>
        </LinksCol>

        <LinksCol>
          <LinksHeader>
            Information
          </LinksHeader>
          <LinksContent>
            <Item>
              <a href="tel:(+1)-999-888-777">
                (+1)-123-456-789
              </a>
            </Item>
            <Item>
              <a href="mailto:mail@erfudia.com">
                mail@erfudia.com
              </a>
            </Item>
            <Item>Tokyo, JP</Item>
            <Item>Madrid, SP</Item>
          </LinksContent>
        </LinksCol>

        <LinksCol>
          <LinksHeader>
            Follow Us
          </LinksHeader>
          <LinksContent>
            <Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com"
              >
                Instagram
              </a>
            </Item>
            <Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com"
              >
                Facebook
              </a>
            </Item>
            <Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com"
              >
                Twitter
              </a>
            </Item>
            <Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com"
              >
                Youtube
              </a>
            </Item>
          </LinksContent>
        </LinksCol>
      </Links>
      <Copyright>
        <Brand />
        <CopyrightText>
          {new Date().getFullYear()} - Developed by &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dominggo1999"
          >dominggo1999
          </a>
        </CopyrightText>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
