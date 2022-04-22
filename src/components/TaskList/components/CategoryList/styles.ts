import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
  padding: 1rem;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > span {
    font-size: 1.5rem;
  }
`;
export const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: ${colors.border};
  &:first-child {
    margin-right: 1.5rem;
  }
  &:last-child {
    margin-left: 1.5rem;
  }
`;
export const List = styled.div`
  overflow: hidden;
  &.closed {
    max-height: 0;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
