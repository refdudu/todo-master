import styled, { css } from "styled-components";

import {
  CheckCircle,
  Pencil,
  Trash,
  ThreeDotsVertical,
} from "styled-icons/bootstrap";
import { ProgressTwo } from "styled-icons/entypo";

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

export const ThreeDotsVerticalIcon = styled(ThreeDotsVertical)`
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
