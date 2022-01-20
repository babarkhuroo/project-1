import styled from 'styled-components'

export const Button = styled.button`
  font-weight: 500;
  border: none;
  padding: 1rem 4rem;
  line-height: 1rem;
  border-radius: 10px;
  color: #fff;
  background-color: rgb(0, 102, 255);
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 102, 255, 0.8);
  }
`
