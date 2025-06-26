import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const FilterGroup = styled.div`
  background-color: var(--color-main-background);
  display: flex;
  gap: 6px;
  padding: 6px;
  border-radius: 4px;
`;

const FilterButton = styled.button`
  padding: 4px 6px;
  outline: none;
  border: none;
  border-radius: 4px;
  /* background-color: var(--color-filter-not-active); */
  color: var(--color-filter-not-active-text);
  font-weight: 500;

  background-color: ${(props) =>
    props.$active
      ? `var(--color-filter-active)`
      : `var(--color-filter-not-active)`};

  &:hover:not(:disabled) {
    cursor: pointer;
  }
`;

// This component will simply return ui for filtering
function Filter({ filterField, options }) {
  // To get URL.
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);

    setSearchParams(searchParams);
  }

  return (
    <FilterGroup>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          // As 'active' is not a default property of a HTML button we have to pass it using '$', so that it is not sent to the DOM but still exists in the props.
          $active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </FilterGroup>
  );
}

export default Filter;
