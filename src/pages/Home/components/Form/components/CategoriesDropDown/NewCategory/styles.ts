import styled from "styled-components";
import { Plus } from "styled-icons/bootstrap";

type NewCategoryProps = {
  isShowed?: boolean;
};

export const Container = styled.div<NewCategoryProps>`
  padding: 0.5rem 1rem;
  display: ${(props) => (props.isShowed ? "flex" : "none")};

  input {
    padding: 0.2rem;
    width: 100%;
    border-bottom: 1px solid var(--border);
  }
  button {
    padding: 0.1rem;
    background-color: var(--border);
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
export const Icon = styled(Plus)`
  width: 20px;
`;
