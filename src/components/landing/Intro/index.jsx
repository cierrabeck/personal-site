import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi! Welcome to my site</h1>
          <h4>I’m Cierra, a New York City based software developer passionate about the social applications of technology and big data.</h4>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Cierra" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
