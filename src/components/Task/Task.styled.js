import styled from "styled-components";

export const Task = styled.li`
  background-color: white;
  border: 0.75px solid gray;
  border-radius: 7px;
  padding: 0.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: scale(1.015);
    transition: 0.3s;
  }

  input {
    border: none;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  button {
    height: 1rem;
    width: 1rem;
    padding: 1rem;
    font-size: 1rem;

    border: none;
    background-color: transparent;
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .complete-btn {
    font-size: 0.75rem;
    height: 0.5rem;
    width: 0.5rem;
    padding: 1em;
    border: 0.75px solid gray;
    border-radius: 7px;
  }

  ${props => {
      switch(props.taskStatus) {
        case "true":
          return (
            "opacity: 0.35; input {text-decoration: line-through; transition: 0.3s;} .complete-btn {background-color: black; color: white; }"
          )
        case "false":
          return (
            ".complete-btn .icon {display: none;}"
          )
      }
    }}
`
