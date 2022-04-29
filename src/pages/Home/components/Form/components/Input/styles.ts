import { Clear } from "styled-icons/material";
import styled from "styled-components";

type ContainerProps = {
  isFocus?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0.7rem;

  display: flex;
  align-items: center;

  border: 2px solid ${(props) => (props.isFocus ? 'var(--border)' : "transparent")};
  /* border-right: none; */

  > input {
    width: 100%;
    font-size: 1.2rem;
  }
`;
export const ClearIcon = styled(Clear)`
  width: 15px;
  height: 15px;
  margin-right: 5px;

  cursor: pointer;

  fill: #000;
  border-radius: 50%;
  border: 1px solid #000;
`;
