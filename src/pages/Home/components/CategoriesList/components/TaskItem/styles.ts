import { CheckCircle, Pencil, ThreeDotsVertical, Trash } from "styled-icons/bootstrap";
import { ProgressTwo } from "styled-icons/entypo";
import styled, { css, keyframes } from "styled-components";

export const Container = styled.li`
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);

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
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  max-width: 80%;
  word-break: break-all;
`;
interface EditProps {
  isShowed?: boolean;
}

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

export const ThreeDotsVerticalIcon = styled(ThreeDotsVertical)<EditProps>`
  ${iconCSS};
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

export const TimerContainer = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  transition: right 0.6s ease;
  &.showed {
    right: 170px;
  }

  background-color: #118ab2;
  padding: 0.1rem 0.5rem;
  border-radius: 5px;
`;

const C = styled.div`
  span {
    margin-left: 2px;
  }
`;

export const HourContainer = styled.div`
  span {
  }
`;
export const Colon = styled.div``;
export const MinutesContainer = styled.div``;
