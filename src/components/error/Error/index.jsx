import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import { Animation } from 'components/common';
import { Wrapper, Background, IntroWrapper, Details} from './styles';

export const Error = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Animation />
      <Wrapper theme={theme}>
      <Header />
      <Details theme={theme} as={Container}>
        <h2> Sorry, that page doesn't exist! </h2>
        </Details>
      <IntroWrapper as={Container}>
      </IntroWrapper>
      <Footer />
    </Wrapper>
  </Background>

  );
};
