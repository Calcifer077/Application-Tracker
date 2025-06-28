import { MdOutlineDateRange } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import DropdownApplicationStatus from "./DropdownApplicationStatus";
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

const StatusCell = styled.span`
  background-color: var(--color-cell-background-color);
  width: fit-content;
  padding: 4px 8px;
  border-radius: 6px;
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

function ApplicationDetails({ id, company, platform, status, date, notes }) {
  return (
    <StyledDiv>
      <Cell>{id}</Cell>
      <Cell>{company}</Cell>
      <Cell>{platform}</Cell>

      <DropdownApplicationStatus
        status={status}
        items={[
          { value: "pending", label: "Pending" },
          { value: "rejected", label: "Rejected" },
          { value: "selected", label: "Selected" },
          { value: "interview", label: "Interview Scheduled" },
        ]}
        applicationId={id}
      />

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
