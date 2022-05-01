import {
  Container,
  Colon,
  HourContainer,
  MinutesContainer,
} from "./styles";

function TimerProgress() {
  return (
    <Container>
      <HourContainer>
        <span>0</span>
        <span>3</span>
      </HourContainer>
      <Colon>:</Colon>
      <MinutesContainer>
        <span>2</span>
        <span>0</span>
      </MinutesContainer>
    </Container>
  );
}
