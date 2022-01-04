import styled from 'styled-components'

export const Button = styled.button`
  font-weight: 500;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  background-color: rgb(0, 102, 255);
  color: #fff;
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 102, 255, 0.75);
  }
`
