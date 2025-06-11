import styled from "styled-components";

const MainDiv = styled.div`
  width: 100vw;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
  color: oklch(27.8% 0.033 256.848);
`;

function Heading() {
  return (
    <MainDiv>
      <H1>Application tracker</H1>
    </MainDiv>
  );
}

export default Heading;
