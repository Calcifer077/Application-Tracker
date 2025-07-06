import styled from "styled-components";

const StyledConfirmDelete = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-text-color);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const StyledHeading = styled.h1`
  color: var(--color-main-text-color);
  font-size: 25px;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;

  font-size: 14px;

  &:hover {
    cursor: pointer;
  }

  background-color: ${(props) =>
    props.$type === "delete" ? `red` : `var(--color-list-button)`};
`;

function ConfirmDelete({ resourceName, disabled, onConfirm, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <StyledHeading as="h3">Delete {resourceName}</StyledHeading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <StyledButton $type="none" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </StyledButton>
        <StyledButton $type="delete" disabled={disabled} onClick={onConfirm}>
          Delete
        </StyledButton>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
