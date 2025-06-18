import { MdOutlineDateRange } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr) 40px;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  font-size: 15px;
`;

const Cell = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-text-color);
  font-weight: 600;
  text-transform: capitalize;
`;

const IconButton = styled.span`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-color);

  &:hover {
    color: var(--color-main-text-color);
  }
`;

function ApplicationDetails({ index, company, platform, status, date, notes }) {
  return (
    <StyledDiv>
      <Cell>{index}</Cell>
      <Cell>{company}</Cell>
      <Cell>{platform}</Cell>
      <Cell>{status}</Cell>
      <Cell>
        <MdOutlineDateRange />
        {date}
      </Cell>
      <Cell>{notes}</Cell>
      <IconButton>
        <SlOptionsVertical />
      </IconButton>
    </StyledDiv>
  );
}

export default ApplicationDetails;
