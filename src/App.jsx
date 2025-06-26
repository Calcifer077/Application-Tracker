import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Heading from "./components/Heading";
import Applications from "./components/Applications";
import ApplicationForm from "./components/ApplicationForm";
import { BrowserRouter } from "react-router-dom";

const StyledDiv = styled.div`
  background-color: var(--color-main-background);
  padding-bottom: 20px;
  width: 100vw;
  height: 100%;
`;

// Creating a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <StyledDiv>
          <Heading />
          <ApplicationForm />
          <Applications />
        </StyledDiv>
      </BrowserRouter>
      <Toaster
        position="top-center"
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          duration: "2000",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            maxWidth: "500px",
            padding: "16px 24px",
            borderColor: "var(--color-border)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
