import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  font-size: 36pt;
  font-weight: bold;
  font-shadow: 10pt;
  text-shadow: 0 10px 4px #E5D0D0;
  text-decoration: none;
  border-bottom: none;
  text
`;
