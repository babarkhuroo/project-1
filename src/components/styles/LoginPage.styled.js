import styled from 'styled-components'

export const StyledLoginPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  .hero {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 0 4rem;
    /* animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; */
  }
  .blue {
    padding: 3rem;
    border-radius: 0 5px 5px 0;
    background-color: #0066ff;
  }
  .container {
    max-height: 75vh;
    border-radius: 5px 0 0 5px;
    background-color: white;
    padding: 3rem 2rem;
    overflow-y: scroll;
  }
  svg {
    margin: 0 0.5rem;
    line-height: 0;
    color: white;
    cursor: pointer;
    transition: color 0.2s linear;
  }
  svg:hover {
    color: #bd0f10;
  }
  .blue h2 {
    color: white;
  }
  .container h2 {
    display: none;
  }
  hr {
    height: 1px;
    background-color: white;
    border: none;
  }
  .form {
    padding: 2rem 1rem;
  }
  .form p {
    position: relative;
    margin-bottom: 4rem;
  }
  .form label {
    font-weight: 500;
    display: block;
    position: absolute;
    color: grey;
    top: 0.5rem;
    transform-origin: top right;
    transition: transform 0.2s ease;
  }
  .form label.click {
    transform: translateY(-17px) scale(0.85);
  }
  .input {
    border: none;
    width: 100%;
    font-size: 15px;
    padding: 0.5rem 0;
    background-color: transparent;
    border-bottom: 1px solid grey;
  }
  .input:focus {
    outline: none;
    border-bottom: 1px solid #0066ff;
  }
  .forgot {
    width: max-content;
    margin: 0 auto 2rem;
  }
  a {
    font-weight: 500;
    display: inline-block;
    box-sizing: border-box;
    line-height: 1.5rem;
    color: #0066ff;
    font-size: 15px;
  }
  a:hover {
    border-bottom: 1px solid #0066ff;
  }
  .btn {
    color: white;
    background-color: rgb(0, 102, 255);
    font-weight: 500;
    border: none;
    border-radius: 5px;
    width: 100%;
    margin: 2rem 0;
    padding: 1rem;
    transition: all 0.15s linear;
    cursor: pointer;
  }
  .btn:hover {
    background-color: rgba(0, 102, 255, 0.8);
  }
  .create {
    width: max-content;
    margin: 2rem auto 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    .hero {
      margin: 0;
    }
    .blue {
      display: none;
    }
    .container {
      margin-right: 3rem;
      flex-basis: 100%;
      border-radius: 5px;
    }
    .container h2 {
      display: block;
      color: black;
      margin: 0 1rem 1rem 0;
    }
  }

  @keyframes fadeIn {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0.8) translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }
`
