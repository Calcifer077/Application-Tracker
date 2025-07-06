import styled from "styled-components";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";

const MainDiv = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Heading = styled.h1`
  text-align: center;
  padding-top: 50px;
`;

const SubHeading = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

const StyledDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--color-white);
`;

const P = styled.p`
  color: var(--color-text-color);
  margin-top: 12px;
  text-align: right;
`;

const A = styled.a`
  color: var(--color-anchor-text);
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: var(--color-anchor-text-hover);
  }
`;

function Login() {
  return (
    <MainDiv>
      <Heading>Application Tracker</Heading>
      <SubHeading>Login in to your account</SubHeading>

      <StyledDiv>
        <Form>
          <FormRow label="Enter your Email">
            <Input placeholder="mahesh@example.com" />
          </FormRow>

          <FormRow label="Enter your password">
            <Input placeholder="********" />
          </FormRow>

          <Button size="form">Login</Button>
          <P>
            Don't have a account? <A>Sign up</A>
          </P>
        </Form>
      </StyledDiv>
    </MainDiv>
  );
}

export default Login;
