import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import { Animation } from 'components/common';
import { Wrapper, Background, IntroWrapper, Details, Thumbnail} from './styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Gallery = () => {
  const { theme } = useContext(ThemeContext);
  const art = useStaticQuery(graphql`
  query artQuery {
    allFile(filter: {relativeDirectory: {eq: "art1"}}, sort: {fields: base, order: ASC}) {
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
      <IntroWrapper as={Container}>
        {art.allFile.edges.slice(0, 3).map(({node}) =>
        (
          <Thumbnail theme={theme}> 
            <Img fluid={node.childImageSharp.fluid} />
          </Thumbnail>
        ))}
      </IntroWrapper>
      <IntroWrapper as={Container}>
        {art.allFile.edges.slice(3, 6).map(({node}) =>
          (
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
