import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import image from 'assets/illustrations/image.png';
import drawing1 from 'assets/illustrations/drawing1.png'
import drawing2 from 'assets/illustrations/drawing2.png'
import drawing3 from 'assets/illustrations/drawing3.png'
import { Animation } from 'components/common';
import { Wrapper, Background, IntroWrapper, Details, Thumbnail} from './styles';

export const Gallery = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Animation />
      <Wrapper theme={theme}>
      <Header />
      <Details theme={theme} as={Container}>
        {/* <h2> friends </h2> */}
        </Details>
      <IntroWrapper as={Container}>
        <Thumbnail theme={theme}>
          <img src={drawing1} align='center' alt="1" />
        </Thumbnail>
        <Thumbnail theme={theme}>
          <img src={drawing2} align='center' alt="2" />
        </Thumbnail>
        <Thumbnail theme={theme}>
          <img src={drawing3} align='center' alt="3" />
        </Thumbnail>
      </IntroWrapper>
      <Footer />
    </Wrapper>
  </Background>

  );
};
