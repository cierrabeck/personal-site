import styled from 'styled-components';

export const Background = styled.div`
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#212121')};
  border-style: solid;  
  border-color: #E1CDB7;
  border-width: 14px;
  margin: 7%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 20pt;
    }
  }

  h4 {
    margin-bottom: 0rem;
    font-size: 22pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 50%;
    margin-top: 1.45rem;
    align: right;
  }
`;