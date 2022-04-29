import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 0.3rem 0;
  border-bottom: 2px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 2rem;
  }
`;
