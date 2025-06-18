import styled from "styled-components";
import ApplicationRow from "./ApplicationRow";
import ApplicationDetails from "./ApplicationDetails";
import { useApplications } from "./useApplications";
import SpinnerMini from "../ui/SpinnerMini";

const StyledMainDiv = styled.div`
  padding: 20px;
  background-color: var(--color-white);
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const Heading = styled.h1`
  font-size: 26px;
  color: var(--color-main-text-color);
`;

const P = styled.p`
  margin-top: 5px;
  color: var(--color-text-color);
`;

function Applications() {
  const { isLoading, applications } = useApplications();

  return (
    <StyledMainDiv>
      <Heading>Your Applications</Heading>
      <P>Track status off all your Applications</P>

      <ApplicationRow />

      {isLoading && <SpinnerMini />}

      {!isLoading &&
        applications.map((application, index) => (
          <ApplicationDetails
            index={++index}
            company={application.company}
            platform={application.platform}
            status={application.status}
            notes={application.notes}
            date={application.date_applied}
            key={application.id}
          />
        ))}
    </StyledMainDiv>
  );
}

export default Applications;
