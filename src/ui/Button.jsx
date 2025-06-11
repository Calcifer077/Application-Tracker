import styled, { css } from "styled-components";

// Size variants
const sizes = {
  form: css`
    width: 100%;
    padding: 12px 20px;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    border: 1px solid #ccc;
    color: #f4f4f5;
    background-color: #15803d;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #22c55e;
      color: #fafaf9;
    }
  `,

  medium: css`
    padding: 10px 16px;
    font-size: 14px;
  `,
};

const Button = styled.button`
  border-radius: 8px;
  margin-top: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => sizes[props.size] || sizes.medium};
`;

Button.defaultProps = {
  size: "medium",
};

export default Button;
