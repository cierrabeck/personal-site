import styled from 'styled-components';

//   a {
//     color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
// 	text-decoration: none;
// 	background: #F2E6E6;
// 	text-align: center;
// 	width: 75px;
// 	padding: 10px;
// 	border-right: 50px;
// 	outline: 3px solid #E5D0D0;
//   	outline-offset: 5px;
//   }

//   a:hover {
// 	outline-offset: 0px;
//   }

export const Wrapper = styled.div`

a {
	--fill-color: #E5D0D0;
	font: 900 2rem Raleway, sans-serif;
	text-decoration: none;
	--border-color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
	-webkit-text-stroke: 2px var(--border-color);	
	background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
	color: transparent;
	-webkit-background-clip: text;
	background-clip: text;
	transition: 0.5s linear;

	position: relative;
	display: block;
	padding: 4px 0;

	&:hover {
	  background-size: 100%;
	}
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
