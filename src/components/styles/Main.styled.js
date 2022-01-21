import styled from 'styled-components'

export const StyledMain = styled.section`
  padding: 3rem;
  margin-bottom: 3rem;
  display: flex;
  gap: 3rem;
  justify-content: space-around;
  flex-wrap: wrap;

  .article {
    background-color: #fefefe;
    box-shadow: 10px 10px 25px lightgrey, -10px -10px 25px lightgrey;
    width: 40%;
    min-width: 330px;
    padding: 2rem 3rem;
    border-radius: 10px;
  }

  .article h2 {
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .article .underline {
    height: 5px;
    width: 100px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 5px;
  }

  .article article {
    margin-top: 1rem;
    text-align: justify;
    line-height: 2.5rem;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
    align-items: center;

    .article {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 3rem 1.5rem;

    .article {
      min-width: 250px;
    }
  }
`
