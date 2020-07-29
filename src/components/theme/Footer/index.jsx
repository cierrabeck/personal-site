import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';
import gitIcon from 'assets/icons/git.svg';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Cierra Beck</h2>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="40" src={gitIcon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
