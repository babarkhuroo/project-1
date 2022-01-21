import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: #2f2f2f;
  padding: 1rem;
  color: #fff;

  h2 {
    width: max-content;
    margin: 0 auto;
    padding: 1rem;
  }

  .underline {
    margin: 0 auto;
    height: 5px;
    width: 80px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 5px;
  }

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem;
    height: 200px;
  }

  .map {
    margin: 0;
    flex-basis: 40%;
  }

  ul {
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
    align-items: center;
  }

  li {
    display: flex;
  }

  a {
    line-height: 1rem;
    transition: all 0.2s linear;
    color: white;
  }

  .fb:hover {
    color: #4599ff;
  }

  .twttr:hover {
    color: rgb(29, 155, 240);
  }

  .ig:hover {
    color: #dd326e;
  }

  h5 {
    width: max-content;
    margin: 2rem auto;
  }
`
