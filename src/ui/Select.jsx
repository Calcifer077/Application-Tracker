import styled from "styled-components";

const StyledSelectForm = styled.select`
  margin-top: 8px;
  padding: 10px 14px;
  background-color: white;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
  &:focus {
    border-color: var(--color-hover-input);
  }
`;

const StyledSelectDetails = styled.select`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: var(--color-cell-background-color);
  max-width: 160px;
  font-size: 16px;
  color: #1f2937;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: var(--color-green);
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3); /* green glow */
  }

  option {
    background-color: white;
    color: #1f2937;
  }
`;

function Select({ options, value, onChange, type, disabled }) {
  if (type === "form") {
    return (
      <StyledSelectForm value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelectForm>
    );
  } else {
    return (
      <StyledSelectDetails
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelectDetails>
    );
  }
}

export default Select;
