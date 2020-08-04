import styled from 'styled-components';

export const Wrapper = styled.div`

  @media (max-width: 1960px) {
    padding: 0rem 0 0rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`

  a {
    margin-right: 1rem;

    box-shadow: 0 0 0 rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

