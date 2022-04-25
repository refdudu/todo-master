// @styled-icons/entypo/ProgressEmpty
// @styled-icons/entypo/ProgressOne
// @styled-icons/entypo/ProgressTwo
// @styled-icons/entypo/ProgressFull

import styled, { css } from "styled-components";
import {
  ProgressEmpty,
  ProgressFull,
  ProgressOne,
  ProgressTwo,
} from "styled-icons/entypo";

const iconCSS = css`
  width: 30px;
  height: 30px;

  fill: #118ab2;
  &:hover {
    filter: brightness(1.5);
  }
`;

export const IconEmpty = styled(ProgressEmpty)`
  ${iconCSS}
`;
export const IconOne = styled(ProgressOne)`
  ${iconCSS}
`;
export const IconTwo = styled(ProgressTwo)`
  ${iconCSS}
`;
export const IconFull = styled(ProgressFull)`
  ${iconCSS}
`;
