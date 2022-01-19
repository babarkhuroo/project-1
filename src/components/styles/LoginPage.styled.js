import styled from 'styled-components'

export const StyledLoginPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0 auto;
  padding: 2rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  .hero {
    display: flex;
    width: 80%;
    max-width: 800px;
  }
  .blue {
    flex-basis: 30%;
    border-radius: 5px 0 0 5px;
    background-color: blueviolet;
  }
  .container {
    flex-basis: 70%;
    border-radius: 0 5px 5px 0;
    background-color: lightgrey;
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
    width: max-content;
    margin: 2rem auto;
  }
  .form p {
    margin: 2rem;
  }
  .form label {
    display: block;
  }
  .input {
    border: none;
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid black;
  }
  .input:focus {
    outline: none;
  }
  .forgot {
    width: max-content;
    margin: 2rem auto;
  }
  .forgot a {
    color: red;
  }
  .forgot a:hover {
    border-bottom: 1px solid black;
  }
  .btn {
    border: none;
    border-radius: 10px;
    width: 100%;
    margin: 2rem 0;
    padding: 1rem;
    cursor: pointer;
  }
  .btn:hover {
    background-color: red;
  }
  .create {
    width: max-content;
    margin: 2rem auto;
  }
  .create a {
    color: red;
  }
  .create a:hover {
    border-bottom: 1px solid black;
  }
`
