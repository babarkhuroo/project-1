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

  .hero {
    display: flex;
    width: 100%;
    max-width: 600px;
  }
  .blue {
    flex-basis: 40%;
    border-radius: 0 5px 5px 0;
    background-color: #0066ff;
    position: relative;
  }
  .container {
    flex-basis: 60%;
    border-radius: 5px 0 0 5px;
    background-color: white;
    padding: 3rem 2rem;
    position: relative;
  }
  svg {
    position: absolute;
    top: 0rem;
    left: -3.5rem;
    color: white;
    cursor: pointer;
    transition: color 0.2s linear;
  }
  svg:hover {
    color: darkred;
  }
  h2 {
    color: white;
    padding: 1.5rem;
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
`
