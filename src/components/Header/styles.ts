import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid ${colors.border};
`;
export const Text = styled.span`
  font-size: 2rem;
`;
