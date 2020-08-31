import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container } from 'components/common';
import { Animation } from 'components/common';
import { Wrapper, Background, IntroWrapper, Details, Thumbnail} from './styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Articles = () => {
  const { theme } = useContext(ThemeContext);
  const tech = useStaticQuery(graphql`
  query techQuery {
    allFile(filter: {relativeDirectory: {eq: "tech"}}, sort: {fields: base, order: ASC}) {
      edges {
        node {
          base
          blocks
          childImageSharp {
            fluid {
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }  
  `)

  return (
    <Background>
      <Animation />
      <Wrapper theme={theme}>
      <Header />
      <Details theme={theme} as={Container}>
      </Details>
      <IntroWrapper as={Container}>
        {tech.allFile.edges.slice(0, 3).map(({node}) => (
          <Thumbnail theme={theme}> 
            <Img fluid={node.childImageSharp.fluid} />
          </Thumbnail>
        ))}
      </IntroWrapper>
      <Footer />
    </Wrapper>
  </Background>

  );
};
