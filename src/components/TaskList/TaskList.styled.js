import styled from "styled-components";

export const TaskList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  > * {
    width: 100%;
    height: 100%;
  }

  p {
    display: block;
    text-align: center;
    opacity: 0.5;
  }

`
