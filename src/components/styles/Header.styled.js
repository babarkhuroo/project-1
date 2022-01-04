import styled from 'styled-components'

export const StyledHeader = styled.header`
  nav {
    display: flex;
    justify-content: flex-end;
    gap: 3rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid darkgrey;
  }

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  li {
    display: flex;
  }

  a {
    line-height: 1rem;
    transition: all 0.2s linear;
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

  .marquee {
    width: 100%;
    padding: 1rem 0;
    font-weight: 600;
    overflow: hidden;
  }

  .marquee p {
    width: max-content;
    padding-right: 100%;
    animation: marquee 8s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`
