import { MdOutlineDateRange } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr) 40px;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  font-size: 15px;
`;

const Cell = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #374151;
  font-weight: 600;
  text-transform: capitalize;
`;

const IconButton = styled.span`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #6b7280;

  &:hover {
    color: #374151;
  }
`;

function ApplicationDetails({ index, company, platform, status, date, notes }) {
  console.log(index, 1);
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
