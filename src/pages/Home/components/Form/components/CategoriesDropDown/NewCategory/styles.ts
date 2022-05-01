import styled from "styled-components";
import { Plus } from "styled-icons/bootstrap";

type NewCategoryProps = {
  isShowed?: boolean;
};

export const Container = styled.div<NewCategoryProps>`
  padding: 0.5rem 1rem;
  display: ${(props) => (props.isShowed ? "flex" : "none")};

  input {
    border-bottom: 1px solid var(--border);
    padding: 0.2rem;
    width: 100%;
  }
  button {
    margin-left: 5px;
    padding: 0.1rem 0.2rem;
    background-color: var(--border);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
`;
export const Icon = styled(Plus)`
  width: 20px;
`;
