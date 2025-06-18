import styled from "styled-components";

const MainDiv = styled.div`
  width: 100vw;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
  color: #var(--color-main-text-color);
`;

function Heading() {
  return (
    <MainDiv>
      <H1>Application tracker</H1>
    </MainDiv>
  );
}

export default Heading;
