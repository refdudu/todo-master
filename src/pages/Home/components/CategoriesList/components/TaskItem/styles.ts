import styled from "styled-components";

export const Container = styled.li`
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  position: relative;

  > div {
    display: flex;
    align-items: center;
  }

  &:last-child {
    border: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  max-width: 80%;
  word-break: break-all;
`;
