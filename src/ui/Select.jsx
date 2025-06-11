import styled from "styled-components";

const StyledSelect = styled.select`
  margin-top: 8px;
  padding: 10px 14px;
  background-color: white;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
  &:focus {
    border-color: #4f46e5; /* Indigo-600 */
  }
`;

function Select({ options, value, onChange }) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
