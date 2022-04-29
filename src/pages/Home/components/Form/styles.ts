import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 1rem 0;

  display: flex;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
