import styled from 'styled-components'

export const StyledVideo = styled.div`
  max-width: 100%;
  margin: 6rem;

  .video-container {
    width: 100%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 60% 40%;
    overflow: hidden;
  }

  .videos {
    line-height: 0;
    overflow: hidden;
    position: relative;
  }

  .videos .controls {
    visibility: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }

  .videos.grid-1 {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .videos video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 0 4rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 0 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 0 2rem;
    .video-container {
      grid-template-columns: repeat(2, auto);
      grid-template-rows: 40% 30% 30%;
    }
  }
`
