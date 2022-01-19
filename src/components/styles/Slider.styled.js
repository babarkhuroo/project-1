import styled from 'styled-components'

export const StyledSlider = styled.div`
  margin: 1rem auto;
  border-radius: 10px;
  width: 90%;

  .img-container {
    border-radius: 10px;
    height: 400px;
    position: relative;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.6s linear;
  }

  .img.active {
    opacity: 1;
    transform: translateX(0);
  }

  .img.next {
    opacity: 0;
    transform: translateX(-110%);
  }

  .img.prev {
    opacity: 0;
    transform: translateX(110%);
  }

  .indicator-container {
    background-color: rgba(0, 0, 0, 0.3);
    width: max-content;
    border-radius: 500px;
    padding: 0.5rem 1rem;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .indicator {
    margin: 0 0.5rem;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 0.2s linear;
  }

  .indicator:hover {
    background-color: white;
    cursor: pointer;
  }

  .indicator.active {
    margin: 0 0.3rem;
    background-color: white;
    width: 18px;
    border-radius: 500px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    .img-container {
      height: 300px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    .img-container {
      height: 200px;
    }
  }
`
