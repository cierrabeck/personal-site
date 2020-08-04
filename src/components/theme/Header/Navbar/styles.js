import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  --fill-color: #E5D0D0;
  font: 700 4rem Raleway, sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  --border-color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
	-webkit-text-stroke: 2px var(--border-color);
	background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
  color: transparent;
  -webkit-background-clip: text;
	background-clip: text;
	transition: 0.5s linear;

	&:hover {
	  background-size: 100%;
	}
`;
