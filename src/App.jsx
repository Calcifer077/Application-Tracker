import styled from "styled-components";
import ApplicationForm from "./components/ApplicationForm";
import Heading from "./components/Heading";
import Applications from "./components/Applications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const StyledDiv = styled.div`
  background-color: oklch(92.8% 0.006 264.531);
  padding: 20px;
  width: 100vw;
  height: 100%;
`;

// Creating a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <StyledDiv>
        <Heading />
        <ApplicationForm />
        <Applications />
      </StyledDiv>
    </QueryClientProvider>
  );
}

export default App;
