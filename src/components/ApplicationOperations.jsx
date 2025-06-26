import styled from "styled-components";
import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";

const StyledDiv = styled.div`
  margin-right: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

function ApplicationOperations() {
  return (
    <StyledDiv>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "pending", label: "Pending" },
          { value: "rejected", label: "Rejected" },
          { value: "selected", label: "Selected" },
          { value: "interview", label: "Interview Scheduled" },
        ]}
      />
      <SortBy
        options={[
          { value: "date_applied_asc", label: "Sort By Date(Asc)" },
          {
            value: "date_applied_desc",
            label: "Sort By Date(Desc)",
          },
          {
            value: "company_asc",
            label: "Sort By Company Name(Asc)",
          },
          {
            value: "company_desc",
            label: "Sort By Company Name(Desc)",
          },
        ]}
      />
    </StyledDiv>
  );
}

export default ApplicationOperations;
