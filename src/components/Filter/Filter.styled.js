import styled from "styled-components";

export const Filter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: black;

  button {
    font-family: "DM Sans", sans-serif;
    padding: 0.25rem 0.5rem;
    border: 0.75px solid gray;
    border-radius: 7px;
    background-color: white;
    font-size: 1rem;
    color: black;
  }

  ${props => {
    switch (props.status) {
      case "Complete":
        return ".complete-btn {background-color: black; color: white;}"
      case "Incomplete":
        return ".incomplete-btn {background-color: black; color: white;}"
      case "All":
        return ".all-btn {background-color: black; color: white;}"
      default :
        return ""
    }
  }}
`;