import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;

  background-color: ${props => props.theme.solitude};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  > * {
    width: 100%;
    height: 100%;
  }
`;