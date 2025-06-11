import styled from "styled-components";

const Input = styled.input`
  margin-top: 8px;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4f46e5; /* Indigo-600 */
  }

  &::placeholder {
    color: #aaa;
  }
`;

export default Input;
