import styled from "styled-components";


interface EditProps {
  isShowed?: boolean;
}

export const Container = styled.div<EditProps>`
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
