import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import image from 'assets/illustrations/image.png';
import { Animation } from 'components/common';
import { Wrapper, Background, IntroWrapper, Details, Thumbnail} from './styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "image.png"}) {
      childImageSharp {
        fluid {
          aspectRatio
          sizes
          src
          base64
          srcSet
        }
      }
    }
  }`)

  return (
    <Background>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      <Animation />
      <Wrapper theme={theme}>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi!</h1>
          <h4>I’m Cierra, a New York City based software developer passionate about the social applications of technology and big data.</h4>
        </Details>
        <Thumbnail theme={theme}>
          <Img fluid={data.file.childImageSharp.fluid} alt="Cierra" />
        </Thumbnail>
      </IntroWrapper>
      <Footer />
    </Wrapper>
  </Background>
  );
};