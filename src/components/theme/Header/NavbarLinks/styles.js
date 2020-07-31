import styled from 'styled-components';

export const Wrapper = styled.div`

a {
	--fill-color: #198CE6;
	position: relative;
	display: block;
	padding: 4px 0;
	font: 700 3rem Raleway, sans-serif;
	text-decoration: none;
	text-transform: uppercase;
	-webkit-text-stroke: 2px var(--fill-color);
	background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
	color: transparent;
	background-clip: text;
	transition: 0.5s linear;

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
