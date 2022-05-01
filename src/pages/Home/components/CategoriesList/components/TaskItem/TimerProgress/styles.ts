import styled from "styled-components";

export const Container = styled.div`
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
