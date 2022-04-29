import styled, { css } from "styled-components";
import { Trash } from "styled-icons/bootstrap";
import { Warning } from "styled-icons/material";
import { Cancel } from "styled-icons/typicons";

type WrapperProps = {
  isOpened: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999999999999;
  height: 100vh;
  width: 100vw;
  display: ${({ isOpened }) => (isOpened ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;
export const WarningIcon = styled(Warning)`
  width: 100%;
  max-width: 100px;
  fill: #ecbc40;
`;
export const TitleContainer = styled.div`
  margin: 1rem 0;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const Button = styled.button`
  flex: 1;
  padding: 0.5rem;
  cursor: pointer;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const DeleteIcon = styled(Trash)`
  ${iconCSS}
`;
export const DeleteButton = styled(Button)`
  background-color: #ef476f;
`;
export const CancelIcon = styled(Cancel)`
  ${iconCSS}
`;
export const CancelButton = styled(Button)`
  background-color: #b7b7a4;
`;
