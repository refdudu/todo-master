import styled from "styled-components";
import { Plus } from "styled-icons/bootstrap";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 1rem 0;

  display: flex;
  justify-content: space-between;

  > input {
    padding: 0.7rem;
    flex: 1;
    font-size: 1.2rem;

    border: 2px solid transparent;
    border-right: none;
    &:focus {
      border-color: ${colors.border};
    }
  }
`;
export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.div`
  height: 100%;
  cursor: pointer;
  padding: 0.7rem;

  border: 2px solid ${colors.border};
`;
export const Icon = styled(Plus)`
  width: 30px;
  height: 30px;
`;
