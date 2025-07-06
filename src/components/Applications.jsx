import styled from "styled-components";
import ApplicationRow from "./ApplicationRow";
import ApplicationDetails from "./ApplicationDetails";
import { useApplications } from "./useApplications";
import SpinnerMini from "../ui/SpinnerMini";
import ApplicationOperations from "./ApplicationOperations";
import Pagination from "../ui/Pagination";
import Menus from "../ui/Menus";

const StyledMainDiv = styled.div`
  padding: 20px;
  background-color: var(--color-white);
  border-radius: 10px;
  margin: 20px;
`;

const Heading = styled.h1`
  font-size: 26px;
  color: var(--color-main-text-color);
`;

const P = styled.p`
  margin-top: 5px;
  color: var(--color-text-color);
`;

const StyledFlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Applications() {
  const { isLoading, applications, count } = useApplications();

  return (
    <StyledMainDiv>
      <StyledFlexDiv>
        <div>
          <Heading>Your Applications</Heading>
          <P>Track status off all your Applications</P>
        </div>

        {/* Add filtering and sorting feature */}
        <ApplicationOperations />
      </StyledFlexDiv>
      <ApplicationRow />
      {isLoading && <SpinnerMini />}
      {!isLoading && !applications && <p>No applications were found!</p>}

      {!isLoading && applications && (
        <Menus>
          {applications.map((application) => (
            <ApplicationDetails
              id={application.id}
              company={application.company}
              platform={application.platform}
              status={application.status}
              notes={application.notes}
              date={application.date_applied}
              key={application.id}
            />
          ))}
        </Menus>
      )}

      {!isLoading && applications && <Pagination pages={count} />}
    </StyledMainDiv>
  );
}

export default Applications;
