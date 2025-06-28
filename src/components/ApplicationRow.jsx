import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px 60px 20px 20px;
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr);
  border-bottom: 1.5px solid var(--color-border);
  align-items: center;
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
  text-align: left;
`;

function ApplicationRow() {
  return (
    <StyledDiv>
      <Span>ID</Span>
      <Span>Company</Span>
      <Span>Platform</Span>
      <Span>Status</Span>
      <Span>Date Applied</Span>
      <Span>Notes</Span>
    </StyledDiv>
  );
}

export default ApplicationRow;
