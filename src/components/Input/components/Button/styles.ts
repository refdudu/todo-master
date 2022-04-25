import { colors } from "../../../../styles/colors";
import { Plus } from "styled-icons/bootstrap";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  height: 100%;
  cursor: pointer;
  padding: 0.7rem;

  border: 2px solid ${colors.border};
  @media (max-width: 850px) {
    width: 100%;
    border: none;
  }
`;
export const Icon = styled(Plus)`
  width: 30px;
  height: 30px;
`;
export const Text = styled.span`
  @media (min-width: 850px) {
    display: none;
  }
`;
