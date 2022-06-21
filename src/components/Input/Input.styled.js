import styled from "styled-components"

export const Input = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: white;
  border: none;
  border-radius: 2rem;

  input {
    font-family: "DM Sans", sans-serif;
    padding: 0.5rem 1rem;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 2rem;
    font-weight: 600;
    font-size: 1rem;
  }

  button {
    height: 1rem;
    width: 1rem;
    padding: 1em;
    margin-right: 0.5rem;
    font-size: 1rem;
    background-color: transparent;
    color: black;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: scale(1.3);
      transition: 0.1s;
    }
  }
`



