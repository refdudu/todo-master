import styled from "styled-components";
import { CaretDownFill, Plus } from "styled-icons/bootstrap";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  padding: 0.7rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  border: 2px solid ${colors.border};
  border-right: none;
  min-width: 250px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  > span {
  }
`;
export const CaretDownIcon = styled(CaretDownFill)`
  margin-left: 5px;
  width: 15px;
  /* height: 10px; */
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

  border: 2px solid ${colors.border};
  /* border-top: none; */
  @media (max-width: 850px) {
    top: 48px;
  }
`;
export const Item = styled.li`
  padding: 0.3rem 1.5rem;
  width: 100%;
  border-bottom: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.8s
    cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: ${colors.border};
  }
`;

export const CreateNewCategory = styled(Item)`
  padding: 1rem;
  background-color: #fff;

  background-color: #cadeef;
  border-bottom: none;
  > span {
    font-size: 0.8rem;
  }
`;
export const PlusIcon = styled(Plus)`
  width: 20px;
  /* height: 20px; */

  &.create-category {
  }
  &.new-category {
    margin-right: 5px;
  }
`;
