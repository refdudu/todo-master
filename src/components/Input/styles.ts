import { colors } from "../../styles/colors";
import styled from "styled-components";
import { Clear } from "styled-icons/material";

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

type InputContainerProps = {
  isFocus?: boolean;
};

export const InputContainer = styled.div<InputContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;
  border: 2px solid
    ${(props) => (props.isFocus ? colors.border : "transparent")};
  border-right: none;
  padding: 0.7rem;
  > input {
    flex: 1;
    font-size: 1.2rem;
  }
`;
export const ClearIcon = styled(Clear)`
  width: 20px;
  height: 20px;
  fill: #000;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 5px;
  border: 1px solid #000;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #eaeaea;
  }
`;
