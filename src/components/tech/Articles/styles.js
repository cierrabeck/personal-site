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
  flex-direction: column;
`;

export const Thumbnail = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: center;
  margin-right: 0.75rem;
  margin-left: 0.75rem;
  margin-bottom: 0.75rem;
  width: 100%;
  border-radius: 25px;
  background: ${({ theme }) => (theme === 'light' ? '#F4EDEC' : '#B6A6A6')};

  transition: all 0.4s ease-in-out;
`;

export const Image = styled.div`
    flex: 1;
    width: 50%;
    background: #E5D0D0;
    border-radius: 25px;
    margin: 20px;

    &:hover {
      box-shadow: 
      inset 0 0 0 1px rgba(255,255,255,0.1);
      transform: scale(1);
      opacity: 1;
    }
`;

export const Details = styled.div`
    flex: 3;
    margin: 20px;
    h2 {
      font-family: 'Crimson Text', serif;
      font-style: italic;
    }

    p {
      font-family: 'Crimson Text', serif;
    }
`;

export const Links = styled.div`
    flex: 1;
    align-self: center;
    margin-top: 20px;
    justify-self: center;
    a {
      margin-right: 0.5rem;
      box-shadow: 0 0 0 rgba(0,0,0,0.15);
      transition: box-shadow 0.3s ease-in-out;
    }
`;