import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import image from 'assets/illustrations/image.png';
import { Animation } from 'components/common';
import { Wrapper, Background, IntroWrapper, Details, Thumbnail} from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Animation />
      <Wrapper theme={theme}>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi!</h1>
          <h4>I’m Cierra, a New York City based software developer passionate about the social applications of technology and big data.</h4>
        </Details>
        <Thumbnail>
          <img src={image} align='right' alt="Cierra" />
        </Thumbnail>
      </IntroWrapper>
      <Footer />
    </Wrapper>
  </Background>

  );
};
