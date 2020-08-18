import styled from 'styled-components';

export const Background = styled.div`
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#212121')};
  border-style: solid;  
  border-radius: 25px;
  border-color: ${({ theme }) => (theme === 'light' ? '#F4EDEC' : '#B6A6A6')};
  border-width: 14px;
  margin: 7%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

export const IntroWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  padding-left: 1rem;
  display: flex;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h2 {
    padding-top: 100px;
    padding-bottom: 100px;
    font-family: 'Merriweather', serif;
    font-weight: 100;
    font-style: italic;
    justify-content: center;
    margin-bottom: 0rem;
    font-size: 22pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }
`;