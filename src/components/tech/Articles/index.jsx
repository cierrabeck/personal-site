import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container } from 'components/common';
import { Animation } from 'components/common';
import { Wrapper, Background, IntroWrapper, Image, Details, Links, Thumbnail} from './styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import tech from './tech.json';

export const Articles = () => {
  const { theme } = useContext(ThemeContext);
  const techImages = useStaticQuery(graphql`
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

  const articles = ["Dated", "backtrack", ];
  //"Online Classroom"];

  return (
    <Background>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet"></link>
      <Animation />
      <Wrapper theme={theme}>
      <Header />
      <IntroWrapper as={Container}>
        {articles.map((value, index) => (
          <Thumbnail theme={theme}> 
            <Image>
              <Img fluid={techImages.allFile.edges[index].node.childImageSharp.fluid} />
            </Image>
            <Details>
              <h2> {value} </h2>
              <p> {tech[index].p1} </p>
              <p> {tech[index].p2} </p>
            </Details>
            <Links>
            {tech[index].icons.map(({ id, name, link, icon }) => (
              <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                <img width="40%" src={icon} alt={name} />
              </a>
            ))}
            </Links>         
          </Thumbnail>
        ))}
      </IntroWrapper>
      <Footer />
    </Wrapper>
  </Background>

  );
};
