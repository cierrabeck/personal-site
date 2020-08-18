import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import tech1 from 'assets/illustrations/tech1.png'
import tech2 from 'assets/illustrations/tech2.png'
import tech3 from 'assets/illustrations/tech3.png'
import { Animation } from 'components/common';
import { Wrapper, Background, IntroWrapper, Details, Thumbnail} from './styles';

export const Articles = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Animation />
      <Wrapper theme={theme}>
      <Header />
      <Details theme={theme} as={Container}>
      </Details>
      <IntroWrapper as={Container}>
        <Thumbnail theme={theme}>
          <img src={tech1} align='center' alt="1" />
        </Thumbnail>
        <Thumbnail theme={theme}>
          <img src={tech2} align='center' alt="1" />
        </Thumbnail>
        <Thumbnail theme={theme}>
          <img src={tech3} align='center' alt="1" />
        </Thumbnail>
      </IntroWrapper>
      <Footer />
    </Wrapper>
  </Background>

  );
};
