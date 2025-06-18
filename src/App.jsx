import styled from "styled-components";
import ApplicationForm from "./components/ApplicationForm";
import Heading from "./components/Heading";
import Applications from "./components/Applications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login";

const StyledDiv = styled.div`
  background-color: var(--color-main-background);
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
        {/* <Login /> */}
        <Heading />
        <ApplicationForm />
        <Applications />
      </StyledDiv>
    </QueryClientProvider>
  );
}

export default App;
