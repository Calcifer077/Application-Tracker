import styled from "styled-components";
import ApplicationRow from "./ApplicationRow";
import ApplicationDetails from "./ApplicationDetails";
import { useApplications } from "./useApplications";
import SpinnerMini from "../ui/SpinnerMini";

const StyledMainDiv = styled.div`
  padding: 20px;
  background-color: #f5f5f4;
  border-radius: 10px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Heading = styled.h1`
  font-size: 26px;
  color: oklch(27.8% 0.033 256.848);
`;

const P = styled.p`
  margin-top: 5px;
  color: oklch(27.8% 0.033 256.848);
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
        applications.map((application) => (
          <ApplicationDetails
            index={application.id}
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
