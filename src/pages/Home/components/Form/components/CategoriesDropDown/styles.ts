import styled from "styled-components";
import { CaretDownFill, Plus } from "styled-icons/bootstrap";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  padding: 0.7rem 1.5rem;
  min-width: 250px;

  border: 2px solid var(--border);
  border-right: none;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
export const CaretDownIcon = styled(CaretDownFill)`
  margin-left: 5px;
  width: 15px;
  height: 15px;
`;

type ListProps = {
  isOpened?: boolean;
};

export const List = styled.ul<ListProps>`
  display: ${(props) => (props.isOpened ? "block" : "none")};
  z-index: 9999;
  position: absolute;
  background: #fff;
  top: 52px;
  width: calc(100% + 4px);

  border: 2px solid var(--border);
  @media (max-width: 850px) {
    top: 48px;
  }
`;
export const Item = styled.li`
  padding: 0.3rem 1.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: var(--border);
  }

  & + & {
    border-top: 1px solid var(--border);
  }
`;

export const CreateNewCategory = styled(Item)`
  padding: 1rem 1.2rem;
  background-color: #fff;

  background-color: var(--blue-light);
  border-bottom: none;
  > span {
    font-size: 0.8rem;
  }
`;
export const PlusIcon = styled(Plus)`
  width: 20px;
  height: 20px;

  margin-right: 2px;
`;
