import styled from "styled-components";

export const Container = styled.li`
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  > span {
    margin: 0 1.5rem;
    font-size: 1.5rem;
  }
`;
export const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: var(--border);
`;
  
type ListProps = {
  height: number;
};

export const List = styled.div<ListProps>`
  overflow: hidden;

  max-height: ${({ height }) => (!!height ? height : 0)}px;
  transition: max-height 0.5s ease;

  &.closed {
    max-height: 0;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;