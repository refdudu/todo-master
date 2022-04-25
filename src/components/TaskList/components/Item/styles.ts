import {
  CheckCircle,
  Pencil,
  ThreeDotsVertical,
  Trash,
} from "styled-icons/bootstrap";
import { ProgressTwo } from "styled-icons/entypo";
import styled, { css, keyframes } from "styled-components";
import { colors } from "../../../../styles/colors";

export const Container = styled.li`
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.border};

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  position: relative;

  > div {
    display: flex;
    align-items: center;
  }

  &:last-child {
    border: none;
  }
  &.in-progress {
    /* border: 1px solid #7f93a3; */
  }
`;

export const Content = styled.div`
  padding: 0 1rem;
  display: flex;
  gap: 10px;
  align-items: center;
`;
type EditProps = {
  isShowed?: boolean;
};

export const ActionsContainer = styled.div<EditProps>`
  gap: 15px;
  padding: 0.5rem;
  background-color: #2a3742;
  border-radius: 5px;
  display: flex;

  position: absolute;
  display: flex;

  right: -150px;
  transition: right 0.6s ease;
  &.showed {
    right: 20px;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  cursor: pointer;

  transition: filter 0.4s ease;
  fill: #aaaaaa;
  &:hover {
    filter: brightness(1.5);
  }
  &.in-content {
    cursor: default;
  }
`;

export const ThreeDotsVerticalIcon = styled(
  ThreeDotsVertical
)<EditProps>`
  ${iconCSS};
  display: ${({ isShowed }) => (isShowed ? "none" : "block")};
  fill: #000;
`;

export const DeleteIcon = styled(Trash)`
  ${iconCSS}
  fill:#ef476f;
`;
export const InProgressIcon = styled(ProgressTwo)`
  ${iconCSS}
  fill:#118ab2;
`;
export const EditIcon = styled(Pencil)`
  ${iconCSS}
  fill:#ffd166;
`;
export const FinishedIcon = styled(CheckCircle)`
  ${iconCSS}
  fill:#06d6a0;
  &.in-content {
    width: 25px;
    height: 25px;
  }
`;
